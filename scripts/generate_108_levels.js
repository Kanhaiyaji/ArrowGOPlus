import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PolylineArrowGenerator } from '../src/engine/snakeGenerator.js';
import { PolylineArrowSolver } from '../src/engine/snakeSolver.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LEVEL_NAMES = [
  // Beginner (1 - 36)
  "First Flight", "Gentle Curve", "Twin Paths", "Triple Strike", "Neon Square", "Orbit Intro",
  "Corner Pocket", "Direct Route", "Light Ray", "Angle Shift", "Double Bend", "Radar Echo",
  "Winding Lane", "Grid Shift", "Clear Horizon", "Springboard", "Echo Turn", "Vortex Bloom",
  "Pivot Point", "Prism Path", "Cyber Flow", "Vector Loop", "Pulse Trail", "Circular Dawn",
  "Skyward", "Signal Jump", "Neon Knot", "Divergence", "Laser Track", "Solar Ring",
  "Radiant Ray", "Zigzag Zone", "Outer Bound", "Split Way", "Glide Step", "Novice Summit",

  // Intermediate (37 - 72)
  "Convergence", "Interlock", "Matrix Maze", "Dual Labyrinth", "Quantum Leap", "Orbital Ring",
  "Crossfire", "Tangled Wires", "Neon Nexus", "Spiral Shift", "Warp Track", "Vortex Core",
  "Overdrive", "Gridlock Shift", "Laser Mesh", "Pulse Reactor", "Cyber Spire", "Cosmic Horizon",
  "Echo Chamber", "Flux Gate", "Chroma Loop", "Apex Angle", "Shifting Sands", "Stellar Wheel",
  "Deep Network", "Circuit Core", "Magnetic Pull", "Hyperlink", "Fusion Grid", "Eclipse Portal",
  "Data Ribbon", "Photon Net", "Neon Web", "Tangent Trace", "Prism Maze", "Intermediate Peak",

  // Trained (73 - 108)
  "Master Mind", "Topological Grid", "Infinite Knot", "Neural Lattice", "Grand Labyrinth", "Singularity Ring",
  "Hypercube", "Quantum Entanglement", "Vortex Titan", "Chrono Twist", "Omega Shift", "Void Spire",
  "Eclipse Engine", "Cosmic Spiral", "Cyber Citadel", "Absolute Zero", "Dark Matter", "Supernova Ring",
  "Event Horizon", "Chaos Theory", "Titanium Weave", "Neural Overload", "Continuum", "Paradox Vortex",
  "Astral Gateway", "Nexus Prime", "Infinity Bridge", "Tachyon Ray", "Cyber Sovereign", "Celestial Sphere",
  "Astral Spire", "Dimensional Rift", "Zenith Vault", "Apex Titan", "Omega Labyrinth", "Grandmaster Nirvana"
];

function checkZeroOverlap(arrows) {
  const occ = new Map();
  for (const arrow of arrows) {
    for (const pt of arrow.points) {
      const key = `${pt.x},${pt.y}`;
      if (occ.has(key) && occ.get(key) !== arrow.id) {
        return false;
      }
      occ.set(key, arrow.id);
    }
  }
  return true;
}

console.log('Generating 108 verified levels across Beginner, Intermediate, and Trained...');

const levels = [];

for (let id = 1; id <= 108; id++) {
  let category, difficulty, minW, maxW, minArrows, maxArrows, catStart, catEnd;

  if (id <= 36) {
    category = 'Beginner';
    catStart = 1;
    catEnd = 36;
    minW = 5;
    maxW = 7;
    minArrows = 3;
    maxArrows = 12;
    difficulty = id <= 12 ? 'NOVICE' : (id <= 24 ? 'ROOKIE' : 'APPRENTICE');
  } else if (id <= 72) {
    category = 'Intermediate';
    catStart = 37;
    catEnd = 72;
    minW = 7;
    maxW = 10;
    minArrows = 12;
    maxArrows = 24;
    difficulty = id <= 48 ? 'ADEPT' : (id <= 60 ? 'INTERMEDIATE' : 'SKILLED');
  } else {
    category = 'Trained';
    catStart = 73;
    catEnd = 108;
    minW = 10;
    maxW = 12;
    minArrows = 24;
    maxArrows = 42;
    difficulty = id <= 84 ? 'EXPERT' : (id <= 96 ? 'MASTER' : 'GRANDMASTER');
  }

  const progress = (id - catStart) / (catEnd - catStart);
  let w = Math.round(minW + progress * (maxW - minW));
  const isCircular = id % 6 === 0;
  if (isCircular && w < 12 && id > 72) w = 12;
  const h = w;

  let targetArrows = Math.round(minArrows + progress * (maxArrows - minArrows));
  if (isCircular) {
    targetArrows = Math.max(minArrows, Math.round(targetArrows * 0.65));
  }

  let success = false;
  let attempts = 0;

  while (!success && attempts < 100) {
    attempts++;
    const res = PolylineArrowGenerator.generate(w, h, targetArrows, isCircular);
    const sol = PolylineArrowSolver.solve(res.grid);

    if (sol.solvable && res.grid.getActiveCount() >= Math.max(2, Math.floor(targetArrows * 0.65))) {
      const arrowDefs = [];
      for (const arrow of res.grid.arrows.values()) {
        arrowDefs.push({
          id: arrow.id,
          points: arrow.points.map(p => ({ x: p.x, y: p.y })),
          color: arrow.color,
          isDot: !!arrow.isDot
        });
      }

      if (checkZeroOverlap(arrowDefs)) {
        levels.push({
          id,
          name: LEVEL_NAMES[id - 1] || `Level ${id}`,
          category,
          difficulty,
          width: w,
          height: h,
          isCircular,
          arrows: arrowDefs
        });
        success = true;
      }
    }
  }

  if (!success) {
    console.error(`Failed to generate verified level ${id} after 50 attempts!`);
    process.exit(1);
  }
}

console.log(`Successfully generated and verified all ${levels.length} levels!`);

const fileContent = `/**
 * Arrow GO+ - 108 Verified Levels Across 3 Categories
 * Categories: Beginner (1-36), Intermediate (37-72), Trained (73-108)
 * Strictly 0-overlapping nodes, 100% DAG acyclic solvability.
 */

import { PolylineArrowGrid } from '../engine/snakeGrid.js';

export const LEVEL_CATEGORIES = [
  { id: 'beginner', name: 'Beginner', badge: '🔰 Beginner', range: [1, 36], description: 'Introductory winding paths & single bends' },
  { id: 'intermediate', name: 'Intermediate', badge: '⚡ Intermediate', range: [37, 72], description: 'Complex interlocking chains & multi-segment turns' },
  { id: 'trained', name: 'Trained', badge: '👑 Trained', range: [73, 108], description: 'High-density topological labyrinths & master webs' }
];

export const NEON_LEVELS = ${JSON.stringify(levels, null, 2)};

export function buildNeonLevel(levelId) {
  const def = NEON_LEVELS.find(l => l.id === levelId) || NEON_LEVELS[0];
  const grid = new PolylineArrowGrid(def.width, def.height);
  if (def.isCircular) grid.isCircular = true;

  for (const a of def.arrows) {
    const arrow = grid.addArrow(a.id, a.points, a.color);
    if (a.isDot) arrow.isDot = true;
  }

  return { grid, definition: def };
}
`;

const outputPath = path.resolve(__dirname, '../src/data/neonLevels.js');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Written 108 levels to ${outputPath} (${(fileContent.length / 1024).toFixed(1)} KB)`);
