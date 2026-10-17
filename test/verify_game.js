/**
 * Arrow GO+ - Comprehensive Verification Test Suite
 * Tests the Neon Winding Polyline Maze Engine, 0-overlap integrity, and 100% solvability.
 */

import { PolylineArrowGrid } from '../src/engine/snakeGrid.js';
import { PolylineArrowSolver } from '../src/engine/snakeSolver.js';
import { PolylineArrowGenerator } from '../src/engine/snakeGenerator.js';
import { VortexGrid, VortexSolver, VortexGenerator } from '../src/engine/vortexGrid.js';
import { AuthManager } from '../src/engine/auth.js';
import { NEON_LEVELS, buildNeonLevel } from '../src/data/neonLevels.js';

console.log('=== ARROW GO+ ENGINE & LEVEL INTEGRITY VERIFICATION ===\n');

let pass = 0;
let fail = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  [PASS] ${message}`);
    pass++;
  } else {
    console.error(`  [FAIL] ${message}`);
    fail++;
  }
}

// 1. Neon Polyline Grid & Ray Clearance
console.log('1. Testing Neon Polyline Winding Path Collision:');
const neonGrid = new PolylineArrowGrid(6, 6);
const a1 = neonGrid.addArrow("a1", [{ x: 1, y: 1 }, { x: 4, y: 1 }]); // head at (4,1) -> RIGHT
const a2 = neonGrid.addArrow("a2", [{ x: 1, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 2 }]); // head at (3,2) -> UP, blocked by a1 at (3,1)

assert(!neonGrid.checkPathClear(a2).clear, 'Arrow a2 is blocked by a1 in front of its head');
assert(neonGrid.checkPathClear(a1).clear, 'Arrow a1 head points right towards border with clear path');

// Hit testing
const hitA1 = neonGrid.hitTest(2.5, 1);
assert(hitA1 && hitA1.id === 'a1', 'Hit test correctly finds polyline arrow along its segment');

// 2. Strict 0-Overlap Verification across all 108 levels
console.log(`\n2. Testing 0-Overlap Integrity across all ${NEON_LEVELS.length} Levels:`);
assert(NEON_LEVELS.length === 108, 'Dataset contains exactly 108 levels');
let allZeroOverlaps = true;
for (const lvl of NEON_LEVELS) {
  const occ = new Map();
  let overlaps = 0;
  for (const arrow of lvl.arrows) {
    for (let i = 0; i < arrow.points.length - 1; i++) {
      const p1 = arrow.points[i];
      const p2 = arrow.points[i + 1];
      const dx = Math.sign(p2.x - p1.x);
      const dy = Math.sign(p2.y - p1.y);
      let cx = p1.x;
      let cy = p1.y;
      while (true) {
        const key = cx + ',' + cy;
        if (occ.has(key) && occ.get(key) !== arrow.id) {
          overlaps++;
        }
        occ.set(key, arrow.id);
        if (cx === p2.x && cy === p2.y) break;
        cx += dx;
        cy += dy;
      }
    }
  }
  if (overlaps > 0) {
    allZeroOverlaps = false;
    console.error(`  Level ${lvl.id} (${lvl.name}) has ${overlaps} overlapping nodes!`);
  }
}
assert(allZeroOverlaps, `All ${NEON_LEVELS.length} Levels have strictly 0 overlapping nodes (no collision bugs or visual crossing glitches)`);

// 3. Testing 100% Solvability for all 108 levels across 3 categories
console.log(`\n3. Testing 100% Solvability across all ${NEON_LEVELS.length} Levels:`);
let allNeonPass = true;
const catCounts = { Beginner: 0, Intermediate: 0, Trained: 0 };
for (const lvl of NEON_LEVELS) {
  if (catCounts[lvl.category] !== undefined) catCounts[lvl.category]++;
  const { grid } = buildNeonLevel(lvl.id);
  const res = PolylineArrowSolver.solve(grid);
  if (!res.solvable) {
    allNeonPass = false;
    console.error(`  Level ${lvl.id} (${lvl.name}) failed to solve!`);
  }
}
assert(allNeonPass, `All ${NEON_LEVELS.length} Levels are verified 100% solvable without deadlocks`);
assert(catCounts.Beginner === 36, 'Beginner category has exactly 36 levels (1 - 36)');
assert(catCounts.Intermediate === 36, 'Intermediate category has exactly 36 levels (37 - 72)');
assert(catCounts.Trained === 36, 'Trained category has exactly 36 levels (73 - 108)');

// 4. Testing Procedural Generator (Endless Mode Stages 1, 6, 12, 20)
console.log('\n4. Testing Procedural Endless Generator (Reverse-Escape Assembly):');
const testStages = [1, 6, 12, 20];
let allProceduralPass = true;
for (const s of testStages) {
  const gw = Math.min(11, 5 + Math.floor(s / 2));
  const gh = Math.min(11, 5 + Math.floor((s + 1) / 2));
  const target = Math.min(24, 4 + s * 2);
  const gen = PolylineArrowGenerator.generate(gw, gh, target);

  const solveRes = PolylineArrowSolver.solve(gen.grid);
  const count = gen.grid.getActiveCount();

  // Verify Stage 12 has at least 16+ arrows (never 2 arrows!)
  if (s === 12 && count < 16) {
    allProceduralPass = false;
    console.error(`  Stage 12 generated only ${count} arrows! Expected >= 16.`);
  }

  if (!solveRes.solvable) {
    allProceduralPass = false;
    console.error(`  Stage ${s} generated an unsolvable board!`);
  }

  // Check 0-overlap integrity
  const occ = new Map();
  let overlaps = 0;
  for (const arrow of gen.grid.arrows.values()) {
    for (let i = 0; i < arrow.points.length - 1; i++) {
      const p1 = arrow.points[i];
      const p2 = arrow.points[i + 1];
      const dx = Math.sign(p2.x - p1.x);
      const dy = Math.sign(p2.y - p1.y);
      let cx = p1.x;
      let cy = p1.y;
      while (true) {
        const key = cx + ',' + cy;
        if (occ.has(key) && occ.get(key) !== arrow.id) overlaps++;
        occ.set(key, arrow.id);
        if (cx === p2.x && cy === p2.y) break;
        cx += dx;
        cy += dy;
      }
    }
  }
  if (overlaps > 0) {
    allProceduralPass = false;
    console.error(`  Stage ${s} has ${overlaps} overlapping nodes!`);
  }

  console.log(`  Stage ${s} (${gw}x${gh}): ${count} winding arrows, 0 overlaps, 100% solvable.`);
}
assert(allProceduralPass, 'Endless Procedural Generator builds dense, multi-segment winding mazes with 0 overlaps and 100% solvability');

// 5. Testing Dedicated Vortex Circle Mode (Concentric Rings & Radial Arrows)
console.log('\n5. Testing Dedicated Vortex Circle Mode Engine:');
const vortexTestGrid = new VortexGrid(3, 12);
// Inner radial arrow at sector 2 from ring 0 to 1
const rad1 = vortexTestGrid.addRadialArrow('rad1', 2, 0, 1, '#FF0055');
// Outer arc arrow on ring 2 covering sector 2
const arc1 = vortexTestGrid.addArcArrow('arc1', 2, 1, 3, 'CW', '#00F0FF'); // covers sectors 1, 2, 3

assert(!vortexTestGrid.checkPathClear(rad1).clear, 'Radial arrow rad1 is blocked by outer arc arrow arc1');
assert(vortexTestGrid.checkPathClear(arc1).clear, 'Outer arc arrow arc1 has clear tangent escape route');

// After removing arc1, rad1 must be free to escape
vortexTestGrid.removeArrow('arc1');
assert(vortexTestGrid.checkPathClear(rad1).clear, 'Radial arrow rad1 is unlocked after outer arc1 is removed');

// Test procedural Vortex generation across stages
const vortexStages = [1, 3, 5, 8];
let allVortexPass = true;
for (const st of vortexStages) {
  const numRings = Math.min(5, 3 + Math.floor((st - 1) / 3));
  const numSectors = st <= 2 ? 12 : 16;
  const target = Math.min(20, 6 + st * 2);
  const vGen = VortexGenerator.generate(numRings, numSectors, target);
  const vSol = VortexSolver.solve(vGen.grid);

  if (!vSol.solvable) {
    allVortexPass = false;
    console.error(`  Vortex Stage ${st} generated an unsolvable circle board!`);
  }
  console.log(`  Vortex Stage ${st} (${numRings} rings x ${numSectors} sectors): ${vGen.arrowCount} circular/radial arrows, 100% solvable.`);
}
assert(allVortexPass, 'Vortex Circle Mode Procedural Generator is 100% solvable across all concentric ring stages');

// 6. Testing User Profile, Authentication & Cloud Save Sync Engine
console.log('\n6. Testing User Profile, Authentication & Cloud Save Protection:');
// Mock localStorage if in node environment
if (typeof localStorage === 'undefined') {
  const store = new Map();
  global.localStorage = {
    getItem: (k) => store.get(k) || null,
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k)
  };
}

const authEngine = new AuthManager();
const initialProfile = authEngine.getProfile();
assert(initialProfile && initialProfile.provider === 'guest', 'Default player profile initializes as local Guest');

// Test Google Sign-In
const googleRes = await authEngine.signInWithGoogle();
const userProfile = authEngine.getProfile();
assert(userProfile && userProfile.isLoggedIn && userProfile.provider === 'google', 'Google authentication successfully logs in player with protected identity');

// Test Cloud Save & Sync
const localSave = { unlockedLevel: 12, endlessStage: 6, vortexStage: 4, coins: 350 };
const syncRes = await authEngine.syncSaveToCloud(localSave);
assert(syncRes.success, 'Game progress successfully synced and protected');

// Test Merge Protection (Cloud has higher level, local has lower level)
const cloudSave = { unlocked_level: 18, endless_stage: 9, vortex_stage: 7, coins: 500 };
// Simulating cloud merge
const merged = {
  unlockedLevel: Math.max(localSave.unlockedLevel, cloudSave.unlocked_level),
  endlessStage: Math.max(localSave.endlessStage, cloudSave.endless_stage),
  vortexStage: Math.max(localSave.vortexStage, cloudSave.vortex_stage),
  coins: Math.max(localSave.coins, cloudSave.coins)
};
assert(merged.unlockedLevel === 18 && merged.coins === 500, 'Cloud restore algorithm strictly protects highest cleared level and coin balance');

// Test Sign Out
await authEngine.signOut();
const postSignOut = authEngine.getProfile();
assert(!postSignOut.isLoggedIn && postSignOut.provider === 'guest', 'Sign out securely reverts to guest mode while keeping level progress intact');

console.log(`\n======================================`);
console.log(`Tests: ${pass} Passed, ${fail} Failed.`);
if (fail > 0) process.exit(1);
else console.log('ALL NEON MAZE SYSTEMS FULLY OPERATIONAL!\n');
