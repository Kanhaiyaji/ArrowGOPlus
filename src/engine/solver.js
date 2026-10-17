/**
 * Arrow GO+ - Solver & Dependency Graph Analyzer
 * Analyzes board solvability, computes hints, detects deadlock cycles, and verifies levels.
 *
 * Mathematical Principle:
 * Arrow evacuation possesses the Monotonic Unblocking Property:
 * Removing an arrow can only reduce obstacles on the board, never add them.
 * Thus, any board that is solvable can be solved by iteratively picking any
 * unobstructed arrow until the board is empty.
 * If at any point no arrows are unobstructed and the board is non-empty,
 * the remaining arrows form a Directed Cycle / Deadlock.
 */

export class ArrowSolver {
  /**
   * Attempt to solve the puzzle from the current state
   * @param {ArrowGrid} grid 
   * @returns {{ solvable: boolean, moves: Array<{id: string, x: number, y: number, dir: string}>, remainingCount: number, deadlockedArrows: Array<Object> }}
   */
  static solve(grid) {
    const simGrid = grid.clone();
    const solutionMoves = [];

    while (simGrid.getActiveCount() > 0) {
      const available = simGrid.getAvailableMoves();

      if (available.length === 0) {
        // Deadlock reached! Cannot solve.
        return {
          solvable: false,
          moves: solutionMoves,
          remainingCount: simGrid.getActiveCount(),
          deadlockedArrows: simGrid.getAllActiveArrows()
        };
      }

      // Pick move that frees up the most other arrows (smart heuristic)
      let bestMove = available[0];
      let maxUnblocked = -1;

      for (const candidate of available) {
        // Test removing candidate in temporary sub-simulation
        const testGrid = simGrid.clone();
        testGrid.removeArrow(candidate.id);
        const newlyAvailable = testGrid.getAvailableMoves().length;

        if (newlyAvailable > maxUnblocked) {
          maxUnblocked = newlyAvailable;
          bestMove = candidate;
        }
      }

      solutionMoves.push({
        id: bestMove.id,
        x: bestMove.x,
        y: bestMove.y,
        dir: bestMove.dir
      });

      simGrid.removeArrow(bestMove.id);
    }

    return {
      solvable: true,
      moves: solutionMoves,
      remainingCount: 0,
      deadlockedArrows: []
    };
  }

  /**
   * Determine the single best hint move for the player
   * Prioritizes moves that unlock cascade reactions.
   * @param {ArrowGrid} grid 
   * @returns {Object|null} The recommended arrow to tap, or null if deadlocked.
   */
  static getHint(grid) {
    const available = grid.getAvailableMoves();
    if (available.length === 0) return null;

    let bestArrow = available[0];
    let maxFollowups = -1;

    for (const arrow of available) {
      const sim = grid.clone();
      sim.removeArrow(arrow.id);
      const followups = sim.getAvailableMoves().length;

      if (followups > maxFollowups) {
        maxFollowups = followups;
        bestArrow = arrow;
      }
    }

    return bestArrow;
  }

  /**
   * Construct the Directed Dependency Graph (A -> B means A is blocked by B, so B must exit before A)
   * @param {ArrowGrid} grid 
   * @returns {{ nodes: Array, edges: Array<{from: string, to: string}> }}
   */
  static getDependencyGraph(grid) {
    const arrows = grid.getAllActiveArrows();
    const edges = [];

    for (const arrow of arrows) {
      const check = grid.checkPathClear(arrow);
      if (!check.clear && check.blocker) {
        // arrow is blocked by check.blocker, so arrow depends on check.blocker
        edges.push({
          from: arrow.id,
          to: check.blocker.id,
          fromPos: { x: arrow.x, y: arrow.y },
          toPos: { x: check.blocker.x, y: check.blocker.y }
        });
      }
    }

    return {
      nodes: arrows,
      edges
    };
  }

  /**
   * Check if a specific arrow can currently move
   */
  static isMoveValid(grid, arrow) {
    return grid.checkPathClear(arrow).clear;
  }
}
