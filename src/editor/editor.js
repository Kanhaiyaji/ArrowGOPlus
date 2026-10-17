/**
 * Arrow GO+ - Interactive Level Editor & Solver Studio
 * Allows players and game designers to build custom shapes, rotate arrows,
 * test AI solvability with 1 click, view deadlock analysis, and export/import JSON.
 */

import { ArrowGrid } from '../engine/grid.js';
import { ArrowSolver } from '../engine/solver.js';
import { DIR_KEYS } from '../engine/constants.js';

export class LevelEditor {
  constructor(canvas, containerEl, onExit) {
    this.canvas = canvas;
    this.container = containerEl;
    this.onExit = onExit;

    this.width = 7;
    this.height = 7;
    this.grid = new ArrowGrid(this.width, this.height);
    this.selectedDir = 'UP';
    this.brushMode = 'paint'; // 'paint' | 'rotate' | 'erase'

    this.initDefaultShape();
  }

  initDefaultShape() {
    this.grid = new ArrowGrid(this.width, this.height);
    // Draw initial 5x5 box
    for (let y = 1; y < this.height - 1; y++) {
      for (let x = 1; x < this.width - 1; x++) {
        const randDir = DIR_KEYS[Math.floor(Math.random() * DIR_KEYS.length)];
        this.grid.addArrow(x, y, randDir);
      }
    }
  }

  handleCellClick(gx, gy) {
    if (gx < 0 || gx >= this.width || gy < 0 || gy >= this.height) return;

    const existing = this.grid.getArrow(gx, gy);

    if (this.brushMode === 'erase') {
      if (existing) this.grid.removeArrowAt(gx, gy);
    } else if (this.brushMode === 'rotate') {
      if (existing) {
        const curIdx = DIR_KEYS.indexOf(existing.dir);
        existing.dir = DIR_KEYS[(curIdx + 1) % DIR_KEYS.length];
      }
    } else {
      // Paint mode: cycle direction if existing, or place new
      if (existing) {
        const curIdx = DIR_KEYS.indexOf(existing.dir);
        existing.dir = DIR_KEYS[(curIdx + 1) % DIR_KEYS.length];
      } else {
        this.grid.addArrow(gx, gy, this.selectedDir);
      }
    }
  }

  setGridDimensions(w, h) {
    this.width = Math.max(3, Math.min(14, w));
    this.height = Math.max(3, Math.min(14, h));
    const newGrid = new ArrowGrid(this.width, this.height);

    for (const arrow of this.grid.arrows.values()) {
      if (arrow.x < this.width && arrow.y < this.height) {
        newGrid.addArrow(arrow.x, arrow.y, arrow.dir);
      }
    }
    this.grid = newGrid;
  }

  clear() {
    this.grid = new ArrowGrid(this.width, this.height);
  }

  verifySolvability() {
    return ArrowSolver.solve(this.grid);
  }

  exportJson() {
    return JSON.stringify(this.grid.serialize(), null, 2);
  }

  importJson(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      if (data.width && data.height && Array.isArray(data.arrows)) {
        this.width = data.width;
        this.height = data.height;
        this.grid = ArrowGrid.deserialize(data);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
}
