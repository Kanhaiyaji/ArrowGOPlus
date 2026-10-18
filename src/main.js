/**
 * Arrow GO+ - Main Game Controller (Neon Winding Arrow Edition)
 * Reverse-Engineered faithfully from com.arrowpuzzle.arrowgo Google Play game.
 */

import { PolylineArrowGrid } from './engine/snakeGrid.js';
import { PolylineArrowSolver } from './engine/snakeSolver.js';
import { PolylineArrowGenerator } from './engine/snakeGenerator.js';
import { VortexGrid, VortexSolver, VortexGenerator } from './engine/vortexGrid.js';
import { NeonMazeRenderer } from './ui/neonRenderer.js';
import { VortexRenderer } from './ui/vortexRenderer.js';
import { audio } from './engine/audio.js';
import { ParticleSystem } from './engine/particles.js';
import { ModalManager } from './ui/modals.js';
import { StorageManager } from './engine/storage.js';
import { NEON_LEVELS, buildNeonLevel } from './data/neonLevels.js';
import { ANIMATION } from './engine/constants.js';
import { auth } from './engine/auth.js';

class ArrowGoGame {
  constructor() {
    this.gameCanvas = document.getElementById('game-canvas');
    this.vfxCanvas = document.getElementById('vfx-canvas');
    this.modalContainer = document.getElementById('modal-container');

    // Engine instances
    this.renderer = new NeonMazeRenderer(this.gameCanvas);
    this.vortexRenderer = new VortexRenderer(this.gameCanvas);
    this.particles = new ParticleSystem(this.vfxCanvas);
    this.storage = StorageManager.load();
    this.auth = auth;

    // State
    this.mode = 'campaign'; // 'campaign' | 'endless' | 'vortex'
    this.currentLevelId = 1;
    this.endlessStage = 1;
    this.vortexStage = 1;
    this.grid = null;
    this.vortexGrid = null;
    this.levelDef = null;

    this.lives = 3;
    this.maxLives = 3;
    this.score = 0;
    this.moves = 0;
    this.combo = 0;
    this.lastClearTime = 0;
    this.startTime = 0;
    this.isLevelOver = false;

    this.undoStack = [];
    this.boosters = {
      hint: 2,
      undo: 3,
      skip: 1
    };

    this.modals = new ModalManager(this.modalContainer, {
      onNextLevel: () => this.nextLevel(),
      onRetry: () => this.restartLevel(),
      onShowLevels: () => this.showLevelSelect(),
      onRevive: () => this.reviveGame()
    });

    this.auth.onAuthStateChange(() => {
      this.updateHUD();
    });

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
    window.addEventListener('orientationchange', () => setTimeout(() => this.handleResize(), 150));

    // Dynamic resize observer on board container for mobile orientation/keyboard/folding
    const container = document.getElementById('board-container');
    if (container && window.ResizeObserver) {
      new ResizeObserver(() => this.handleResize()).observe(container);
    }

    // Load initial level
    this.loadCampaignLevel(this.currentLevelId);

    // Initial cloud sync
    this.initCloudSync();

    // Initialize luxury theme
    this.applyTheme(this.storage.currentTheme || 'dark');

    // Main animation loop
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  applyTheme(themeKey) {
    const validThemes = ['dark', 'obsidian', 'light', 'platinum', 'gold', 'emerald', 'sunset', 'cyber'];
    const chosen = validThemes.includes(themeKey) ? themeKey : 'dark';
    const normalized = (chosen === 'obsidian' || chosen === 'dark') ? 'dark' : ((chosen === 'platinum' || chosen === 'light') ? 'light' : chosen);

    document.body.className = `theme-${normalized}`;
    this.renderer?.setTheme(normalized);
    this.vortexRenderer?.setTheme(normalized);

    this.storage.currentTheme = chosen;
    StorageManager.save(this.storage);
  }

  handleResize() {
    const container = document.getElementById('board-container');
    const width = container?.clientWidth || window.innerWidth || 360;
    const height = container?.clientHeight || (window.innerHeight - 160) || 480;

    if (this.mode === 'vortex' && this.vortexGrid) {
      this.vortexRenderer.resize(width, height, this.vortexGrid.numRings);
    } else {
      const gw = this.grid ? this.grid.width : 8;
      const gh = this.grid ? this.grid.height : 8;
      this.renderer.resize(width, height, gw, gh);
    }
    this.particles.resize(width, height);
  }

  updateModeTabs() {
    document.querySelectorAll('.mode-tab-btn').forEach(btn => {
      const m = btn.getAttribute('data-mode');
      if (m === this.mode) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  loadCampaignLevel(levelId) {
    this.mode = 'campaign';
    this.currentLevelId = levelId;
    this.isLevelOver = false;
    this.undoStack = [];
    this.combo = 0;
    this.moves = 0;
    this.score = 0;
    this.startTime = Date.now();

    this.renderer.resetAnimations();
    this.particles.clear();

    const data = buildNeonLevel(levelId);
    this.grid = data.grid;
    this.vortexGrid = null;
    this.levelDef = data.definition;

    this.maxLives = this.storage.zenMode ? Infinity : 3;
    this.lives = this.maxLives;

    // Beginner tutorial toast on level 1
    const toast = document.getElementById('tutorial-toast');
    if (levelId === 1) {
      toast?.classList.remove('hidden');
      setTimeout(() => {
        if (this.currentLevelId === 1 && this.moves === 0) {
          const hint = PolylineArrowSolver.getHint(this.grid);
          if (hint) hint.state = 'hinted';
        }
      }, 500);
    } else {
      toast?.classList.add('hidden');
    }

    this.updateHUD();
    this.updateModeTabs();
    this.handleResize();
  }

  loadEndlessLevel(stage = 1) {
    this.mode = 'endless';
    this.endlessStage = stage;
    this.isLevelOver = false;
    this.undoStack = [];
    this.combo = 0;
    this.moves = 0;
    this.score = 0;
    this.startTime = Date.now();

    this.renderer.resetAnimations();
    this.particles.clear();

    const gw = Math.min(11, 5 + Math.floor(stage / 2));
    const gh = Math.min(11, 5 + Math.floor((stage + 1) / 2));
    const arrowCount = Math.min(24, 4 + stage * 2);

    // Occasional circular maze in endless for fun
    const isEndlessCircular = stage % 4 === 0;
    const data = PolylineArrowGenerator.generate(gw, gh, arrowCount, isEndlessCircular);
    this.grid = data.grid;
    this.vortexGrid = null;
    this.levelDef = {
      name: isEndlessCircular ? `Endless Vortex ${stage}` : `Endless Stage ${stage}`,
      difficulty: stage <= 2 ? "NOVICE" : (stage <= 5 ? "APPRENTICE" : (stage <= 8 ? "INTERMEDIATE" : (stage <= 12 ? "EXPERT" : "MASTER"))),
      arrows: Array.from(data.grid.arrows.values())
    };

    this.maxLives = this.storage.zenMode ? Infinity : 3;
    this.lives = this.maxLives;

    this.updateHUD();
    this.updateModeTabs();
    this.handleResize();
  }

  loadVortexLevel(stage = 1) {
    this.mode = 'vortex';
    this.vortexStage = stage;
    this.isLevelOver = false;
    this.undoStack = [];
    this.combo = 0;
    this.moves = 0;
    this.score = 0;
    this.startTime = Date.now();

    this.vortexRenderer.resetAnimations();
    this.particles.clear();

    const numRings = Math.min(5, 3 + Math.floor((stage - 1) / 3));
    const numSectors = stage <= 2 ? 12 : 16;
    const arrowCount = Math.min(20, 6 + stage * 2);

    const data = VortexGenerator.generate(numRings, numSectors, arrowCount);
    this.vortexGrid = data.grid;
    this.grid = null;
    this.levelDef = {
      name: `Vortex Ring ${stage}`,
      difficulty: stage <= 2 ? "NOVICE" : (stage <= 4 ? "INTERMEDIATE" : (stage <= 7 ? "EXPERT" : "VORTEX MASTER")),
      arrows: Array.from(data.grid.arrows.values())
    };

    this.maxLives = this.storage.zenMode ? Infinity : 3;
    this.lives = this.maxLives;

    this.updateHUD();
    this.updateModeTabs();
    this.handleResize();
  }

  setupEventListeners() {
    // Touch & Pointer Down
    this.gameCanvas.addEventListener('pointerdown', (e) => this.handlePointerDown(e));

    // Top Header Navigation Buttons
    document.getElementById('nav-back')?.addEventListener('click', () => this.showLevelSelect());
    document.getElementById('nav-levels')?.addEventListener('click', () => this.showLevelSelect());
    document.getElementById('nav-endless')?.addEventListener('click', () => this.loadEndlessLevel());
    document.getElementById('nav-profile')?.addEventListener('click', () => this.showUserProfile());
    document.getElementById('nav-settings')?.addEventListener('click', () => this.showSettings());
    document.getElementById('nav-shop')?.addEventListener('click', () => this.showShop());
    document.getElementById('btn-open-shop')?.addEventListener('click', () => this.showShop());
    document.getElementById('nav-help')?.addEventListener('click', () => this.modals.showHowToPlay());
    document.getElementById('btn-restart')?.addEventListener('click', () => this.restartLevel());

    // Mode Selector Tab Buttons
    document.querySelectorAll('.mode-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetMode = btn.getAttribute('data-mode');
        if (targetMode === 'vortex') {
          this.loadVortexLevel(this.vortexStage || 1);
        } else if (targetMode === 'endless') {
          this.loadEndlessLevel(this.endlessStage || 1);
        } else {
          this.loadCampaignLevel(this.currentLevelId || 1);
        }
      });
    });

    // Bottom Booster Dock Buttons (Faithful to Screenshots: Undo, Hint, Auto/Skip)
    document.getElementById('booster-hint')?.addEventListener('click', () => this.useHint());
    document.getElementById('booster-undo')?.addEventListener('click', () => this.useUndo());
    document.getElementById('booster-bomb')?.addEventListener('click', () => this.autoSolveLevel()); // Green Solve/Skip
    document.getElementById('booster-rotate')?.addEventListener('click', () => this.useHint());

    // Audio unlock
    const unlockAudio = () => {
      audio.init();
      audio.resume();
      window.removeEventListener('pointerdown', unlockAudio);
    };
    window.addEventListener('pointerdown', unlockAudio);
  }

  triggerHaptic(type) {
    if ('vibrate' in navigator) {
      try {
        if (type === 'tap') navigator.vibrate(12);
        else if (type === 'bump') navigator.vibrate([40, 25, 40]);
        else if (type === 'victory') navigator.vibrate([50, 40, 100]);
      } catch (e) {}
    }
  }

  handlePointerDown(e) {
    if (this.isLevelOver) return;

    const rect = this.gameCanvas.getBoundingClientRect();
    const screenX = e.clientX - rect.left;
    const screenY = e.clientY - rect.top;

    if (this.mode === 'vortex') {
      if (!this.vortexGrid) return;
      const arrow = this.vortexRenderer.hitTest(screenX, screenY, this.vortexGrid);
      if (!arrow) return;

      this.moves++;
      document.getElementById('tutorial-toast')?.classList.add('hidden');

      const check = this.vortexGrid.checkPathClear(arrow);
      if (check.clear) {
        this.triggerHaptic('tap');
        arrow.state = 'escaping';
        this.vortexRenderer.triggerEscape(arrow, () => {
          this.vortexGrid.removeArrow(arrow.id);
          this.checkLevelComplete();
        });

        const now = performance.now();
        if (now - this.lastClearTime < ANIMATION.COMBO_TIMEOUT_MS) {
          this.combo++;
        } else {
          this.combo = 1;
        }
        this.lastClearTime = now;

        audio.playArrowEscape(this.combo);
        this.particles.spawnEscapeBurst(screenX, screenY, arrow.color || '#00F0FF');

        const points = 100 * this.combo;
        this.score += points;
        this.particles.spawnFloatingText(
          screenX,
          screenY - 12,
          this.combo > 1 ? `+${points} x${this.combo}!` : `+${points}`,
          this.combo > 2 ? '#FBBF24' : '#00F0FF',
          this.combo > 2 ? 18 : 15
        );

        this.updateHUD();
        this.checkLevelComplete();
      } else {
        this.triggerHaptic('bump');
        this.combo = 0;
        this.vortexRenderer.triggerBlocked(arrow);
        audio.playArrowBump();
        this.particles.spawnBumpSparks(screenX, screenY, 0, 1);

        if (!this.storage.zenMode) {
          this.lives--;
          audio.playHeartLost();
          this.updateHUD();
          if (this.lives <= 0) {
            this.triggerGameOver();
          }
        }
      }
      return;
    }

    if (!this.grid) return;
    const coords = this.renderer.screenToGrid(screenX, screenY);
    const arrow = this.grid.hitTest(coords.x, coords.y, 0.65);

    if (!arrow) return;

    this.moves++;
    document.getElementById('tutorial-toast')?.classList.add('hidden');

    const check = this.grid.checkPathClear(arrow);

    if (check.clear) {
      // CLEAR: Arrow slithers out!
      this.triggerHaptic('tap');
      this.saveUndoState();

      arrow.state = 'escaping';
      this.renderer.triggerEscape(arrow, () => {
        this.grid.removeArrow(arrow.id);
        this.checkLevelComplete();
      });

      // Combo management
      const now = performance.now();
      if (now - this.lastClearTime < ANIMATION.COMBO_TIMEOUT_MS) {
        this.combo++;
      } else {
        this.combo = 1;
      }
      this.lastClearTime = now;

      audio.playArrowEscape(this.combo);
      this.particles.spawnEscapeBurst(screenX, screenY, '#00F0FF');

      const points = 100 * this.combo;
      this.score += points;
      this.particles.spawnFloatingText(
        screenX,
        screenY - 12,
        this.combo > 1 ? `+${points} x${this.combo}!` : `+${points}`,
        this.combo > 2 ? '#FBBF24' : '#00F0FF',
        this.combo > 2 ? 18 : 15
      );

      this.updateHUD();
      this.checkLevelComplete();
    } else {
      // BLOCKED: Glows Crimson Red and Shakes!
      this.triggerHaptic('bump');
      this.combo = 0;
      this.renderer.triggerBlocked(arrow);
      audio.playArrowBump();

      this.particles.spawnBumpSparks(screenX, screenY, 0, 1);

      if (!this.storage.zenMode) {
        this.lives--;
        audio.playHeartLost();
        this.updateHUD();

        if (this.lives <= 0) {
          this.triggerGameOver();
        }
      }
    }
  }

  saveUndoState() {
    if (this.undoStack.length > 20) this.undoStack.shift();
    this.undoStack.push(this.grid.serialize());
  }

  useUndo() {
    if (this.undoStack.length === 0 || this.isLevelOver) return;
    if ((this.storage.boosters?.undo ?? 0) <= 0) {
      this.showShop();
      return;
    }
    this.storage.boosters.undo--;
    StorageManager.save(this.storage);

    audio.playBoosterUse();
    const prev = this.undoStack.pop();
    this.grid = PolylineArrowGrid.deserialize(prev);
    this.renderer.resetAnimations();
    this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, 'UNDO', '#38BDF8');
    this.updateHUD();
  }

  useHint() {
    if (this.isLevelOver) return;
    if ((this.storage.boosters?.hint ?? 0) <= 0) {
      this.showShop();
      return;
    }
    const hint = this.mode === 'vortex'
      ? VortexSolver.getHint(this.vortexGrid)
      : PolylineArrowSolver.getHint(this.grid);

    if (hint) {
      this.storage.boosters.hint--;
      StorageManager.save(this.storage);
      audio.playBoosterUse();
      hint.state = 'hinted';
      this.updateHUD();
      setTimeout(() => {
        if (hint.state === 'hinted') hint.state = 'idle';
      }, 2500);
    } else {
      alert("No moves available! The board is currently locked.");
    }
  }

  autoSolveLevel() {
    if (this.isLevelOver) return;
    if ((this.storage.boosters?.skip ?? 0) <= 0) {
      this.showShop();
      return;
    }

    if (this.mode === 'vortex') {
      const sol = VortexSolver.solve(this.vortexGrid);
      if (!sol.solvable) {
        alert("Cannot auto-solve: deadlock detected!");
        return;
      }
      this.storage.boosters.skip--;
      StorageManager.save(this.storage);
      this.updateHUD();

      let step = 0;
      const timer = setInterval(() => {
        if (step >= sol.moves.length || this.isLevelOver) {
          clearInterval(timer);
          return;
        }
        const arrowId = sol.moves[step];
        const arrow = this.vortexGrid.arrows.get(arrowId);
        if (arrow && !arrow.isRemoved) {
          arrow.state = 'escaping';
          this.vortexRenderer.triggerEscape(arrow, () => {
            this.vortexGrid.removeArrow(arrow.id);
            this.checkLevelComplete();
          });
          audio.playArrowEscape(step % 8);
          this.updateHUD();
        }
        step++;
      }, 280);
      return;
    }

    const sol = PolylineArrowSolver.solve(this.grid);
    if (!sol.solvable) {
      alert("Cannot auto-solve: deadlock detected!");
      return;
    }

    this.storage.boosters.skip--;
    StorageManager.save(this.storage);
    this.updateHUD();

    let step = 0;
    const timer = setInterval(() => {
      if (step >= sol.moves.length || this.isLevelOver) {
        clearInterval(timer);
        return;
      }
      const arrowId = sol.moves[step];
      const arrow = this.grid.arrows.get(arrowId);
      if (arrow && !arrow.isRemoved) {
        const tip = this.renderer.gridToScreen(arrow.head.x, arrow.head.y);
        arrow.state = 'escaping';
        this.renderer.triggerEscape(arrow, () => {
          this.grid.removeArrow(arrow.id);
          this.checkLevelComplete();
        });
        audio.playArrowEscape(step % 8);
        this.particles.spawnEscapeBurst(tip.x, tip.y, '#00F0FF');
        this.updateHUD();
      }
      step++;
    }, 280);
  }

  checkLevelComplete() {
    const activeGrid = this.mode === 'vortex' ? this.vortexGrid : this.grid;
    if (activeGrid && activeGrid.getActiveCount() === 0 && !this.isLevelOver) {
      this.isLevelOver = true;
      audio.playLevelComplete();
      this.triggerHaptic('victory');

      const timeSec = Math.floor((Date.now() - this.startTime) / 1000);
      const width = this.vfxCanvas.width / window.devicePixelRatio;
      const height = this.vfxCanvas.height / window.devicePixelRatio;
      this.particles.spawnConfetti(width, height);

      let stars = 3;
      if (this.lives < this.maxLives) stars = 2;
      if (this.lives <= 1) stars = 1;

      if (this.mode === 'campaign') {
        StorageManager.recordLevelComplete(this.currentLevelId, stars, this.score, timeSec);
      }

      // Auto backup level progress to cloud
      this.syncToCloud(false);

      setTimeout(() => {
        const cat = this.mode === 'campaign'
          ? (this.levelDef?.category || (this.currentLevelId <= 36 ? 'Beginner' : (this.currentLevelId <= 72 ? 'Intermediate' : 'Trained')))
          : null;
        this.modals.showLevelComplete({
          levelName: this.levelDef.name,
          levelId: this.mode === 'campaign' ? this.currentLevelId : (this.mode === 'vortex' ? this.vortexStage : this.endlessStage),
          stars,
          score: this.score,
          moves: this.moves,
          timeSec,
          isLastLevel: this.mode === 'campaign' ? this.currentLevelId >= NEON_LEVELS.length : false,
          category: cat
        });
      }, 600);
    }
  }

  triggerGameOver() {
    this.isLevelOver = true;
    setTimeout(() => {
      this.modals.showGameOver({
        levelName: this.levelDef.name,
        onRevive: () => this.reviveGame(),
        onRetry: () => this.restartLevel()
      });
    }, 400);
  }

  reviveGame() {
    this.isLevelOver = false;
    this.lives = 2;
    this.updateHUD();
  }

  restartLevel() {
    if (this.mode === 'vortex') {
      this.loadVortexLevel(this.vortexStage || 1);
    } else if (this.mode === 'endless') {
      this.loadEndlessLevel(this.endlessStage || 1);
    } else {
      this.loadCampaignLevel(this.currentLevelId);
    }
  }

  nextLevel() {
    if (this.mode === 'vortex') {
      this.loadVortexLevel((this.vortexStage || 1) + 1);
      return;
    }
    if (this.mode === 'endless') {
      this.loadEndlessLevel((this.endlessStage || 1) + 1);
      return;
    }
    const nextId = this.currentLevelId + 1;
    if (nextId <= NEON_LEVELS.length) {
      this.loadCampaignLevel(nextId);
    } else {
      this.loadVortexLevel(1);
    }
  }

  showLevelSelect() {
    const save = StorageManager.load();
    let initialCat = 'beginner';
    if (this.currentLevelId > 72) initialCat = 'trained';
    else if (this.currentLevelId > 36) initialCat = 'intermediate';

    this.modals.showLevelSelect(
      NEON_LEVELS,
      save.unlockedLevel || 1,
      save.levelScores || {},
      (id) => this.loadCampaignLevel(id),
      initialCat
    );
  }

  async showUserProfile() {
    const profile = this.auth.getProfile();
    const save = StorageManager.load();
    save.endlessStage = this.endlessStage || 1;
    save.vortexStage = this.vortexStage || 1;

    this.modals.showUserProfile(profile, save, {
      onGoogleLogin: async () => {
        try {
          const res = await this.auth.signInWithGoogle();
          if (res?.user) {
            this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, `${res.user.displayName} Connected! 🌐`, '#00F0FF', 22);
            audio.playLevelComplete();
            await this.syncToCloud(false);
            this.updateHUD();
            this.showUserProfile();
            return;
          }
          if (res?.cancelled) {
            // User dismissed native account picker
            return;
          }
        } catch (e) {
          console.warn('Google Sign-In notice:', e);
        }
      },
      onPhoneLogin: () => {
        this.modals.showPhoneLoginModal({
          onSendOtp: async (phone) => {
            return await this.auth.signInWithPhone(phone);
          },
          onVerifyOtp: async (phone, otp) => {
            const res = await this.auth.verifyPhoneOtp(phone, otp);
            this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, 'Phone Verified! 📱', '#00FF9D', 22);
            audio.playLevelComplete();
            await this.syncToCloud(false);
            this.updateHUD();
            this.showUserProfile();
            return res;
          }
        });
      },
      onEditProfile: () => {
        this.modals.showEditProfileModal(this.auth.getProfile(), (updated) => {
          this.auth.updateGamerProfile(updated);
          this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, 'Profile Updated! ✏️', '#FBBF24', 20);
          this.updateHUD();
          this.showUserProfile();
        });
      },
      onOpenSupabaseConfig: () => {
        this.modals.showSupabaseConfigModal(
          { url: this.auth.supabaseUrl, key: this.auth.supabaseAnonKey },
          (url, key) => {
            this.auth.saveConfig(url, key);
            this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, 'Cloud Config Saved! ⚙️', '#00F0FF', 20);
            this.showUserProfile();
          },
          async (url, key) => {
            return await this.auth.testSupabaseConnection(url, key);
          }
        );
      },
      onSignOut: async () => {
        await this.auth.signOut();
        this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, 'Signed Out 👋', '#94A3B8', 20);
        this.updateHUD();
        this.showUserProfile();
      },
      onSyncCloud: async () => {
        await this.syncToCloud(true);
      }
    });
  }

  async syncToCloud(showToast = false) {
    const currentSave = StorageManager.load();
    currentSave.endlessStage = this.endlessStage || 1;
    currentSave.vortexStage = this.vortexStage || 1;

    const res = await this.auth.syncSaveToCloud(currentSave);
    if (showToast) {
      this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, '☁️ Progress Synced!', '#00FF66', 22);
      this.showUserProfile();
    }
    return res;
  }

  async initCloudSync() {
    try {
      const currentSave = StorageManager.load();
      const { merged, cloudFound } = await this.auth.fetchCloudSave(currentSave);
      if (cloudFound) {
        StorageManager.save(merged);
        this.storage = merged;
        if (this.mode === 'campaign') {
          this.currentLevelId = Math.min(NEON_LEVELS.length, merged.unlockedLevel || 1);
        }
        this.updateHUD();
      }
    } catch (e) {
      console.warn('Initial cloud sync notice:', e);
    }
  }

  showSettings() {
    const save = StorageManager.load();
    this.modals.showSettings(save, (updated) => {
      if (updated.soundEnabled !== undefined) {
        save.soundEnabled = updated.soundEnabled;
        if (!save.soundEnabled && !audio.isMuted) audio.toggleMute();
        if (save.soundEnabled && audio.isMuted) audio.toggleMute();
      }
      if (updated.musicEnabled !== undefined) {
        save.musicEnabled = updated.musicEnabled;
        if (!save.musicEnabled && audio.musicEnabled) audio.toggleMusic();
        if (save.musicEnabled && !audio.musicEnabled) audio.toggleMusic();
      }
      if (updated.zenMode !== undefined) {
        save.zenMode = updated.zenMode;
        this.maxLives = save.zenMode ? Infinity : 3;
        this.lives = this.maxLives;
        this.updateHUD();
      }
      if (updated.currentTheme) {
        this.applyTheme(updated.currentTheme);
        save.currentTheme = updated.currentTheme;
      }
      StorageManager.save(save);
    });
  }

  showShop() {
    this.modals.showShop(this.storage.coins || 150, (type, cost) => {
      if (type === 'bonus') {
        this.storage.coins = (this.storage.coins || 150) + 100;
        StorageManager.save(this.storage);
        this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, '+100 🪙', '#FBBF24', 22);
        this.updateHUD();
        this.modals.showShop(this.storage.coins, (t, c) => this.showShop());
        return;
      }
      if ((this.storage.coins || 0) >= cost) {
        this.storage.coins -= cost;
        if (!this.storage.boosters) this.storage.boosters = { hint: 2, undo: 3, skip: 1 };
        this.storage.boosters[type] = (this.storage.boosters[type] || 0) + (type === 'undo' ? 3 : 1);
        StorageManager.save(this.storage);
        audio.playBoosterUse();
        this.particles.spawnFloatingText(this.renderer.width / 2, this.renderer.height / 2, `+${type.toUpperCase()}`, '#38BDF8', 20);
        this.updateHUD();
        this.modals.showShop(this.storage.coins, (t, c) => this.showShop());
      } else {
        alert("Not enough coins! Earn more coins by clearing levels or claiming the daily bonus.");
      }
    });
  }

  updateHUD() {
    const titleEl = document.getElementById('hud-level-title');
    const topMetaEl = document.getElementById('hud-top-meta');
    const diffBadgeEl = document.getElementById('hud-diff-badge');

    const diff = this.levelDef?.difficulty || 'novice';
    const diffClass = diff.toLowerCase().replace(/\s+/g, '-');

    if (diffBadgeEl) {
      diffBadgeEl.textContent = diff.toUpperCase();
      diffBadgeEl.className = `diff-badge ${diffClass}`;
    }

    if (this.mode === 'campaign') {
      const cat = this.levelDef?.category || (this.currentLevelId <= 36 ? 'Beginner' : (this.currentLevelId <= 72 ? 'Intermediate' : 'Trained'));
      const catIcon = cat === 'Beginner' ? '🔰' : (cat === 'Intermediate' ? '⚡' : '👑');
      if (topMetaEl) {
        topMetaEl.innerHTML = `<span class="hud-cat-pill ${cat.toLowerCase()}">${catIcon} ${cat}</span> <span class="hud-lvl-name">${this.levelDef?.name || ''}</span>`;
      }
      if (titleEl) {
        titleEl.textContent = `Level ${this.currentLevelId}`;
      }
    } else if (this.mode === 'vortex') {
      if (topMetaEl) {
        topMetaEl.innerHTML = `<span class="hud-cat-pill vortex">⭕ Vortex Mode</span>`;
      }
      if (titleEl) {
        titleEl.textContent = `Ring ${this.vortexStage}`;
      }
    } else {
      if (topMetaEl) {
        topMetaEl.innerHTML = `<span class="hud-cat-pill endless">♾️ Endless Mode</span>`;
      }
      if (titleEl) {
        titleEl.textContent = `Stage ${this.endlessStage}`;
      }
    }

    const heartsEl = document.getElementById('hud-hearts');
    if (heartsEl) {
      if (this.storage.zenMode || this.lives === Infinity) {
        heartsEl.innerHTML = '<span class="zen-badge">ZEN MODE ♾️</span>';
      } else {
        let html = '';
        for (let i = 0; i < this.maxLives; i++) {
          html += i < this.lives ? '<span class="heart active">❤️</span>' : '<span class="heart lost">🖤</span>';
        }
        heartsEl.innerHTML = html;
      }
    }

    const scoreEl = document.getElementById('hud-score');
    if (scoreEl) scoreEl.textContent = this.score;

    const activeGrid = this.mode === 'vortex' ? this.vortexGrid : this.grid;

    const remainingEl = document.getElementById('hud-remaining');
    if (remainingEl && activeGrid) {
      remainingEl.textContent = activeGrid.getActiveCount();
    }

    const coinsEl = document.getElementById('hud-coins');
    if (coinsEl) coinsEl.textContent = this.storage.coins || 150;

    const progressFill = document.getElementById('hud-progress-fill');
    if (progressFill && activeGrid && this.levelDef) {
      const total = this.levelDef.arrows.length;
      const active = activeGrid.getActiveCount();
      const cleared = Math.max(0, total - active);
      const pct = total > 0 ? Math.round((cleared / total) * 100) : 0;
      progressFill.style.width = `${pct}%`;
    }

    const hintBadge = document.querySelector('#booster-hint .badge-count');
    if (hintBadge) hintBadge.textContent = this.storage.boosters?.hint ?? 2;

    const undoBadge = document.querySelector('#booster-undo .badge-count');
    if (undoBadge) undoBadge.textContent = this.storage.boosters?.undo ?? 3;

    const skipBadge = document.querySelector('#booster-bomb .badge-count');
    if (skipBadge) skipBadge.textContent = this.storage.boosters?.skip ?? 1;

    const avatarEl = document.getElementById('hud-profile-avatar');
    if (avatarEl) {
      const p = this.auth?.getProfile();
      avatarEl.textContent = p?.avatar || '👤';
    }
  }

  gameLoop(now) {
    if (this.mode === 'vortex' && this.vortexGrid) {
      this.vortexRenderer.render(this.vortexGrid, now);
      this.particles.updateAndRender(0.016);
    } else if (this.grid) {
      this.renderer.render(this.grid, now);
      this.particles.updateAndRender(0.016);
    }
    requestAnimationFrame((t) => this.gameLoop(t));
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new ArrowGoGame();
});
