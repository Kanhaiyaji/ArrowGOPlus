/**
 * Arrow GO+ - Handcrafted Campaign Levels
 * Contains 25+ rich silhouette and geometric levels with escalating difficulty.
 */

import { ArrowGrid } from '../engine/grid.js';
import { ArrowGenerator } from '../engine/generator.js';

export const LEVEL_DEFINITIONS = [
  // --- ACT 1: TUTORIAL & BASICS ---
  {
    id: 1,
    name: "First Steps",
    category: "Tutorial",
    width: 3,
    height: 3,
    fixedArrows: [
      { x: 1, y: 0, dir: 'UP' },
      { x: 0, y: 1, dir: 'LEFT' },
      { x: 2, y: 1, dir: 'RIGHT' },
      { x: 1, y: 2, dir: 'DOWN' },
      { x: 1, y: 1, dir: 'UP' } // Center arrow exits once top arrow is cleared!
    ]
  },
  {
    id: 2,
    name: "Two-Step Cascade",
    category: "Tutorial",
    width: 3,
    height: 3,
    fixedArrows: [
      { x: 0, y: 0, dir: 'LEFT' },
      { x: 1, y: 0, dir: 'LEFT' },
      { x: 2, y: 0, dir: 'LEFT' },
      { x: 0, y: 1, dir: 'UP' },
      { x: 1, y: 1, dir: 'UP' },
      { x: 2, y: 1, dir: 'RIGHT' },
      { x: 0, y: 2, dir: 'DOWN' },
      { x: 1, y: 2, dir: 'DOWN' }
    ]
  },
  {
    id: 3,
    name: "Corner Pocket",
    category: "Tutorial",
    width: 4,
    height: 4,
    pattern: [
      "####",
      "####",
      "####",
      "####"
    ]
  },
  {
    id: 4,
    name: "The Crosshair",
    category: "Geometry",
    width: 5,
    height: 5,
    pattern: [
      "  #  ",
      "  #  ",
      "#####",
      "  #  ",
      "  #  "
    ]
  },
  {
    id: 5,
    name: "The Diamond",
    category: "Geometry",
    width: 5,
    height: 5,
    pattern: [
      "  #  ",
      " ### ",
      "#####",
      " ### ",
      "  #  "
    ]
  },
  {
    id: 6,
    name: "Hollow Donut",
    category: "Geometry",
    width: 6,
    height: 6,
    pattern: [
      " #### ",
      "######",
      "##  ##",
      "##  ##",
      "######",
      " #### "
    ]
  },
  // --- ACT 2: SILHOUETTES & SHAPES ---
  {
    id: 7,
    name: "Heart of Arrows",
    category: "Silhouettes",
    width: 7,
    height: 6,
    pattern: [
      " # # ",
      "#####",
      "#####",
      " ### ",
      "  #  "
    ]
  },
  {
    id: 8,
    name: "Five-Point Star",
    category: "Silhouettes",
    width: 7,
    height: 7,
    pattern: [
      "   #   ",
      "  ###  ",
      "#######",
      " ##### ",
      "  # #  ",
      " #   # "
    ]
  },
  {
    id: 9,
    name: "The Coffee Mug",
    category: "Silhouettes",
    width: 7,
    height: 6,
    pattern: [
      " ####  ",
      " #### #",
      " #### #",
      " ##### ",
      " ####  ",
      "###### "
    ]
  },
  {
    id: 10,
    name: "The Royal Crown",
    category: "Silhouettes",
    width: 7,
    height: 5,
    pattern: [
      "#  #  #",
      "## # ##",
      "#######",
      "#######",
      "#######"
    ]
  },
  {
    id: 11,
    name: "Knight's Sword",
    category: "Silhouettes",
    width: 7,
    height: 8,
    pattern: [
      "   #   ",
      "   #   ",
      "   #   ",
      "   #   ",
      " ##### ",
      "   #   ",
      "   #   ",
      "  ###  "
    ]
  },
  {
    id: 12,
    name: "The Space Rocket",
    category: "Silhouettes",
    width: 7,
    height: 9,
    pattern: [
      "   #   ",
      "  ###  ",
      "  ###  ",
      "  ###  ",
      " ##### ",
      "#######",
      " # # # ",
      " #   # ",
      "#     #"
    ]
  },
  {
    id: 13,
    name: "Retro Invader",
    category: "Silhouettes",
    width: 8,
    height: 7,
    pattern: [
      "  #  #  ",
      "   ##   ",
      " ###### ",
      "## ## ##",
      "########",
      "# #  # #",
      " #    # "
    ]
  },
  {
    id: 14,
    name: "The Golden Key",
    category: "Silhouettes",
    width: 8,
    height: 6,
    pattern: [
      "  ###   ",
      " #   #  ",
      " #######",
      " # # # #",
      "  ###   "
    ]
  },
  {
    id: 15,
    name: "Rubber Ducky",
    category: "Silhouettes",
    width: 8,
    height: 7,
    pattern: [
      "  ###   ",
      " ## # # ",
      "  ####  ",
      " ###### ",
      "########",
      " ###### ",
      "  ####  "
    ]
  },
  // --- ACT 3: ADVANCED LABYRINTHS & PATTERNS ---
  {
    id: 16,
    name: "The Butterfly",
    category: "Complex",
    width: 9,
    height: 7,
    pattern: [
      "##  #  ##",
      "### # ###",
      "#### ####",
      " ####### ",
      "#### ####",
      "###   ###",
      "##     ##"
    ]
  },
  {
    id: 17,
    name: "The Champion Trophy",
    category: "Complex",
    width: 9,
    height: 8,
    pattern: [
      " ####### ",
      "#########",
      "### # ###",
      " ####### ",
      "  #####  ",
      "   ###   ",
      "   ###   ",
      " ####### "
    ]
  },
  {
    id: 18,
    name: "The Hourglass",
    category: "Complex",
    width: 9,
    height: 9,
    pattern: [
      "#########",
      " ####### ",
      "  #####  ",
      "   ###   ",
      "    #    ",
      "   ###   ",
      "  #####  ",
      " ####### ",
      "#########"
    ]
  },
  {
    id: 19,
    name: "Spiral Vortex",
    category: "Complex",
    width: 9,
    height: 9,
    pattern: [
      "#########",
      "#       #",
      "# ##### #",
      "# #   # #",
      "# # # # #",
      "# #   # #",
      "# ##### #",
      "#       #",
      "#########"
    ]
  },
  {
    id: 20,
    name: "The Castle Keep",
    category: "Complex",
    width: 10,
    height: 8,
    pattern: [
      "# # # # # ",
      "######### ",
      "######### ",
      "###   ### ",
      "###   ### ",
      "###   ### ",
      "######### ",
      "######### "
    ]
  },
  {
    id: 21,
    name: "Sunburst",
    category: "Master",
    width: 11,
    height: 11,
    pattern: [
      "    # #    ",
      "  # ### #  ",
      " #  ###  # ",
      "  #######  ",
      "###########",
      " ######### ",
      "###########",
      "  #######  ",
      " #  ###  # ",
      "  # ### #  ",
      "    # #    "
    ]
  },
  {
    id: 22,
    name: "Pinwheel Matrix",
    category: "Master",
    width: 11,
    height: 11,
    pattern: [
      "##### #####",
      "#   # #   #",
      "# # # # # #",
      "# #   # # #",
      "# ##### # #",
      "           ",
      "# # ##### #",
      "# # #   # #",
      "# # # # # #",
      "#   # #   #",
      "##### #####"
    ]
  },
  {
    id: 23,
    name: "The Millennium Falcon",
    category: "Master",
    width: 12,
    height: 10,
    pattern: [
      "    ####    ",
      "  ########  ",
      " ########## ",
      "############",
      "############",
      "############",
      " ########## ",
      "  ###  ###  ",
      "  ##    ##  ",
      "  #      #  "
    ]
  },
  {
    id: 24,
    name: "The Grand Maze",
    category: "Master",
    width: 12,
    height: 12,
    pattern: [
      "############",
      "#   #      #",
      "# # # #### #",
      "# # #    # #",
      "# # #### # #",
      "# #      # #",
      "# ###### # #",
      "#      # # #",
      "#### # # # #",
      "#    # # # #",
      "# #### # # #",
      "############"
    ]
  },
  {
    id: 25,
    name: "The Infinity Loop",
    category: "Master",
    width: 13,
    height: 9,
    pattern: [
      "  ###   ###  ",
      " ##### ##### ",
      "### ### ### ###",
      "##   #   #   ##",
      "### ### ### ###",
      " ##### ##### ",
      "  ###   ###  "
    ]
  }
];

/**
 * Loads and builds the ArrowGrid for a given level ID
 */
export function buildLevel(levelId) {
  const def = LEVEL_DEFINITIONS.find(l => l.id === levelId) || LEVEL_DEFINITIONS[0];

  // If level has fixed handcrafted arrows
  if (def.fixedArrows) {
    const grid = new ArrowGrid(def.width, def.height);
    for (const a of def.fixedArrows) {
      grid.addArrow(a.x, a.y, a.dir);
    }
    grid.totalInitialArrows = grid.arrows.size;
    return {
      grid,
      definition: def,
      stats: { totalArrows: grid.arrows.size, solvable: true }
    };
  }

  // Parse pattern
  if (def.pattern) {
    const parsed = ArrowGenerator.parseAsciiPattern(def.pattern);
    const result = ArrowGenerator.generateFromSilhouette(parsed.width, parsed.height, parsed.coords);
    return {
      grid: result.grid,
      definition: def,
      stats: result.stats
    };
  }

  // Default fallback
  const fallback = ArrowGenerator.generateRandomLevel('medium');
  return {
    grid: fallback.grid,
    definition: def,
    stats: fallback.stats
  };
}
