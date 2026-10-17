/**
 * Arrow GO+ - Dedicated Vortex Circle Mode Engine
 * Concentric rings and radial sector arrow puzzle engine with 100% guaranteed solvability.
 */

export const VORTEX_PALETTE = [
  '#00F0FF', // Cyan
  '#FF0055', // Neon Pink
  '#00FF66', // Emerald Green
  '#FFE600', // Cyber Yellow
  '#B026FF', // Neon Purple
  '#FF7700', // Electric Orange
  '#00E5FF', // Blue Glow
  '#FFFFFF'  // White
];

export class VortexGrid {
  /**
   * @param {number} numRings - Number of concentric rings (e.g. 3 or 4)
   * @param {number} numSectors - Number of angular sectors (e.g. 12 or 16)
   */
  constructor(numRings = 3, numSectors = 12) {
    this.numRings = numRings;
    this.numSectors = numSectors;
    // matrix[ring][sector] = arrowId or null
    this.matrix = Array.from({ length: numRings }, () => Array(numSectors).fill(null));
    this.arrows = new Map();
  }

  getAngle(s) {
    return s * (2 * Math.PI / this.numSectors);
  }

  addArcArrow(id, ring, startSector, length, dir = 'CW', color = '#00F0FF', isDot = false) {
    const sectors = [];
    let cur = startSector;
    for (let i = 0; i < length; i++) {
      sectors.push(cur);
      cur = dir === 'CW' ? (cur + 1) % this.numSectors : (cur - 1 + this.numSectors) % this.numSectors;
    }
    const headSector = sectors[sectors.length - 1];

    const arrow = {
      id,
      type: 'arc',
      ring,
      startSector,
      headSector,
      length,
      sectors,
      dir,
      color,
      isDot,
      state: 'idle',
      isRemoved: false
    };

    this.arrows.set(id, arrow);
    for (const s of sectors) {
      this.matrix[ring][s] = id;
    }
    return arrow;
  }

  addRadialArrow(id, sector, startRing, length, color = '#FF0055', isDot = false) {
    const rings = [];
    for (let r = startRing; r < startRing + length; r++) {
      rings.push(r);
    }
    const headRing = rings[rings.length - 1];

    const arrow = {
      id,
      type: 'radial',
      sector,
      startRing,
      headRing,
      length,
      rings,
      dir: 'OUT',
      color,
      isDot,
      state: 'idle',
      isRemoved: false
    };

    this.arrows.set(id, arrow);
    for (const r of rings) {
      this.matrix[r][sector] = id;
    }
    return arrow;
  }

  removeArrow(id) {
    const a = this.arrows.get(id);
    if (!a || a.isRemoved) return false;

    if (a.type === 'arc') {
      for (const s of a.sectors) {
        if (this.matrix[a.ring][s] === id) this.matrix[a.ring][s] = null;
      }
    } else {
      for (const r of a.rings) {
        if (this.matrix[r][a.sector] === id) this.matrix[r][a.sector] = null;
      }
    }

    a.isRemoved = true;
    return true;
  }

  /**
   * Check if arrow has an unobstructed exit from the circular vortex
   */
  checkPathClear(arrow) {
    if (!arrow || arrow.isRemoved) return { clear: false, blockerId: null };

    // Radial arrow: checks if outer rings in the same sector are clear
    if (arrow.type === 'radial') {
      for (let r = arrow.headRing + 1; r < this.numRings; r++) {
        const occ = this.matrix[r][arrow.sector];
        if (occ !== null && occ !== arrow.id) {
          const blocker = this.arrows.get(occ);
          if (blocker && !blocker.isRemoved && blocker.state !== 'escaping') {
            return { clear: false, blockerId: occ };
          }
        }
      }
      return { clear: true, blockerId: null };
    }

    // Arc arrow: checks tangent vector path into outer space
    if (arrow.type === 'arc') {
      // 1. Check next immediate sector on the same ring
      const nextS = arrow.dir === 'CW'
        ? (arrow.headSector + 1) % this.numSectors
        : (arrow.headSector - 1 + this.numSectors) % this.numSectors;

      const occNext = this.matrix[arrow.ring][nextS];
      if (occNext !== null && occNext !== arrow.id) {
        const blocker = this.arrows.get(occNext);
        if (blocker && !blocker.isRemoved && blocker.state !== 'escaping') {
          return { clear: false, blockerId: occNext };
        }
      }

      // 2. Check tangent crossings through outer rings
      // Tangent ray equation from (R_cur * cos(t), R_cur * sin(t))
      const theta_head = this.getAngle(arrow.headSector);

      for (let r_out = arrow.ring + 1; r_out < this.numRings; r_out++) {
        // Radius ratio
        const R_cur = arrow.ring + 1;
        const R_out = r_out + 1;
        const deltaTheta = Math.acos(Math.min(1, R_cur / R_out));
        let theta_cross = arrow.dir === 'CW' ? theta_head + deltaTheta : theta_head - deltaTheta;
        theta_cross = (theta_cross % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
        const s_cross = Math.round((theta_cross / (2 * Math.PI)) * this.numSectors) % this.numSectors;

        const occCross = this.matrix[r_out][s_cross];
        if (occCross !== null && occCross !== arrow.id) {
          const blocker = this.arrows.get(occCross);
          if (blocker && !blocker.isRemoved && blocker.state !== 'escaping') {
            return { clear: false, blockerId: occCross };
          }
        }
      }

      return { clear: true, blockerId: null };
    }

    return { clear: false, blockerId: null };
  }

  getAvailableMoves() {
    const res = [];
    for (const a of this.arrows.values()) {
      if (!a.isRemoved && a.state !== 'escaping' && this.checkPathClear(a).clear) {
        res.push(a);
      }
    }
    return res;
  }

  getActiveCount() {
    let c = 0;
    for (const a of this.arrows.values()) {
      if (!a.isRemoved && a.state !== 'escaping') c++;
    }
    return c;
  }

  clone() {
    const copy = new VortexGrid(this.numRings, this.numSectors);
    for (const [id, a] of this.arrows) {
      if (a.isRemoved) continue;
      if (a.type === 'arc') {
        copy.addArcArrow(id, a.ring, a.startSector, a.length, a.dir, a.color, a.isDot);
      } else {
        copy.addRadialArrow(id, a.sector, a.startRing, a.length, a.color, a.isDot);
      }
    }
    return copy;
  }
}

export class VortexSolver {
  static solve(grid) {
    const sim = grid.clone();
    const moves = [];

    while (sim.getActiveCount() > 0) {
      const avail = sim.getAvailableMoves();
      if (avail.length === 0) {
        return { solvable: false, moves, remaining: sim.getActiveCount() };
      }

      // Pick move that frees the most
      let best = avail[0];
      let maxFreed = -1;

      for (const cand of avail) {
        const testSim = sim.clone();
        testSim.removeArrow(cand.id);
        const freed = testSim.getAvailableMoves().length;
        if (freed > maxFreed) {
          maxFreed = freed;
          best = cand;
        }
      }

      moves.push(best.id);
      sim.removeArrow(best.id);
    }

    return { solvable: true, moves, remaining: 0 };
  }

  static getHint(grid) {
    const avail = grid.getAvailableMoves();
    if (avail.length === 0) return null;
    return avail[0];
  }
}

export class VortexGenerator {
  /**
   * Procedural Reverse-Escape Generator for Vortex Circle Mode
   * 100% Guaranteed Solvable via Topological DAG Synthesis
   */
  static generate(numRings = 3, numSectors = 12, targetArrows = 8) {
    const grid = new VortexGrid(numRings, numSectors);
    let placed = 0;
    let attempts = 0;
    const maxAttempts = Math.max(500, targetArrows * 40);

    while (placed < targetArrows && attempts < maxAttempts) {
      attempts++;
      const color = VORTEX_PALETTE[placed % VORTEX_PALETTE.length];
      const tryRadial = Math.random() < 0.45;

      if (tryRadial) {
        const cand = [];
        for (let s = 0; s < numSectors; s++) {
          for (let startR = 0; startR < numRings; startR++) {
            const maxL = Math.min(2, numRings - startR);
            for (let len = 1; len <= maxL; len++) {
              let ok = true;
              for (let r = startR; r < startR + len; r++) {
                if (grid.matrix[r][s] !== null) { ok = false; break; }
              }
              if (ok) {
                // Must have clear outward exit
                let clear = true;
                for (let r = startR + len; r < numRings; r++) {
                  if (grid.matrix[r][s] !== null) { clear = false; break; }
                }
                if (clear) cand.push({ s, startR, len });
              }
            }
          }
        }

        if (cand.length > 0) {
          const pick = cand[Math.floor(Math.random() * cand.length)];
          const id = `vortex_${placed + 1}`;
          grid.addRadialArrow(id, pick.s, pick.startR, pick.len, color, Math.random() < 0.65);
          placed++;
          continue;
        }
      }

      // Try Arc Arrow
      const candArc = [];
      for (let r = 0; r < numRings; r++) {
        for (const dir of ['CW', 'CCW']) {
          for (let s = 0; s < numSectors; s++) {
            const maxLen = Math.min(4, Math.floor(numSectors / 2));
            for (let len = 2; len <= maxLen; len++) {
              let ok = true;
              let checkS = s;
              const sectors = [];
              for (let i = 0; i < len; i++) {
                if (grid.matrix[r][checkS] !== null) { ok = false; break; }
                sectors.push(checkS);
                checkS = dir === 'CW' ? (checkS + 1) % numSectors : (checkS - 1 + numSectors) % numSectors;
              }
              if (!ok) continue;

              const headS = sectors[sectors.length - 1];
              const nextS = dir === 'CW' ? (headS + 1) % numSectors : (headS - 1 + numSectors) % numSectors;
              if (grid.matrix[r][nextS] !== null) continue;

              // Check tangent crossings
              let tangentClear = true;
              const theta_head = grid.getAngle(headS);

              for (let r_out = r + 1; r_out < numRings; r_out++) {
                const R_cur = r + 1;
                const R_out = r_out + 1;
                const deltaTheta = Math.acos(Math.min(1, R_cur / R_out));
                let theta_cross = dir === 'CW' ? theta_head + deltaTheta : theta_head - deltaTheta;
                theta_cross = (theta_cross % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
                const s_cross = Math.round((theta_cross / (2 * Math.PI)) * numSectors) % numSectors;
                if (grid.matrix[r_out][s_cross] !== null) {
                  tangentClear = false;
                  break;
                }
              }

              if (tangentClear) candArc.push({ r, s, len, dir });
            }
          }
        }
      }

      if (candArc.length > 0) {
        const pick = candArc[Math.floor(Math.random() * candArc.length)];
        const id = `vortex_${placed + 1}`;
        grid.addArcArrow(id, pick.r, pick.s, pick.len, pick.dir, color, Math.random() < 0.65);
        placed++;
      }
    }

    const solveRes = VortexSolver.solve(grid);
    return {
      grid,
      solvable: solveRes.solvable,
      arrowCount: grid.getActiveCount(),
      attempts
    };
  }
}
