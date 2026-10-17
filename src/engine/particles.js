/**
 * Arrow GO+ - Particle & Visual FX System
 * High performance HTML5 Canvas particle renderer for trails, bursts, score popups, and victory confetti.
 */

export class ParticleSystem {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.floatingTexts = [];
    this.confetti = [];
  }

  resize(width, height) {
    const w = Math.max(280, width || 360);
    const h = Math.max(300, height || 480);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.floor(w * dpr);
    this.canvas.height = Math.floor(h * dpr);
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.scale(dpr, dpr);
  }

  clear() {
    this.particles = [];
    this.floatingTexts = [];
    this.confetti = [];
  }

  /**
   * Spawn spark burst when arrow escapes
   */
  spawnEscapeBurst(x, y, color = '#38BDF8') {
    const count = 16;
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 2 + Math.random() * 4;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.random() * 3,
        color,
        alpha: 1,
        life: 1,
        decay: 0.035 + Math.random() * 0.02
      });
    }
  }

  /**
   * Spawn small red spark when arrow bumps blocker
   */
  spawnBumpSparks(x, y, dx, dy) {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const angle = Math.atan2(dy, dx) + Math.PI + (Math.random() - 0.5) * 1.2;
      const speed = 1.5 + Math.random() * 3;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 2.5 + Math.random() * 2,
        color: '#EF4444',
        alpha: 1,
        life: 1,
        decay: 0.05 + Math.random() * 0.03
      });
    }
  }

  /**
   * Floating animated text (e.g., "+100 COMBO x3")
   */
  spawnFloatingText(x, y, text, color = '#38BDF8', size = 16) {
    this.floatingTexts.push({
      x,
      y,
      vy: -1.8,
      text,
      color,
      size,
      alpha: 1,
      life: 1,
      decay: 0.025
    });
  }

  /**
   * Victory confetti explosion
   */
  spawnConfetti(width, height) {
    const colors = ['#38BDF8', '#F472B6', '#FBBF24', '#34D399', '#A855F7', '#FB7185'];
    const count = 120;

    for (let i = 0; i < count; i++) {
      this.confetti.push({
        x: Math.random() * width,
        y: -20 - Math.random() * 60,
        vx: (Math.random() - 0.5) * 4,
        vy: 2 + Math.random() * 5,
        w: 6 + Math.random() * 6,
        h: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 10,
        alpha: 1,
        life: 1,
        decay: 0.008 + Math.random() * 0.006
      });
    }
  }

  /**
   * Update and render all active VFX elements
   */
  updateAndRender(dt) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // 1. Update and render particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      p.alpha = Math.max(0, p.life);

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // 2. Update and render floating score texts
    for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
      const t = this.floatingTexts[i];
      t.y += t.vy;
      t.life -= t.decay;
      t.alpha = Math.max(0, t.life);

      if (t.life <= 0) {
        this.floatingTexts.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = t.alpha;
      ctx.fillStyle = t.color;
      ctx.font = `bold ${t.size}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
      ctx.textAlign = 'center';
      ctx.shadowColor = 'rgba(0,0,0,0.4)';
      ctx.shadowBlur = 6;
      ctx.fillText(t.text, t.x, t.y);
      ctx.restore();
    }

    // 3. Update and render confetti
    for (let i = this.confetti.length - 1; i >= 0; i--) {
      const c = this.confetti[i];
      c.x += c.vx;
      c.y += c.vy;
      c.rotation += c.rotSpeed;
      c.life -= c.decay;
      c.alpha = Math.max(0, c.life);

      if (c.life <= 0 || c.y > this.canvas.height / window.devicePixelRatio + 50) {
        this.confetti.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = c.alpha;
      ctx.translate(c.x, c.y);
      ctx.rotate((c.rotation * Math.PI) / 180);
      ctx.fillStyle = c.color;
      ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
      ctx.restore();
    }
  }
}
