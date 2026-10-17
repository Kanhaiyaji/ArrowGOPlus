/**
 * Arrow GO+ - Neon Polyline Maze Renderer with True Node-Following Snake Slither
 *
 * Guaranteed Behavior:
 * - Every arrow segment lies strictly on the orthogonal grid lines and touches every node.
 * - When an arrow escapes, its ENTIRE body slithers forward along its exact nodes,
 *   rounding every corner and touching each node before exiting out through its head.
 * - When an arrow bumps/is blocked, it advances forward along its own nodes for 0.35 cells
 *   and springs back along the exact same path.
 */

import { CARDINALS } from '../engine/snakeGrid.js';

export class NeonMazeRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.width = 0;
    this.height = 0;
    this.cellSize = 36;
    this.offsetX = 0;
    this.offsetY = 0;

    // Active animations
    this.escaping = []; // { arrowId, track, totalLen, arrowLen, startTime, duration }
    this.blocked = new Map(); // arrowId -> { track, arrowLen, startTime }
  }

  resetAnimations() {
    this.escaping = [];
    this.blocked.clear();
  }

  resize(viewportWidth, viewportHeight, gridWidth, gridHeight) {
    const w = Math.max(280, viewportWidth || 360);
    const h = Math.max(300, viewportHeight || 480);
    const gw = Math.max(1, gridWidth || 8);
    const gh = Math.max(1, gridHeight || 8);

    this.width = w;
    this.height = h;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(w * dpr);
    this.canvas.height = Math.floor(h * dpr);

    // CRITICAL: Always reset transform before scaling to prevent compounding 2x, 4x, 8x, 16x zoom
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);

    const padding = 28;
    const availW = Math.max(100, w - padding * 2);
    const availH = Math.max(100, h - padding * 2);

    const sizeW = availW / gw;
    const sizeH = availH / gh;
    this.cellSize = Math.max(20, Math.min(sizeW, sizeH, 52));

    const boardW = this.cellSize * gw;
    const boardH = this.cellSize * gh;
    this.offsetX = Math.floor((w - boardW) / 2);
    this.offsetY = Math.floor((h - boardH) / 2);
  }

  screenToGrid(screenX, screenY) {
    const gx = (screenX - this.offsetX) / this.cellSize;
    const gy = (screenY - this.offsetY) / this.cellSize;
    return { x: gx, y: gy };
  }

  gridToScreen(gx, gy) {
    return {
      x: this.offsetX + gx * this.cellSize + this.cellSize / 2,
      y: this.offsetY + gy * this.cellSize + this.cellSize / 2
    };
  }

  /**
   * Compute cumulative length of polyline points
   */
  getTrackMetrics(points) {
    const cum = [0];
    for (let i = 1; i < points.length; i++) {
      const d = Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y);
      cum.push(cum[i - 1] + d);
    }
    return { cum, total: cum[cum.length - 1] };
  }

  /**
   * Slice a sub-path along a track between distance sStart and sEnd
   */
  sliceTrack(track, cum, sStart, sEnd) {
    const total = cum[cum.length - 1];
    const s0 = Math.max(0, Math.min(total, sStart));
    const s1 = Math.max(0, Math.min(total, sEnd));
    if (s1 <= s0) return null;

    const getPointAt = (s) => {
      if (s <= 0) {
        return {
          x: track[0].x,
          y: track[0].y,
          dir: { dx: track[1].x - track[0].x, dy: track[1].y - track[0].y }
        };
      }
      if (s >= total) {
        const last = track[track.length - 1];
        const prev = track[track.length - 2];
        return {
          x: last.x,
          y: last.y,
          dir: { dx: last.x - prev.x, dy: last.y - prev.y }
        };
      }
      for (let i = 0; i < cum.length - 1; i++) {
        if (s >= cum[i] && s <= cum[i + 1]) {
          const segLen = cum[i + 1] - cum[i];
          const t = segLen === 0 ? 0 : (s - cum[i]) / segLen;
          return {
            x: track[i].x + t * (track[i + 1].x - track[i].x),
            y: track[i].y + t * (track[i + 1].y - track[i].y),
            dir: { dx: track[i + 1].x - track[i].x, dy: track[i + 1].y - track[i].y }
          };
        }
      }
      const last = track[track.length - 1];
      const prev = track.length >= 2 ? track[track.length - 2] : track[0];
      return {
        x: last.x,
        y: last.y,
        dir: { dx: last.x - prev.x, dy: last.y - prev.y }
      };
    };

    const result = [];
    const startPt = getPointAt(s0);
    result.push({ x: startPt.x, y: startPt.y });

    for (let i = 0; i < track.length; i++) {
      if (cum[i] > s0 && cum[i] < s1) {
        result.push({ x: track[i].x, y: track[i].y });
      }
    }

    const endPt = getPointAt(s1);
    result.push({ x: endPt.x, y: endPt.y });

    return {
      points: result,
      headDir: endPt.dir,
      tailPos: startPt,
      headPos: endPt
    };
  }

  /**
   * Trigger arrow slithering escape along its full path of nodes and out the exit
   */
  triggerEscape(arrow, onComplete = null) {
    const card = CARDINALS[arrow.dir];
    const head = arrow.points[arrow.points.length - 1];
    const exitDistance = Math.max(this.width, this.height) / this.cellSize + 10;

    // Build complete track: all arrow nodes + straight exit ray
    const track = arrow.points.map(p => ({ x: p.x, y: p.y }));
    track.push({
      x: head.x + card.dx * exitDistance,
      y: head.y + card.dy * exitDistance
    });

    const metrics = this.getTrackMetrics(track);
    const arrowLen = this.getTrackMetrics(arrow.points).total;

    this.escaping.push({
      arrowId: arrow.id,
      track,
      cum: metrics.cum,
      totalTrackLen: metrics.total,
      arrowLen,
      isDot: arrow.isDot,
      startTime: performance.now(),
      duration: Math.max(280, arrowLen * 65),
      onComplete
    });
  }

  /**
   * Trigger blocked bump: arrow nudges forward along its own nodes and springs back
   */
  triggerBlocked(arrow) {
    const card = CARDINALS[arrow.dir];
    const head = arrow.points[arrow.points.length - 1];

    const track = arrow.points.map(p => ({ x: p.x, y: p.y }));
    track.push({
      x: head.x + card.dx * 0.4,
      y: head.y + card.dy * 0.4
    });

    const metrics = this.getTrackMetrics(track);
    const arrowLen = this.getTrackMetrics(arrow.points).total;

    this.blocked.set(arrow.id, {
      track,
      cum: metrics.cum,
      arrowLen,
      startTime: performance.now()
    });
  }

  render(grid, now = performance.now()) {
    const ctx = this.ctx;

    // 1. Clear background (Deep dark space blue)
    ctx.clearRect(0, 0, this.width, this.height);

    // Subtle diagonal arrow watermark pattern (matching Google Play Screenshot 1)
    ctx.save();
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
    ctx.lineWidth = 1.5;
    for (let x = -this.height; x < this.width + this.height; x += 90) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + this.height, this.height);
      ctx.stroke();
    }
    ctx.restore();

    // 2. Render background grid dots at every node (or Glowing Circular Radar for circular boards)
    if (grid.isCircular) {
      ctx.save();
      const centerGX = (grid.width - 1) / 2;
      const centerGY = (grid.height - 1) / 2;
      const centerScreen = this.gridToScreen(centerGX, centerGY);
      const maxRadiusCells = Math.min(grid.width, grid.height) / 2 - 0.15;
      const maxRadiusPx = maxRadiusCells * this.cellSize;

      // Pulse core
      const pulse = 1 + Math.sin(now * 0.003) * 0.08;
      const coreGrad = ctx.createRadialGradient(
        centerScreen.x, centerScreen.y, 2,
        centerScreen.x, centerScreen.y, this.cellSize * 1.5 * pulse
      );
      coreGrad.addColorStop(0, 'rgba(0, 240, 255, 0.25)');
      coreGrad.addColorStop(0.6, 'rgba(56, 189, 248, 0.08)');
      coreGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerScreen.x, centerScreen.y, this.cellSize * 1.5 * pulse, 0, Math.PI * 2);
      ctx.fill();

      // Radar rings
      const ringsCount = Math.floor(maxRadiusCells);
      for (let r = 1; r <= ringsCount; r++) {
        const rad = r * this.cellSize;
        ctx.beginPath();
        ctx.arc(centerScreen.x, centerScreen.y, rad, 0, Math.PI * 2);
        ctx.strokeStyle = r === ringsCount ? 'rgba(0, 240, 255, 0.4)' : 'rgba(56, 189, 248, 0.18)';
        ctx.lineWidth = r === ringsCount ? 2 : 1;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      }

      // Outer boundary ring with glow
      ctx.beginPath();
      ctx.arc(centerScreen.x, centerScreen.y, maxRadiusPx, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.45)';
      ctx.lineWidth = 2.5;
      ctx.shadowColor = '#00F0FF';
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Crosshair spokes
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(centerScreen.x - maxRadiusPx, centerScreen.y);
      ctx.lineTo(centerScreen.x + maxRadiusPx, centerScreen.y);
      ctx.moveTo(centerScreen.x, centerScreen.y - maxRadiusPx);
      ctx.lineTo(centerScreen.x, centerScreen.y + maxRadiusPx);
      ctx.stroke();

      // Node dots inside circle
      ctx.fillStyle = 'rgba(0, 240, 255, 0.35)';
      for (let gy = 0; gy < grid.height; gy++) {
        for (let gx = 0; gx < grid.width; gx++) {
          if (Math.hypot(gx - centerGX, gy - centerGY) <= maxRadiusCells) {
            const p = this.gridToScreen(gx, gy);
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.restore();
    } else {
      // Standard rectangular grid dots
      ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
      for (let gy = 0; gy < grid.height; gy++) {
        for (let gx = 0; gx < grid.width; gx++) {
          const p = this.gridToScreen(gx, gy);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    // 3. Render Active Arrows (or their blocked bump state)
    for (const arrow of grid.arrows.values()) {
      if (arrow.isRemoved || arrow.state === 'escaping') continue;

      const blockedData = this.blocked.get(arrow.id);

      if (blockedData) {
        // Nudge forward along its own nodes and recoil
        const elapsed = now - blockedData.startTime;
        const p = elapsed / 260;

        if (p >= 1) {
          this.blocked.delete(arrow.id);
          this.drawStaticArrow(ctx, arrow, false, arrow.state === 'hinted', now);
        } else {
          // Sine bump along the nodes
          const bumpDist = Math.sin(p * Math.PI) * 0.35;
          const sStart = bumpDist;
          const sEnd = blockedData.arrowLen + bumpDist;
          const slice = this.sliceTrack(blockedData.track, blockedData.cum, sStart, sEnd);

          if (slice) {
            this.drawTrack(
              ctx,
              slice.points,
              '#FF0055',
              '#FF0055',
              slice.headDir,
              false,
              arrow.isDot
            );
          }
        }
      } else {
        // Standard idle or hinted arrow
        this.drawStaticArrow(ctx, arrow, false, arrow.state === 'hinted', now);
      }
    }

    // 4. Render Escaping Arrows Slithering Node-by-Node Along Track
    for (let i = this.escaping.length - 1; i >= 0; i--) {
      const esc = this.escaping[i];
      const elapsed = now - esc.startTime;
      const progress = elapsed / esc.duration;

      if (progress >= 1) {
        if (esc.onComplete) {
          try { esc.onComplete(); } catch (e) { console.error('Escape complete error:', e); }
        }
        this.escaping.splice(i, 1);
        continue;
      }

      // Smooth acceleration along the nodes
      const ease = Math.pow(progress, 1.6);
      const travelDist = esc.totalTrackLen * ease;

      const sStart = travelDist;
      const sEnd = travelDist + esc.arrowLen;

      const slice = this.sliceTrack(esc.track, esc.cum, sStart, sEnd);

      if (slice && slice.points.length >= 2) {
        const alpha = Math.max(0, 1 - progress * 0.85);
        ctx.save();
        ctx.globalAlpha = alpha;
        this.drawTrack(
          ctx,
          slice.points,
          '#00F0FF',
          '#00F0FF',
          slice.headDir,
          true,
          esc.isDot
        );

        // Luminous border lens flare (faithful to Screenshot 5)
        const tip = slice.headPos;
        const tipPixel = this.gridToScreen(tip.x, tip.y);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowColor = '#00F0FF';
        ctx.shadowBlur = 18;
        ctx.beginPath();
        ctx.arc(tipPixel.x, tipPixel.y, 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }
  }

  drawStaticArrow(ctx, arrow, isBlocked, isHinted, now) {
    let strokeColor = '#FFFFFF';
    let glowColor = 'rgba(255, 255, 255, 0.45)';

    if (isBlocked) {
      strokeColor = '#FF0055';
      glowColor = '#FF0055';
    } else if (isHinted) {
      const pulse = 0.5 + 0.5 * Math.sin(now * 0.008);
      strokeColor = '#FBBF24';
      glowColor = `rgba(251, 191, 36, ${0.4 + pulse * 0.5})`;
    } else if (arrow.color && arrow.color !== '#FFFFFF') {
      strokeColor = arrow.color;
      glowColor = arrow.color;
    }

    const card = CARDINALS[arrow.dir];
    this.drawTrack(
      ctx,
      arrow.points,
      strokeColor,
      glowColor,
      { dx: card.dx, dy: card.dy },
      false,
      arrow.isDot
    );
  }

  /**
   * Draw glowing neon track through every node
   */
  drawTrack(ctx, points, strokeColor, glowColor, headDirVec, isEscaping = false, hasTailDot = false) {
    if (!points || points.length < 2) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // 1. Neon Outer Glow Layer
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = isEscaping ? 18 : 12;
    ctx.strokeStyle = strokeColor;
    ctx.lineWidth = isEscaping ? 5.5 : 4.5;

    ctx.beginPath();
    const p0 = this.gridToScreen(points[0].x, points[0].y);
    ctx.moveTo(p0.x, p0.y);

    for (let i = 1; i < points.length; i++) {
      const p = this.gridToScreen(points[i].x, points[i].y);
      ctx.lineTo(p.x, p.y);
    }
    ctx.stroke();

    // 2. White Core for Real Glowing Neon Look
    ctx.shadowBlur = 0;
    ctx.strokeStyle = strokeColor === '#FFFFFF' ? '#FFFFFF' : strokeColor;
    ctx.lineWidth = 2.4;
    ctx.stroke();

    // 3. Node Connection Dots (ensures arrow body visibly touches every node it occupies!)
    ctx.fillStyle = strokeColor;
    for (let i = 0; i < points.length; i++) {
      const p = this.gridToScreen(points[i].x, points[i].y);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 4. Tail Node Dot (if marked as start dot or currently escaping)
    if (hasTailDot || isEscaping) {
      ctx.fillStyle = strokeColor;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(p0.x, p0.y, 6.5, 0, Math.PI * 2);
      ctx.fill();

      // White inner pip
      ctx.fillStyle = '#FFFFFF';
      ctx.shadowBlur = 0;
      ctx.beginPath();
      ctx.arc(p0.x, p0.y, 3, 0, Math.PI * 2);
      ctx.fill();
    }

    // 5. Arrow Head Chevron at the Tip
    const tip = this.gridToScreen(points[points.length - 1].x, points[points.length - 1].y);
    const angle = Math.atan2(headDirVec.dy, headDirVec.dx) + Math.PI / 2;

    ctx.save();
    ctx.translate(tip.x, tip.y);
    ctx.rotate(angle);

    ctx.fillStyle = strokeColor;
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = 12;

    const headLen = 10;
    const headWing = 7.5;
    ctx.beginPath();
    ctx.moveTo(0, -headLen);
    ctx.lineTo(headWing, headLen * 0.6);
    ctx.lineTo(0, headLen * 0.2);
    ctx.lineTo(-headWing, headLen * 0.6);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
    ctx.restore();
  }
}
