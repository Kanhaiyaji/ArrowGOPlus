import { PolylineArrowGenerator } from '../src/engine/snakeGenerator.js';
import { PolylineArrowSolver } from '../src/engine/snakeSolver.js';

console.log('Testing 108 level generation speed & solvability...');
const startTime = Date.now();

const categories = [
  { name: 'beginner', start: 1, end: 36, minW: 5, maxW: 7, minArrows: 3, maxArrows: 12 },
  { name: 'intermediate', start: 37, end: 72, minW: 7, maxW: 10, minArrows: 12, maxArrows: 24 },
  { name: 'trained', start: 73, end: 108, minW: 10, maxW: 12, minArrows: 24, maxArrows: 40 }
];

let totalGenerated = 0;
let totalSolvable = 0;

for (const cat of categories) {
  for (let lvl = cat.start; lvl <= cat.end; lvl++) {
    const progress = (lvl - cat.start) / (cat.end - cat.start);
    const w = Math.round(cat.minW + progress * (cat.maxW - cat.minW));
    const h = w;
    const target = Math.round(cat.minArrows + progress * (cat.maxArrows - cat.minArrows));
    const isCircular = lvl % 5 === 0;

    const res = PolylineArrowGenerator.generate(w, h, target, isCircular);
    const sol = PolylineArrowSolver.solve(res.grid);

    totalGenerated++;
    if (sol.solvable) totalSolvable++;
  }
}

console.log(`Generated ${totalGenerated} levels in ${Date.now() - startTime}ms.`);
console.log(`Solvability: ${totalSolvable}/${totalGenerated} (${(totalSolvable / totalGenerated * 100).toFixed(1)}%)`);
