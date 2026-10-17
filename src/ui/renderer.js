/**
 * Arrow GO+ - Canvas Game Renderer
 * Hardware-accelerated 60/120 FPS rendering of grid, tiles, vector arrows,
 * escape slide animations, collision recoil, and hint auras.
 */

import { DIRECTIONS, THEMES, ANIMATION } from '../engine/constants.js';

export class GameRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.theme = THEMES.dark;

    // Viewport & layout calculations
    this.width = 0;
    this.height = 0;
    this.cellSize = 48;
    this.offsetX = 0;
    this.offsetY = 0;

    // Active animation list
    this.escapingAnimations = []; // { arrow, startX, startY, dir, progress, speed, color }
    this.bumpingAnimations = [];  // { arrow, x, y, dir, progress }
  }

  setTheme(themeKey) {
    this.theme = THEMES[themeKey] || THEMES.dark;
  }

  resize(viewportWidth, viewportHeight, gridWidth, gridHeight) {
    this.width = viewportWidth;
    this.height = viewportHeight;

    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = viewportWidth * dpr;
    this.canvas.height = viewportHeight * dpr;
    this.ctx.scale(dpr, dpr);

    // Calculate maximum possible square cell size while keeping padding
    const padding = 24;
    const availableW = viewportWidth - padding * 2;
    const availableH = viewportHeight - padding * 2;

    const sizeW = availableW / gridWidth;
    const sizeH = availableH / gridHeight;
    this.cellSize = Math.min(sizeW, sizeH, 72); // cap at 72px for big screens

    // Center board
    const boardTotalW = this.cellSize * gridWidth;
    const boardTotalH = this.cellSize * gridHeight;
    this.offsetX = Math.floor((viewportWidth - boardTotalW) / 2);
    this.offsetY = Math.floor((viewportHeight - boardTotalH) / 2);
  }

  /**
   * Convert screen pointer (touch or click) to grid coordinates
   */
  screenToGrid(screenX, screenY, gridWidth, gridHeight) {
    const gx = Math.floor((screenX - this.offsetX) / this.cellSize);
    const gy = Math.floor((screenY - this.offsetY) / this.cellSize);

    if (gx >= 0 && gx < gridWidth && gy >= 0 && gy < gridHeight) {
      return { x: gx, y: gy };
    }
    return null;
  }

  /**
   * Trigger escape launch animation
   */
  triggerEscape(arrow) {
    const dir = DIRECTIONS[arrow.dir];
    this.escapingAnimations.push({
      x: arrow.x,
      y: arrow.y,
      dirKey: arrow.dir,
      dx: dir.dx,
      dy: dir.dy,
      progress: 0,
      startTime: performance.now()
    });
  }

  /**
   * Trigger bump / blocked recoil animation
   */
  triggerBump(arrow) {
    const dir = DIRECTIONS[arrow.dir];
    this.bumpingAnimations.push({
      arrowId: arrow.id,
      x: arrow.x,
      y: arrow.y,
      dirKey: arrow.dir,
      dx: dir.dx,
      dy: dir.dy,
      progress: 0,
      startTime: performance.now()
    });
  }

  render(grid, now = performance.now()) {
    const ctx = this.ctx;
    const t = this.theme;

    // 1. Clear background
    ctx.clearRect(0, 0, this.width, this.height);

    // 2. Render Board Backdrop
    const boardW = grid.width * this.cellSize;
    const boardH = grid.height * this.cellSize;
    const radius = 16;

    ctx.save();
    ctx.fillStyle = t.boardBg;
    ctx.beginPath();
    ctx.roundRect(this.offsetX - 8, this.offsetY - 8, boardW + 16, boardH + 16, radius);
    ctx.fill();

    // 3. Render subtle grid guidance dots
    ctx.fillStyle = t.gridDot;
    for (let gy = 0; gy < grid.height; gy++) {
      for (let gx = 0; gx < grid.width; gx++) {
        const dotX = this.offsetX + gx * this.cellSize + this.cellSize / 2;
        const dotY = this.offsetY + gy * this.cellSize + this.cellSize / 2;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.restore();

    // 4. Update and render bumping animations lookup
    const bumpMap = new Map();
    for (let i = this.bumpingAnimations.length - 1; i >= 0; i--) {
      const b = this.bumpingAnimations[i];
      const elapsed = now - b.startTime;
      b.progress = elapsed / ANIMATION.BUMP_DURATION_MS;

      if (b.progress >= 1) {
        this.bumpingAnimations.splice(i, 1);
      } else {
        // Elastic rebound curve: sin(t * pi) with quick recoil
        const offsetMag = Math.sin(b.progress * Math.PI) * (this.cellSize * 0.35);
        bumpMap.set(b.arrowId, {
          offX: b.dx * offsetMag,
          offY: b.dy * offsetMag,
          isBlockedFlash: true
        });
      }
    }

    // 5. Render Active Arrows on the Grid
    for (let gy = 0; gy < grid.height; gy++) {
      for (let gx = 0; gx < grid.width; gx++) {
        const arrow = grid.matrix[gy][gx];
        if (!arrow || arrow.isRemoved || arrow.state === 'escaping') continue;

        const bump = bumpMap.get(arrow.id);
        const cellPixelX = this.offsetX + gx * this.cellSize + (bump ? bump.offX : 0);
        const cellPixelY = this.offsetY + gy * this.cellSize + (bump ? bump.offY : 0);

        this.drawArrowTile(
          ctx,
          cellPixelX,
          cellPixelY,
          this.cellSize,
          arrow.dir,
          arrow.state === 'hinted',
          bump ? bump.isBlockedFlash : false,
          now
        );
      }
    }

    // 6. Update and render Escaping Arrows (flying off-screen)
    for (let i = this.escapingAnimations.length - 1; i >= 0; i--) {
      const esc = this.escapingAnimations[i];
      const elapsed = now - esc.startTime;
      esc.progress = elapsed / ANIMATION.ESCAPE_DURATION_MS;

      if (esc.progress >= 1) {
        this.escapingAnimations.splice(i, 1);
        continue;
      }

      // Exponential ease-in acceleration (swoosh out!)
      const ease = Math.pow(esc.progress, 2.2);
      // Distance flown is several screen lengths
      const flyDistance = Math.max(this.width, this.height) * 1.2;
      const curX = this.offsetX + esc.x * this.cellSize + esc.dx * (flyDistance * ease);
      const curY = this.offsetY + esc.y * this.cellSize + esc.dy * (flyDistance * ease);

      const alpha = Math.max(0, 1 - esc.progress * 0.9);

      ctx.save();
      ctx.globalAlpha = alpha;
      this.drawArrowTile(
        ctx,
        curX,
        curY,
        this.cellSize,
        esc.dirKey,
        false,
        false,
        now,
        true // isEscaping (stretched trail)
      );
      ctx.restore();
    }
  }

  /**
   * Draw a single beautiful rounded Arrow Tile
   */
  drawArrowTile(ctx, px, py, size, dirKey, isHinted, isBlocked, now, isEscaping = false) {
    const t = this.theme;
    const padding = Math.max(3, Math.floor(size * 0.08));
    const tileSize = size - padding * 2;
    const tileRadius = Math.max(6, Math.floor(tileSize * 0.22));

    const x = px + padding;
    const y = py + padding;
    const cx = x + tileSize / 2;
    const cy = y + tileSize / 2;

    ctx.save();

    // Hint Pulsing Aura
    if (isHinted) {
      const pulse = 0.5 + 0.5 * Math.sin(now * 0.008);
      ctx.shadowColor = t.hintGlow;
      ctx.shadowBlur = 12 + pulse * 14;
      ctx.strokeStyle = t.hintGlow;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(x - 2, y - 2, tileSize + 4, tileSize + 4, tileRadius + 2);
      ctx.stroke();
    } else {
      ctx.shadowColor = isBlocked ? t.blockedFlash : t.tileShadow;
      ctx.shadowBlur = isBlocked ? 14 : 6;
      ctx.shadowOffsetY = isBlocked ? 0 : 3;
    }

    // Tile Box Background
    ctx.fillStyle = isBlocked ? t.blockedFlash : (isHinted ? '#FEF3C7' : t.tileBg);
    ctx.strokeStyle = isBlocked ? '#DC2626' : (isHinted ? t.hintGlow : t.tileBorder);
    ctx.lineWidth = isHinted ? 2 : 1;

    ctx.beginPath();
    ctx.roundRect(x, y, tileSize, tileSize, tileRadius);
    ctx.fill();
    ctx.stroke();

    // Reset shadow for inner glyph
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;

    // Draw Vector Chevron / Arrow Glyph inside
    const dirInfo = DIRECTIONS[dirKey];
    ctx.translate(cx, cy);
    ctx.rotate((dirInfo.angle * Math.PI) / 180);

    const arrowColor = isBlocked ? '#FFFFFF' : (isHinted ? '#D97706' : t.arrowColor);
    ctx.fillStyle = arrowColor;
    ctx.strokeStyle = arrowColor;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw Modern Crisp Arrow Head & Shaft
    const arrowLen = tileSize * 0.42;
    const wingW = tileSize * 0.28;
    const stemW = Math.max(3, tileSize * 0.12);

    ctx.beginPath();
    // Arrow pointing UP relative to transformed coordinate space
    ctx.moveTo(0, -arrowLen * 0.85); // Tip
    ctx.lineTo(wingW, 0);            // Right wing
    ctx.lineTo(stemW, -0.05 * arrowLen); // Right shoulder
    ctx.lineTo(stemW, arrowLen * 0.7);   // Right base
    ctx.lineTo(-stemW, arrowLen * 0.7);  // Left base
    ctx.lineTo(-stemW, -0.05 * arrowLen); // Left shoulder
    ctx.lineTo(-wingW, 0);           // Left wing
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}
