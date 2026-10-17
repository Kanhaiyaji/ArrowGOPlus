/**
 * Arrow GO+ - Grid & Collision Engine
 * Handles board coordinates, arrow placement, and ray-casting clearance checks.
 */

import { DIRECTIONS } from './constants.js';

export class ArrowGrid {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    // 2D matrix [y][x]
    this.matrix = Array.from({ length: height }, () => Array(width).fill(null));
    // Fast lookup map by ID: id -> arrow
    this.arrows = new Map();
    this.totalInitialArrows = 0;
  }

  /**
   * Place an arrow on the grid
   */
  addArrow(x, y, dirKey, customId = null) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      throw new Error(`Coordinates (${x}, ${y}) out of grid bounds (${this.width}x${this.height})`);
    }

    if (this.matrix[y][x] !== null) {
      this.removeArrowAt(x, y);
    }

    const id = customId || `arrow_${x}_${y}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const arrow = {
      id,
      x,
      y,
      dir: dirKey,
      state: 'idle', // 'idle' | 'escaping' | 'bumping' | 'hinted'
      animProgress: 0,
      animStartTime: 0,
      bumpVector: { dx: 0, dy: 0 },
      isRemoved: false
    };

    this.matrix[y][x] = arrow;
    this.arrows.set(id, arrow);
    return arrow;
  }

  getArrow(x, y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) return null;
    const arrow = this.matrix[y][x];
    if (arrow && !arrow.isRemoved && arrow.state !== 'escaping') {
      return arrow;
    }
    return null;
  }

  getArrowById(id) {
    return this.arrows.get(id) || null;
  }

  removeArrow(id) {
    const arrow = this.arrows.get(id);
    if (!arrow) return false;

    if (this.matrix[arrow.y][arrow.x] === arrow) {
      this.matrix[arrow.y][arrow.x] = null;
    }
    arrow.isRemoved = true;
    this.arrows.delete(id);
    return true;
  }

  removeArrowAt(x, y) {
    const arrow = this.matrix[y][x];
    if (arrow) {
      this.arrows.delete(arrow.id);
      this.matrix[y][x] = null;
      arrow.isRemoved = true;
      return arrow;
    }
    return null;
  }

  /**
   * Ray-cast in arrow's facing direction to see if anything blocks its path to the edge
   * @param {Object} arrow 
   * @returns {{ clear: boolean, blocker: Object|null, distance: number }}
   */
  checkPathClear(arrow) {
    if (!arrow || arrow.isRemoved) {
      return { clear: false, blocker: null, distance: 0 };
    }

    const dirInfo = DIRECTIONS[arrow.dir];
    if (!dirInfo) {
      return { clear: false, blocker: null, distance: 0 };
    }

    let cx = arrow.x + dirInfo.dx;
    let cy = arrow.y + dirInfo.dy;
    let distance = 0;

    while (cx >= 0 && cx < this.width && cy >= 0 && cy < this.height) {
      distance++;
      const obstacle = this.matrix[cy][cx];
      // Only count obstacle if it's not already escaping or removed
      if (obstacle && !obstacle.isRemoved && obstacle.state !== 'escaping') {
        return {
          clear: false,
          blocker: obstacle,
          distance
        };
      }
      cx += dirInfo.dx;
      cy += dirInfo.dy;
    }

    // Successfully reached the border of the board
    return {
      clear: true,
      blocker: null,
      distance: distance + 1
    };
  }

  /**
   * Returns list of all arrows that currently have an unobstructed exit path
   */
  getAvailableMoves() {
    const available = [];
    for (const arrow of this.arrows.values()) {
      if (arrow.isRemoved || arrow.state === 'escaping') continue;
      if (this.checkPathClear(arrow).clear) {
        available.push(arrow);
      }
    }
    return available;
  }

  /**
   * Count remaining active arrows
   */
  getActiveCount() {
    let count = 0;
    for (const arrow of this.arrows.values()) {
      if (!arrow.isRemoved && arrow.state !== 'escaping') {
        count++;
      }
    }
    return count;
  }

  /**
   * Return a list of all active arrows
   */
  getAllActiveArrows() {
    return Array.from(this.arrows.values()).filter(a => !a.isRemoved && a.state !== 'escaping');
  }

  /**
   * Clone the current grid into an independent deep copy (used for undo and solver)
   */
  clone() {
    const copy = new ArrowGrid(this.width, this.height);
    copy.totalInitialArrows = this.totalInitialArrows;

    for (const arrow of this.arrows.values()) {
      if (!arrow.isRemoved) {
        copy.addArrow(arrow.x, arrow.y, arrow.dir, arrow.id);
      }
    }
    return copy;
  }

  /**
   * Export the current grid layout to a portable JSON-compatible object
   */
  serialize() {
    const arrowList = [];
    for (const arrow of this.arrows.values()) {
      if (!arrow.isRemoved) {
        arrowList.push({
          x: arrow.x,
          y: arrow.y,
          dir: arrow.dir
        });
      }
    }
    return {
      width: this.width,
      height: this.height,
      arrows: arrowList
    };
  }

  /**
   * Load from serialized data
   */
  static deserialize(data) {
    const grid = new ArrowGrid(data.width, data.height);
    for (const a of data.arrows) {
      grid.addArrow(a.x, a.y, a.dir);
    }
    grid.totalInitialArrows = grid.arrows.size;
    return grid;
  }
}
