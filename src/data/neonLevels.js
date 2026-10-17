/**
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

export const NEON_LEVELS = [
  {
    "id": 1,
    "name": "First Flight",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      }
    ]
  },
  {
    "id": 2,
    "name": "Gentle Curve",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      }
    ]
  },
  {
    "id": 3,
    "name": "Twin Paths",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 4,
    "name": "Triple Strike",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      }
    ]
  },
  {
    "id": 5,
    "name": "Neon Square",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 6,
    "name": "Orbit Intro",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      }
    ]
  },
  {
    "id": 7,
    "name": "Corner Pocket",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": false
      }
    ]
  },
  {
    "id": 8,
    "name": "Direct Route",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 9,
    "name": "Light Ray",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 5,
    "height": 5,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 10,
    "name": "Angle Shift",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 11,
    "name": "Double Bend",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 12,
    "name": "Radar Echo",
    "category": "Beginner",
    "difficulty": "NOVICE",
    "width": 6,
    "height": 6,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 13,
    "name": "Winding Lane",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 14,
    "name": "Grid Shift",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 15,
    "name": "Clear Horizon",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      }
    ]
  },
  {
    "id": 16,
    "name": "Springboard",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 17,
    "name": "Echo Turn",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 18,
    "name": "Vortex Bloom",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": false
      }
    ]
  },
  {
    "id": 19,
    "name": "Pivot Point",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 20,
    "name": "Prism Path",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 21,
    "name": "Cyber Flow",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 22,
    "name": "Vector Loop",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 23,
    "name": "Pulse Trail",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 24,
    "name": "Circular Dawn",
    "category": "Beginner",
    "difficulty": "ROOKIE",
    "width": 6,
    "height": 6,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 25,
    "name": "Skyward",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 26,
    "name": "Signal Jump",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 27,
    "name": "Neon Knot",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 6,
    "height": 6,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 28,
    "name": "Divergence",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      }
    ]
  },
  {
    "id": 29,
    "name": "Laser Track",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      }
    ]
  },
  {
    "id": 30,
    "name": "Solar Ring",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 31,
    "name": "Radiant Ray",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 32,
    "name": "Zigzag Zone",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      }
    ]
  },
  {
    "id": 33,
    "name": "Outer Bound",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      }
    ]
  },
  {
    "id": 34,
    "name": "Split Way",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      }
    ]
  },
  {
    "id": 35,
    "name": "Glide Step",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      }
    ]
  },
  {
    "id": 36,
    "name": "Novice Summit",
    "category": "Beginner",
    "difficulty": "APPRENTICE",
    "width": 7,
    "height": 7,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 37,
    "name": "Convergence",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 38,
    "name": "Interlock",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 39,
    "name": "Matrix Maze",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 40,
    "name": "Dual Labyrinth",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      }
    ]
  },
  {
    "id": 41,
    "name": "Quantum Leap",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 7,
    "height": 7,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 42,
    "name": "Orbital Ring",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 7,
    "height": 7,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 43,
    "name": "Crossfire",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 44,
    "name": "Tangled Wires",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 45,
    "name": "Neon Nexus",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 46,
    "name": "Spiral Shift",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 47,
    "name": "Warp Track",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 48,
    "name": "Vortex Core",
    "category": "Intermediate",
    "difficulty": "ADEPT",
    "width": 8,
    "height": 8,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      }
    ]
  },
  {
    "id": 49,
    "name": "Overdrive",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      }
    ]
  },
  {
    "id": 50,
    "name": "Gridlock Shift",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 51,
    "name": "Laser Mesh",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 52,
    "name": "Pulse Reactor",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 53,
    "name": "Cyber Spire",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 8,
    "height": 8,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      }
    ]
  },
  {
    "id": 54,
    "name": "Cosmic Horizon",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 8,
    "height": 8,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 55,
    "name": "Echo Chamber",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 56,
    "name": "Flux Gate",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 57,
    "name": "Chroma Loop",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 58,
    "name": "Apex Angle",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 59,
    "name": "Shifting Sands",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 60,
    "name": "Stellar Wheel",
    "category": "Intermediate",
    "difficulty": "INTERMEDIATE",
    "width": 9,
    "height": 9,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": false
      }
    ]
  },
  {
    "id": 61,
    "name": "Deep Network",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      }
    ]
  },
  {
    "id": 62,
    "name": "Circuit Core",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 63,
    "name": "Magnetic Pull",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 64,
    "name": "Hyperlink",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 65,
    "name": "Fusion Grid",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 9,
    "height": 9,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 66,
    "name": "Eclipse Portal",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 9,
    "height": 9,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 67,
    "name": "Data Ribbon",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      }
    ]
  },
  {
    "id": 68,
    "name": "Photon Net",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 9,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 69,
    "name": "Neon Web",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": false
      }
    ]
  },
  {
    "id": 70,
    "name": "Tangent Trace",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      }
    ]
  },
  {
    "id": 71,
    "name": "Prism Maze",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 72,
    "name": "Intermediate Peak",
    "category": "Intermediate",
    "difficulty": "SKILLED",
    "width": 10,
    "height": 10,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 73,
    "name": "Master Mind",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 7,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 9,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 74,
    "name": "Topological Grid",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 75,
    "name": "Infinite Knot",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": false
      }
    ]
  },
  {
    "id": 76,
    "name": "Neural Lattice",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 77,
    "name": "Grand Labyrinth",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 78,
    "name": "Singularity Ring",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 12,
    "height": 12,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 11,
            "y": 4
          },
          {
            "x": 11,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 11
          },
          {
            "x": 6,
            "y": 11
          },
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 11,
            "y": 6
          },
          {
            "x": 11,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 79,
    "name": "Hypercube",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": false
      }
    ]
  },
  {
    "id": 80,
    "name": "Quantum Entanglement",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 81,
    "name": "Vortex Titan",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 10,
    "height": 10,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": false
      }
    ]
  },
  {
    "id": 82,
    "name": "Chrono Twist",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      }
    ]
  },
  {
    "id": 83,
    "name": "Omega Shift",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 84,
    "name": "Void Spire",
    "category": "Trained",
    "difficulty": "EXPERT",
    "width": 12,
    "height": 12,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          },
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 6,
            "y": 11
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 11,
            "y": 4
          },
          {
            "x": 11,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 11,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 7,
            "y": 11
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 85,
    "name": "Eclipse Engine",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 4,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 10,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      }
    ]
  },
  {
    "id": 86,
    "name": "Cosmic Spiral",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 87,
    "name": "Cyber Citadel",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 0,
            "y": 10
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 5,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      }
    ]
  },
  {
    "id": 88,
    "name": "Absolute Zero",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 6,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      }
    ]
  },
  {
    "id": 89,
    "name": "Dark Matter",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 6,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 1,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      }
    ]
  },
  {
    "id": 90,
    "name": "Supernova Ring",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 12,
    "height": 12,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 11,
            "y": 5
          },
          {
            "x": 11,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 6,
            "y": 11
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 11,
            "y": 6
          },
          {
            "x": 11,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 91,
    "name": "Event Horizon",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          },
          {
            "x": 10,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 10,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_28",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 92,
    "name": "Chaos Theory",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 10,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 10
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 93,
    "name": "Titanium Weave",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 94,
    "name": "Neural Overload",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 10,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 0,
            "y": 10
          },
          {
            "x": 1,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      }
    ]
  },
  {
    "id": 95,
    "name": "Continuum",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 1,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 96,
    "name": "Paradox Vortex",
    "category": "Trained",
    "difficulty": "MASTER",
    "width": 12,
    "height": 12,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 7,
            "y": 11
          },
          {
            "x": 6,
            "y": 11
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 11,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 11,
            "y": 6
          },
          {
            "x": 11,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  },
  {
    "id": 97,
    "name": "Astral Gateway",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 98,
    "name": "Nexus Prime",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 0,
            "y": 10
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      }
    ]
  },
  {
    "id": 99,
    "name": "Infinity Bridge",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 11,
    "height": 11,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 100,
    "name": "Tachyon Ray",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 11,
            "y": 2
          },
          {
            "x": 11,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 11,
            "y": 9
          },
          {
            "x": 11,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          },
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 11
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 7,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 3,
            "y": 11
          },
          {
            "x": 2,
            "y": 11
          },
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 11
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 9,
            "y": 11
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 11,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          },
          {
            "x": 11,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 1,
            "y": 11
          },
          {
            "x": 0,
            "y": 11
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 11,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_28",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 11
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_29",
        "points": [
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 11,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_30",
        "points": [
          {
            "x": 10,
            "y": 11
          },
          {
            "x": 11,
            "y": 11
          }
        ],
        "color": "#FF7700",
        "isDot": false
      }
    ]
  },
  {
    "id": 101,
    "name": "Cyber Sovereign",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 11,
            "y": 1
          },
          {
            "x": 11,
            "y": 2
          },
          {
            "x": 11,
            "y": 3
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 11,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          },
          {
            "x": 10,
            "y": 11
          },
          {
            "x": 11,
            "y": 11
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          },
          {
            "x": 0,
            "y": 11
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 6,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 9,
            "y": 11
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 6,
            "y": 11
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 11
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 11,
            "y": 8
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 10,
            "y": 0
          },
          {
            "x": 11,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 11,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_28",
        "points": [
          {
            "x": 7,
            "y": 11
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 8,
            "y": 11
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 102,
    "name": "Celestial Sphere",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 11
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 11,
            "y": 5
          },
          {
            "x": 11,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 3,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 4,
            "y": 11
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 10,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 11,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 0,
            "y": 6
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      }
    ]
  },
  {
    "id": 103,
    "name": "Astral Spire",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 9,
            "y": 11
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 11,
            "y": 7
          },
          {
            "x": 11,
            "y": 6
          },
          {
            "x": 11,
            "y": 5
          },
          {
            "x": 11,
            "y": 4
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 11,
            "y": 9
          },
          {
            "x": 11,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 0,
            "y": 8
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 11,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 11
          },
          {
            "x": 2,
            "y": 11
          },
          {
            "x": 1,
            "y": 11
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 11,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 11,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 11,
            "y": 8
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 8,
            "y": 11
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 3,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 10,
            "y": 11
          },
          {
            "x": 11,
            "y": 11
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_28",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 104,
    "name": "Dimensional Rift",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 11,
            "y": 1
          },
          {
            "x": 11,
            "y": 2
          },
          {
            "x": 10,
            "y": 2
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 8
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 8,
            "y": 11
          },
          {
            "x": 7,
            "y": 11
          },
          {
            "x": 6,
            "y": 11
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 2,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 2,
            "y": 0
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 11,
            "y": 8
          },
          {
            "x": 11,
            "y": 9
          },
          {
            "x": 11,
            "y": 10
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 0,
            "y": 10
          },
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 1,
            "y": 11
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 9,
            "y": 11
          },
          {
            "x": 10,
            "y": 11
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 11,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 10,
            "y": 3
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 7
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 11
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": false
      }
    ]
  },
  {
    "id": 105,
    "name": "Zenith Vault",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 7,
            "y": 11
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 0,
            "y": 3
          },
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 11,
            "y": 9
          },
          {
            "x": 11,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 7,
            "y": 3
          },
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 11,
            "y": 1
          },
          {
            "x": 11,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 3,
            "y": 11
          },
          {
            "x": 2,
            "y": 11
          },
          {
            "x": 1,
            "y": 11
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 11,
            "y": 2
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 11,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 11,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 0,
            "y": 8
          },
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 8,
            "y": 11
          },
          {
            "x": 9,
            "y": 11
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 10,
            "y": 11
          },
          {
            "x": 10,
            "y": 10
          },
          {
            "x": 11,
            "y": 10
          },
          {
            "x": 11,
            "y": 11
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 5,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 0,
            "y": 4
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 0,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": false
      }
    ]
  },
  {
    "id": 106,
    "name": "Apex Titan",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 3,
            "y": 0
          },
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 11,
            "y": 9
          },
          {
            "x": 11,
            "y": 8
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 11,
            "y": 7
          },
          {
            "x": 11,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 2,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 10
          },
          {
            "x": 2,
            "y": 10
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 3,
            "y": 11
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 5,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 8
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 11,
            "y": 0
          },
          {
            "x": 10,
            "y": 0
          },
          {
            "x": 9,
            "y": 0
          },
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 11,
            "y": 1
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 10,
            "y": 10
          },
          {
            "x": 11,
            "y": 10
          },
          {
            "x": 11,
            "y": 11
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 11,
            "y": 5
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 11
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 0,
            "y": 9
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 11,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 11,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 2,
            "y": 11
          },
          {
            "x": 1,
            "y": 11
          },
          {
            "x": 0,
            "y": 11
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 5,
            "y": 10
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 11
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 11,
            "y": 2
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_28",
        "points": [
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_29",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 2,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      }
    ]
  },
  {
    "id": 107,
    "name": "Omega Labyrinth",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": false,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          }
        ],
        "color": "#00F0FF",
        "isDot": false
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 11,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 9,
            "y": 6
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 9,
            "y": 4
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 10,
            "y": 9
          },
          {
            "x": 10,
            "y": 10
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 7
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 8,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 0,
            "y": 0
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 5,
            "y": 9
          },
          {
            "x": 5,
            "y": 10
          }
        ],
        "color": "#FFFFFF",
        "isDot": false
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 5,
            "y": 2
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 1,
            "y": 11
          },
          {
            "x": 2,
            "y": 11
          },
          {
            "x": 3,
            "y": 11
          },
          {
            "x": 3,
            "y": 10
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 4,
            "y": 11
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 8,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 8,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 2,
            "y": 2
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 3,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 7,
            "y": 9
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 9,
            "y": 10
          },
          {
            "x": 9,
            "y": 11
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 0,
            "y": 9
          },
          {
            "x": 0,
            "y": 10
          },
          {
            "x": 0,
            "y": 11
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 11,
            "y": 2
          },
          {
            "x": 10,
            "y": 2
          },
          {
            "x": 10,
            "y": 1
          },
          {
            "x": 10,
            "y": 0
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 10,
            "y": 11
          },
          {
            "x": 11,
            "y": 11
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 1,
            "y": 7
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 4,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 11,
            "y": 1
          },
          {
            "x": 11,
            "y": 0
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 1,
            "y": 5
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_23",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 0,
            "y": 3
          }
        ],
        "color": "#00E5FF",
        "isDot": true
      },
      {
        "id": "arrow_24",
        "points": [
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 11,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_25",
        "points": [
          {
            "x": 6,
            "y": 9
          },
          {
            "x": 6,
            "y": 10
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_26",
        "points": [
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_27",
        "points": [
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 4,
            "y": 0
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_28",
        "points": [
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 11
          }
        ],
        "color": "#FFE600",
        "isDot": true
      }
    ]
  },
  {
    "id": 108,
    "name": "Grandmaster Nirvana",
    "category": "Trained",
    "difficulty": "GRANDMASTER",
    "width": 12,
    "height": 12,
    "isCircular": true,
    "arrows": [
      {
        "id": "arrow_1",
        "points": [
          {
            "x": 0,
            "y": 4
          },
          {
            "x": 1,
            "y": 4
          },
          {
            "x": 1,
            "y": 5
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_2",
        "points": [
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_3",
        "points": [
          {
            "x": 5,
            "y": 11
          },
          {
            "x": 6,
            "y": 11
          },
          {
            "x": 6,
            "y": 10
          },
          {
            "x": 6,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_4",
        "points": [
          {
            "x": 4,
            "y": 3
          },
          {
            "x": 3,
            "y": 3
          },
          {
            "x": 3,
            "y": 2
          },
          {
            "x": 4,
            "y": 2
          },
          {
            "x": 4,
            "y": 1
          },
          {
            "x": 5,
            "y": 1
          }
        ],
        "color": "#FFE600",
        "isDot": true
      },
      {
        "id": "arrow_5",
        "points": [
          {
            "x": 9,
            "y": 1
          },
          {
            "x": 9,
            "y": 2
          },
          {
            "x": 8,
            "y": 2
          },
          {
            "x": 7,
            "y": 2
          },
          {
            "x": 7,
            "y": 3
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_6",
        "points": [
          {
            "x": 3,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          }
        ],
        "color": "#FF7700",
        "isDot": false
      },
      {
        "id": "arrow_7",
        "points": [
          {
            "x": 4,
            "y": 7
          },
          {
            "x": 4,
            "y": 8
          },
          {
            "x": 4,
            "y": 9
          },
          {
            "x": 4,
            "y": 10
          },
          {
            "x": 3,
            "y": 10
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_8",
        "points": [
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_9",
        "points": [
          {
            "x": 10,
            "y": 6
          },
          {
            "x": 9,
            "y": 6
          },
          {
            "x": 9,
            "y": 7
          },
          {
            "x": 10,
            "y": 7
          },
          {
            "x": 11,
            "y": 7
          },
          {
            "x": 11,
            "y": 6
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_10",
        "points": [
          {
            "x": 6,
            "y": 3
          },
          {
            "x": 6,
            "y": 2
          },
          {
            "x": 6,
            "y": 1
          }
        ],
        "color": "#FF0055",
        "isDot": false
      },
      {
        "id": "arrow_11",
        "points": [
          {
            "x": 8,
            "y": 6
          },
          {
            "x": 8,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 7,
            "y": 8
          },
          {
            "x": 7,
            "y": 9
          }
        ],
        "color": "#00FF66",
        "isDot": false
      },
      {
        "id": "arrow_12",
        "points": [
          {
            "x": 4,
            "y": 0
          },
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_13",
        "points": [
          {
            "x": 9,
            "y": 4
          },
          {
            "x": 10,
            "y": 4
          },
          {
            "x": 10,
            "y": 3
          },
          {
            "x": 10,
            "y": 2
          }
        ],
        "color": "#B026FF",
        "isDot": true
      },
      {
        "id": "arrow_14",
        "points": [
          {
            "x": 2,
            "y": 3
          },
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          }
        ],
        "color": "#FF7700",
        "isDot": true
      },
      {
        "id": "arrow_15",
        "points": [
          {
            "x": 8,
            "y": 8
          },
          {
            "x": 8,
            "y": 9
          },
          {
            "x": 8,
            "y": 10
          },
          {
            "x": 7,
            "y": 10
          },
          {
            "x": 7,
            "y": 11
          }
        ],
        "color": "#00E5FF",
        "isDot": false
      },
      {
        "id": "arrow_16",
        "points": [
          {
            "x": 10,
            "y": 8
          },
          {
            "x": 9,
            "y": 8
          },
          {
            "x": 9,
            "y": 9
          },
          {
            "x": 10,
            "y": 9
          }
        ],
        "color": "#FFFFFF",
        "isDot": true
      },
      {
        "id": "arrow_17",
        "points": [
          {
            "x": 1,
            "y": 8
          },
          {
            "x": 1,
            "y": 7
          },
          {
            "x": 0,
            "y": 7
          }
        ],
        "color": "#00F0FF",
        "isDot": true
      },
      {
        "id": "arrow_18",
        "points": [
          {
            "x": 9,
            "y": 3
          },
          {
            "x": 8,
            "y": 3
          },
          {
            "x": 8,
            "y": 4
          },
          {
            "x": 8,
            "y": 5
          },
          {
            "x": 9,
            "y": 5
          },
          {
            "x": 10,
            "y": 5
          }
        ],
        "color": "#FF0055",
        "isDot": true
      },
      {
        "id": "arrow_19",
        "points": [
          {
            "x": 3,
            "y": 6
          },
          {
            "x": 2,
            "y": 6
          },
          {
            "x": 1,
            "y": 6
          },
          {
            "x": 0,
            "y": 6
          }
        ],
        "color": "#00FF66",
        "isDot": true
      },
      {
        "id": "arrow_20",
        "points": [
          {
            "x": 1,
            "y": 3
          },
          {
            "x": 1,
            "y": 2
          }
        ],
        "color": "#FFE600",
        "isDot": false
      },
      {
        "id": "arrow_21",
        "points": [
          {
            "x": 2,
            "y": 8
          },
          {
            "x": 2,
            "y": 7
          },
          {
            "x": 3,
            "y": 7
          },
          {
            "x": 3,
            "y": 8
          },
          {
            "x": 3,
            "y": 9
          },
          {
            "x": 2,
            "y": 9
          }
        ],
        "color": "#B026FF",
        "isDot": false
      },
      {
        "id": "arrow_22",
        "points": [
          {
            "x": 11,
            "y": 5
          },
          {
            "x": 11,
            "y": 4
          }
        ],
        "color": "#FF7700",
        "isDot": true
      }
    ]
  }
];

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
