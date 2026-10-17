/**
 * Arrow GO+ - Neon Polyline Arrow Engine
 * Reverse-Engineered from the exact com.arrowpuzzle.arrowgo mobile app.
 *
 * Each arrow is a winding polyline / neon track:
 * - A sequence of connected grid points: [p0, p1, ..., pn]
 * - A tail dot at p0
 * - An arrow head at pn pointing in the exit direction
 * - Can slide forward and exit when its head ray is unobstructed
 */

export const CARDINALS = {
  UP: { dx: 0, dy: -1, angle: 0 },
  RIGHT: { dx: 1, dy: 0, angle: 90 },
  DOWN: { dx: 0, dy: 1, angle: 180 },
  LEFT: { dx: -1, dy: 0, angle: 270 }
};

export class PolylineArrowGrid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.isCircular = false;
    // Map of arrowId -> arrow object
    this.arrows = new Map();
    // 2D grid of occupied points: matrix[y][x] = arrowId or null
    this.matrix = Array.from({ length: height }, () => Array(width).fill(null));
  }

  /**
   * Add a winding arrow to the grid
   * @param {string} id 
   * @param {Array<{x: number, y: number}>} points List of consecutive coordinates along the path
   * @param {string} color (optional custom accent color)
   */
  addArrow(id, points, color = null) {
    if (!points || points.length < 2) {
      throw new Error(`Arrow ${id} must have at least 2 points`);
    }

    const tail = points[0];
    const head = points[points.length - 1];
    const prev = points[points.length - 2];

    // Determine head direction
    const dx = head.x - prev.x;
    const dy = head.y - prev.y;
    let dir = 'UP';
    if (dx > 0) dir = 'RIGHT';
    else if (dx < 0) dir = 'LEFT';
    else if (dy > 0) dir = 'DOWN';
    else if (dy < 0) dir = 'UP';

    const arrow = {
      id,
      points: points.map(p => ({ x: p.x, y: p.y })),
      tail: { ...tail },
      head: { ...head },
      dir,
      color: color || '#FFFFFF',
      state: 'idle', // 'idle' | 'escaping' | 'blocked' | 'hinted'
      animProgress: 0,
      animStartTime: 0,
      isRemoved: false
    };

    this.arrows.set(id, arrow);

    // Register all intermediate points in the occupancy matrix
    for (let i = 0; i < points.length - 1; i++) {
      const p1 = points[i];
      const p2 = points[i + 1];
      
      const dx = Math.sign(p2.x - p1.x);
      const dy = Math.sign(p2.y - p1.y);

      let cx = p1.x;
      let cy = p1.y;
      const maxSteps = Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y) + 1;
      let steps = 0;

      while (steps < maxSteps) {
        if (cx >= 0 && cx < this.width && cy >= 0 && cy < this.height) {
          this.matrix[cy][cx] = id;
        }
        if (cx === p2.x && cy === p2.y) break;
        if (cx !== p2.x) cx += dx;
        else if (cy !== p2.y) cy += dy;
        steps++;
      }
    }

    return arrow;
  }

  removeArrow(id) {
    const arrow = this.arrows.get(id);
    if (!arrow || arrow.isRemoved) return false;

    // Clear points from matrix
    for (let i = 0; i < arrow.points.length - 1; i++) {
      const p1 = arrow.points[i];
      const p2 = arrow.points[i + 1];
      const dx = Math.sign(p2.x - p1.x);
      const dy = Math.sign(p2.y - p1.y);

      let cx = p1.x;
      let cy = p1.y;
      const maxSteps = Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y) + 1;
      let steps = 0;

      while (steps < maxSteps) {
        if (cx >= 0 && cx < this.width && cy >= 0 && cy < this.height) {
          if (this.matrix[cy][cx] === id) {
            this.matrix[cy][cx] = null;
          }
        }
        if (cx === p2.x && cy === p2.y) break;
        if (cx !== p2.x) cx += dx;
        else if (cy !== p2.y) cy += dy;
        steps++;
      }
    }

    arrow.isRemoved = true;
    return true;
  }

  /**
   * Check if arrow's head has a clear path to the edge of the board
   * @param {Object} arrow 
   * @returns {{ clear: boolean, blockerId: string|null }}
   */
  checkPathClear(arrow) {
    if (!arrow || arrow.isRemoved) {
      return { clear: false, blockerId: null };
    }

    const card = CARDINALS[arrow.dir];
    let cx = arrow.head.x + card.dx;
    let cy = arrow.head.y + card.dy;

    const centerX = (this.width - 1) / 2;
    const centerY = (this.height - 1) / 2;
    const maxRadius = this.isCircular ? Math.min(this.width, this.height) / 2 - 0.1 : Infinity;

    while (cx >= 0 && cx < this.width && cy >= 0 && cy < this.height) {
      if (this.isCircular && Math.hypot(cx - centerX, cy - centerY) > maxRadius) {
        return { clear: true, blockerId: null };
      }
      const occupant = this.matrix[cy][cx];
      if (occupant !== null && occupant !== arrow.id) {
        const blocker = this.arrows.get(occupant);
        if (blocker && !blocker.isRemoved && blocker.state !== 'escaping') {
          return { clear: false, blockerId: occupant };
        }
      }
      cx += card.dx;
      cy += card.dy;
    }

    // Reached boundary without hitting other active arrow
    return { clear: true, blockerId: null };
  }

  /**
   * Find arrow tapped near screen coordinates
   */
  hitTest(gridX, gridY, tolerance = 0.5) {
    for (const arrow of this.arrows.values()) {
      if (arrow.isRemoved || arrow.state === 'escaping') continue;

      for (let i = 0; i < arrow.points.length - 1; i++) {
        const p1 = arrow.points[i];
        const p2 = arrow.points[i + 1];

        const minX = Math.min(p1.x, p2.x) - tolerance;
        const maxX = Math.max(p1.x, p2.x) + tolerance;
        const minY = Math.min(p1.y, p2.y) - tolerance;
        const maxY = Math.max(p1.y, p2.y) + tolerance;

        if (gridX >= minX && gridX <= maxX && gridY >= minY && gridY <= maxY) {
          // Distance to segment
          const d = this.distToSegment(gridX, gridY, p1.x, p1.y, p2.x, p2.y);
          if (d <= tolerance) {
            return arrow;
          }
        }
      }
    }
    return null;
  }

  distToSegment(px, py, x1, y1, x2, y2) {
    const l2 = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (l2 === 0) return Math.hypot(px - x1, py - y1);
    let t = ((px - x1) * (x2 - x1) + (py - y1) * (y2 - y1)) / l2;
    t = Math.max(0, Math.min(1, t));
    return Math.hypot(px - (x1 + t * (x2 - x1)), py - (y1 + t * (y2 - y1)));
  }

  getAvailableMoves() {
    const moves = [];
    for (const arrow of this.arrows.values()) {
      if (arrow.isRemoved || arrow.state === 'escaping') continue;
      if (this.checkPathClear(arrow).clear) {
        moves.push(arrow);
      }
    }
    return moves;
  }

  getActiveCount() {
    let count = 0;
    for (const arrow of this.arrows.values()) {
      if (!arrow.isRemoved && arrow.state !== 'escaping') {
        count++;
      }
    }
    return count;
  }

  getAllActiveArrows() {
    return Array.from(this.arrows.values()).filter(a => !a.isRemoved && a.state !== 'escaping');
  }

  clone() {
    const copy = new PolylineArrowGrid(this.width, this.height);
    copy.isCircular = this.isCircular;
    for (const a of this.arrows.values()) {
      if (!a.isRemoved) {
        const cloned = copy.addArrow(a.id, a.points, a.color);
        cloned.isDot = a.isDot;
      }
    }
    return copy;
  }

  serialize() {
    const list = [];
    for (const a of this.arrows.values()) {
      if (!a.isRemoved) {
        list.push({
          id: a.id,
          points: a.points,
          color: a.color
        });
      }
    }
    return {
      width: this.width,
      height: this.height,
      arrows: list
    };
  }

  static deserialize(data) {
    const grid = new PolylineArrowGrid(data.width, data.height);
    for (const a of data.arrows) {
      grid.addArrow(a.id, a.points, a.color);
    }
    return grid;
  }
}
