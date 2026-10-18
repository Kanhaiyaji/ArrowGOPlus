/**
 * Arrow GO+ - Dedicated Vortex Circle Mode Renderer
 * Renders glowing concentric radar rings, radial sectors, curved arc arrows, and radial arrows.
 */

export class VortexRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');

    this.width = 0;
    this.height = 0;
    this.cx = 0;
    this.cy = 0;
    this.R_base = 60;
    this.dR = 40;

    // Active animations
    this.escaping = []; // { arrow, startTime, duration, onComplete }
    this.blocked = new Map(); // arrowId -> startTime
  }

  resetAnimations() {
    this.escaping = [];
    this.blocked.clear();
  }

  setTheme(themeKey) {
    this.themeKey = themeKey;
  }

  resize(viewportWidth, viewportHeight, numRings = 3) {
    const w = Math.max(280, viewportWidth || 360);
    const h = Math.max(300, viewportHeight || 480);

    this.width = w;
    this.height = h;
    this.cx = Math.floor(w / 2);
    this.cy = Math.floor(h / 2);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(w * dpr);
    this.canvas.height = Math.floor(h * dpr);

    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);

    const maxR = Math.min(w, h) * 0.46;
    this.R_base = Math.max(42, maxR * 0.28);
    this.dR = Math.max(26, (maxR - this.R_base) / Math.max(1, numRings - 1));
  }

  getRadius(r) {
    return this.R_base + r * this.dR;
  }

  getPoint(r, s, numSectors) {
    const angle = s * (2 * Math.PI / numSectors);
    const rad = this.getRadius(r);
    return {
      x: this.cx + rad * Math.cos(angle),
      y: this.cy + rad * Math.sin(angle),
      angle
    };
  }

  /**
   * Hit test tap on vortex circle grid
   */
  hitTest(screenX, screenY, grid) {
    const dx = screenX - this.cx;
    const dy = screenY - this.cy;
    const dist = Math.hypot(dx, dy);
    let angle = Math.atan2(dy, dx);
    if (angle < 0) angle += Math.PI * 2;

    const sectorWidth = (2 * Math.PI) / grid.numSectors;
    const sector = Math.round(angle / sectorWidth) % grid.numSectors;

    // Check radial arrows first
    for (const arrow of grid.arrows.values()) {
      if (arrow.isRemoved || arrow.state === 'escaping') continue;
      if (arrow.type === 'radial') {
        const arrowAngle = arrow.sector * sectorWidth;
        let diff = Math.abs(angle - arrowAngle);
        if (diff > Math.PI) diff = 2 * Math.PI - diff;

        const rMin = this.getRadius(arrow.startRing) - 18;
        const rMax = this.getRadius(arrow.headRing) + 18;

        if (diff <= 0.18 && dist >= rMin && dist <= rMax) {
          return arrow;
        }
      }
    }

    // Check arc arrows
    for (let r = 0; r < grid.numRings; r++) {
      const ringR = this.getRadius(r);
      if (Math.abs(dist - ringR) <= 22) {
        // Tapped on ring r
        const occupantId = grid.matrix[r][sector];
        if (occupantId) {
          const arrow = grid.arrows.get(occupantId);
          if (arrow && !arrow.isRemoved && arrow.state !== 'escaping') {
            return arrow;
          }
        }
      }
    }

    return null;
  }

  triggerEscape(arrow, onComplete = null) {
    this.escaping.push({
      arrow: { ...arrow },
      startTime: performance.now(),
      duration: 380,
      onComplete
    });
  }

  triggerBlocked(arrow) {
    this.blocked.set(arrow.id, performance.now());
  }

  render(grid, now = performance.now()) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    const { cx, cy, R_base, dR } = this;
    const numRings = grid.numRings;
    const numSectors = grid.numSectors;
    const maxRadius = this.getRadius(numRings - 1) + 20;

    // 1. Radar Background (Concentric Circles & Radial Spokes)
    ctx.save();

    // Central Pulsing Cyber Core
    const pulse = 1 + Math.sin(now * 0.003) * 0.06;
    const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, R_base * 0.75 * pulse);
    coreGrad.addColorStop(0, 'rgba(0, 240, 255, 0.28)');
    coreGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.12)');
    coreGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, R_base * 0.75 * pulse, 0, Math.PI * 2);
    ctx.fill();

    // Spinning Radar Sweep Line
    const sweepAngle = (now * 0.0012) % (Math.PI * 2);
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, maxRadius, sweepAngle - 0.25, sweepAngle);
    ctx.closePath();
    const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius);
    sweepGrad.addColorStop(0, 'rgba(0, 240, 255, 0.15)');
    sweepGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');
    ctx.fillStyle = sweepGrad;
    ctx.fill();

    // Concentric Guide Rings
    for (let r = 0; r < numRings; r++) {
      const rad = this.getRadius(r);
      ctx.beginPath();
      ctx.arc(cx, cy, rad, 0, Math.PI * 2);
      ctx.strokeStyle = r === numRings - 1 ? 'rgba(56, 189, 248, 0.35)' : 'rgba(56, 189, 248, 0.18)';
      ctx.lineWidth = r === numRings - 1 ? 2 : 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Radial Spokes & Sector Ticks
    for (let s = 0; s < numSectors; s++) {
      const angle = s * (2 * Math.PI / numSectors);
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(cx + (R_base - 14) * cosA, cy + (R_base - 14) * sinA);
      ctx.lineTo(cx + (maxRadius + 4) * cosA, cy + (maxRadius + 4) * sinA);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.1)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Node Dots
      for (let r = 0; r < numRings; r++) {
        const rad = this.getRadius(r);
        ctx.beginPath();
        ctx.arc(cx + rad * cosA, cy + rad * sinA, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.35)';
        ctx.fill();
      }
    }
    ctx.restore();

    // 2. Render Active Arrows (Idle / Blocked)
    for (const arrow of grid.arrows.values()) {
      if (arrow.isRemoved || arrow.state === 'escaping') continue;

      const isBlocked = this.blocked.has(arrow.id);
      let bumpProgress = 0;
      if (isBlocked) {
        const elapsed = now - this.blocked.get(arrow.id);
        const p = elapsed / 220;
        if (p >= 1) {
          this.blocked.delete(arrow.id);
        } else {
          bumpProgress = Math.sin(p * Math.PI);
        }
      }

      this.drawVortexArrow(ctx, arrow, numSectors, isBlocked, bumpProgress, arrow.state === 'hinted', now);
    }

    // 3. Render Escaping Arrows
    for (let i = this.escaping.length - 1; i >= 0; i--) {
      const esc = this.escaping[i];
      const elapsed = now - esc.startTime;
      const progress = elapsed / esc.duration;

      if (progress >= 1) {
        if (esc.onComplete) {
          try { esc.onComplete(); } catch (e) { console.error('Escape err:', e); }
        }
        this.escaping.splice(i, 1);
        continue;
      }

      const ease = Math.pow(progress, 1.6);
      this.drawEscapingVortexArrow(ctx, esc.arrow, numSectors, ease);
    }
  }

  drawVortexArrow(ctx, arrow, numSectors, isBlocked, bumpProgress, isHinted, now) {
    const { cx, cy } = this;
    const baseColor = isBlocked ? '#FF0055' : arrow.color;
    const glowColor = isBlocked ? '#FF0055' : (isHinted ? '#FFE600' : arrow.color);
    const strokeW = isHinted ? 7 : 5.5;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Outer Glow
    ctx.shadowColor = glowColor;
    ctx.shadowBlur = isHinted ? 16 : 10;
    ctx.strokeStyle = baseColor;
    ctx.lineWidth = strokeW;

    if (arrow.type === 'arc') {
      const rad = this.getRadius(arrow.ring);
      const angleStep = (2 * Math.PI) / numSectors;
      let startA = arrow.startSector * angleStep;
      let endA = arrow.headSector * angleStep;
      const ccw = arrow.dir === 'CCW';

      // Bump effect
      if (bumpProgress > 0) {
        const bumpAngle = (bumpProgress * 0.12) * (ccw ? -1 : 1);
        startA += bumpAngle;
        endA += bumpAngle;
      }

      ctx.beginPath();
      ctx.arc(cx, cy, rad, startA, endA, ccw);
      ctx.stroke();

      // Tail dot
      if (arrow.isDot) {
        const tx = cx + rad * Math.cos(startA);
        const ty = cy + rad * Math.sin(startA);
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(tx, ty, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Head Arrow Tip
      const hx = cx + rad * Math.cos(endA);
      const hy = cy + rad * Math.sin(endA);
      // Tangent angle
      const tangentA = endA + (ccw ? -Math.PI / 2 : Math.PI / 2);
      this.drawArrowHead(ctx, hx, hy, tangentA, baseColor);
    } else {
      // Radial Arrow
      const angle = arrow.sector * (2 * Math.PI / numSectors);
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      let rStart = this.getRadius(arrow.startRing);
      let rEnd = this.getRadius(arrow.headRing);

      if (bumpProgress > 0) {
        const bumpD = bumpProgress * 12;
        rStart += bumpD;
        rEnd += bumpD;
      }

      ctx.beginPath();
      ctx.moveTo(cx + rStart * cosA, cy + rStart * sinA);
      ctx.lineTo(cx + rEnd * cosA, cy + rEnd * sinA);
      ctx.stroke();

      if (arrow.isDot) {
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(cx + rStart * cosA, cy + rStart * sinA, 4.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Outward Arrow Head
      this.drawArrowHead(ctx, cx + rEnd * cosA, cy + rEnd * sinA, angle, baseColor);
    }

    ctx.restore();
  }

  drawEscapingVortexArrow(ctx, arrow, numSectors, ease) {
    const { cx, cy } = this;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = arrow.color;
    ctx.shadowColor = arrow.color;
    ctx.shadowBlur = 14;
    ctx.lineWidth = 6;

    if (arrow.type === 'radial') {
      const angle = arrow.sector * (2 * Math.PI / numSectors);
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      const flyDist = ease * (Math.max(this.width, this.height) + 100);

      const rStart = this.getRadius(arrow.startRing) + flyDist;
      const rEnd = this.getRadius(arrow.headRing) + flyDist;

      ctx.beginPath();
      ctx.moveTo(cx + rStart * cosA, cy + rStart * sinA);
      ctx.lineTo(cx + rEnd * cosA, cy + rEnd * sinA);
      ctx.stroke();

      this.drawArrowHead(ctx, cx + rEnd * cosA, cy + rEnd * sinA, angle, arrow.color);
    } else {
      // Arc arrow: slides along tangent into space
      const rad = this.getRadius(arrow.ring);
      const angleStep = (2 * Math.PI) / numSectors;
      const headA = arrow.headSector * angleStep;
      const ccw = arrow.dir === 'CCW';
      const tangentA = headA + (ccw ? -Math.PI / 2 : Math.PI / 2);

      const hx = cx + rad * Math.cos(headA);
      const hy = cy + rad * Math.sin(headA);

      const flyDist = ease * (Math.max(this.width, this.height) + 120);
      const curX = hx + flyDist * Math.cos(tangentA);
      const curY = hy + flyDist * Math.sin(tangentA);

      const tailLen = 32;
      ctx.beginPath();
      ctx.moveTo(curX - tailLen * Math.cos(tangentA), curY - tailLen * Math.sin(tangentA));
      ctx.lineTo(curX, curY);
      ctx.stroke();

      this.drawArrowHead(ctx, curX, curY, tangentA, arrow.color);
    }

    ctx.restore();
  }

  drawArrowHead(ctx, x, y, angle, color) {
    const headLen = 14;
    const headWidth = 9;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, 0); // Tip
    ctx.lineTo(-headLen, -headWidth);
    ctx.lineTo(-headLen * 0.7, 0);
    ctx.lineTo(-headLen, headWidth);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
  }
}
