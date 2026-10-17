/**
 * Arrow GO+ - Solver for Winding Arrow Mazes
 */

export class PolylineArrowSolver {
  static solve(grid) {
    const sim = grid.clone();
    const moves = [];

    while (sim.getActiveCount() > 0) {
      const available = sim.getAvailableMoves();

      if (available.length === 0) {
        return {
          solvable: false,
          moves,
          remainingCount: sim.getActiveCount(),
          deadlocked: sim.getAllActiveArrows()
        };
      }

      // Pick the move that unlocks the most future arrows
      let bestMove = available[0];
      let maxFreed = -1;

      for (const candidate of available) {
        const testSim = sim.clone();
        testSim.removeArrow(candidate.id);
        const freed = testSim.getAvailableMoves().length;
        if (freed > maxFreed) {
          maxFreed = freed;
          bestMove = candidate;
        }
      }

      moves.push(bestMove.id);
      sim.removeArrow(bestMove.id);
    }

    return {
      solvable: true,
      moves,
      remainingCount: 0,
      deadlocked: []
    };
  }

  static getHint(grid) {
    const available = grid.getAvailableMoves();
    if (available.length === 0) return null;

    let bestMove = available[0];
    let maxFreed = -1;

    for (const candidate of available) {
      const testSim = grid.clone();
      testSim.removeArrow(candidate.id);
      const freed = testSim.getAvailableMoves().length;
      if (freed > maxFreed) {
        maxFreed = freed;
        bestMove = candidate;
      }
    }

    return bestMove;
  }
}
