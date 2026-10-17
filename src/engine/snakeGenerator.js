/**
 * Arrow GO+ - Procedural Winding Snake Arrow Maze Generator
 * Guaranteed 100% solvable with ZERO deadlocks and NO dummy fallbacks.
 *
 * Algorithm: Reverse-Escape DAG Assembly (Outside-In)
 * Instead of naive forward random-walk (which suffers exponential deadlock probability),
 * arrows are generated in reverse escape order.
 *
 * Each arrow is placed such that its exit ray to the grid boundary is currently clear
 * of any previously placed arrows. When solved forward by the player, arrows are cleared
 * in topological order. By mathematical induction, this DAG is strictly acyclic,
 * guaranteeing 100% solvability without deadlocks.
 */

import { PolylineArrowGrid, CARDINALS } from './snakeGrid.js';
import { PolylineArrowSolver } from './snakeSolver.js';

const DIRS = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
const OPPOSITE = { UP: 'DOWN', DOWN: 'UP', LEFT: 'RIGHT', RIGHT: 'LEFT' };

const NEON_PALETTE = [
  '#00F0FF', // Cyan
  '#FF0055', // Neon Pink / Magenta
  '#00FF66', // Neon Emerald Green
  '#FFE600', // Neon Cyber Yellow
  '#B026FF', // Neon Purple
  '#FF7700', // Neon Orange
  '#00E5FF', // Electric Blue
  '#FFFFFF'  // Sleek White
];

export class PolylineArrowGenerator {
  /**
   * Generate a procedural winding arrow maze
   * @param {number} width - Grid width
   * @param {number} height - Grid height
   * @param {number} targetArrows - Desired number of arrows
   * @param {boolean} isCircular - Whether to constrain to circular radar boundary
   * @returns {{ grid: PolylineArrowGrid, solvable: boolean, arrowCount: number, attempts: number }}
   */
  static generate(width = 8, height = 9, targetArrows = 12, isCircular = false) {
    const grid = new PolylineArrowGrid(width, height);
    grid.isCircular = isCircular;
    const occupied = Array.from({ length: height }, () => Array(width).fill(false));

    const centerX = (width - 1) / 2;
    const centerY = (height - 1) / 2;
    const maxRadius = isCircular ? Math.min(width, height) / 2 - 0.15 : Infinity;

    // Mask out cells outside circular boundary
    if (isCircular) {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (Math.hypot(x - centerX, y - centerY) > maxRadius) {
            occupied[y][x] = true;
          }
        }
      }
    }

    // Fast check: is ray from (hx, hy) in direction dir clear to the boundary?
    function isRayClear(hx, hy, dir) {
      let cx = hx + CARDINALS[dir].dx;
      let cy = hy + CARDINALS[dir].dy;
      while (cx >= 0 && cx < width && cy >= 0 && cy < height) {
        if (isCircular && Math.hypot(cx - centerX, cy - centerY) > maxRadius) {
          return true; // Reached outside circle
        }
        if (occupied[cy][cx]) return false;
        cx += CARDINALS[dir].dx;
        cy += CARDINALS[dir].dy;
      }
      return true;
    }

    let placed = 0;
    let attempts = 0;
    const maxAttempts = Math.max(500, targetArrows * 40);

    while (placed < targetArrows && attempts < maxAttempts) {
      attempts++;

      // 1. Collect all unoccupied cells that can serve as a head with a clear exit ray
      const candidateHeads = [];
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          if (!occupied[y][x]) {
            for (const d of DIRS) {
              const prevX = x - CARDINALS[d].dx;
              const prevY = y - CARDINALS[d].dy;
              // Head must have at least one unoccupied cell immediately behind it to form an arrow
              if (
                prevX >= 0 && prevX < width &&
                prevY >= 0 && prevY < height &&
                !occupied[prevY][prevX]
              ) {
                if (isRayClear(x, y, d)) {
                  candidateHeads.push({ x, y, dir: d, prevX, prevY });
                }
              }
            }
          }
        }
      }

      if (candidateHeads.length === 0) break; // Grid has reached maximum density

      // Pick a random valid head candidate
      const pick = candidateHeads[Math.floor(Math.random() * candidateHeads.length)];
      const head = { x: pick.x, y: pick.y };
      const headDir = pick.dir;
      const prev = { x: pick.prevX, y: pick.prevY };

      // 2. Grow winding body backwards from prev node
      const pathReverse = [head, prev];
      let cur = prev;
      const tempOccupied = new Set([`${head.x},${head.y}`, `${prev.x},${prev.y}`]);

      // Dynamic length: 3 to 6 segments for rich, snake-like complexity
      const targetLen = 3 + Math.floor(Math.random() * 4);
      let curDir = OPPOSITE[headDir]; // Direction we moved into cur

      for (let step = 2; step < targetLen; step++) {
        const neighbors = [];
        for (const d of DIRS) {
          if (d === OPPOSITE[curDir]) continue; // Don't backtrack into previous node
          const nx = cur.x + CARDINALS[d].dx;
          const ny = cur.y + CARDINALS[d].dy;
          const key = `${nx},${ny}`;
          if (
            nx >= 0 && nx < width &&
            ny >= 0 && ny < height &&
            !occupied[ny][nx] &&
            !tempOccupied.has(key)
          ) {
            neighbors.push({ x: nx, y: ny, dir: d });
          }
        }

        if (neighbors.length === 0) break;

        // Choose next segment (mix of straight segments and turns)
        const next = neighbors[Math.floor(Math.random() * neighbors.length)];
        pathReverse.push({ x: next.x, y: next.y });
        tempOccupied.add(`${next.x},${next.y}`);
        cur = { x: next.x, y: next.y };
        curDir = next.dir;
      }

      // 3. Convert to forward path: [tail, ..., head]
      const forwardPath = pathReverse.reverse();

      if (forwardPath.length >= 2) {
        for (const pt of forwardPath) {
          occupied[pt.y][pt.x] = true;
        }

        const id = `arrow_${placed + 1}`;
        const color = NEON_PALETTE[placed % NEON_PALETTE.length];
        const arrow = grid.addArrow(id, forwardPath, color);
        // Sleek tail dot on ~65% of arrows
        arrow.isDot = Math.random() < 0.65;
        placed++;
      }
    }

    // Double check with solver
    const solveRes = PolylineArrowSolver.solve(grid);

    return {
      grid,
      solvable: solveRes.solvable,
      arrowCount: grid.getActiveCount(),
      attempts
    };
  }
}
