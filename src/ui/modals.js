/**
 * Arrow GO+ - Modals, Dialogs, and Overlays
 */

export class ModalManager {
  constructor(containerEl, callbacks) {
    this.container = containerEl;
    this.callbacks = callbacks; // onNextLevel, onRetry, onSelectLevel, onSaveSettings, onRevive
  }

  showLevelComplete({ levelName, levelId, stars, score, moves, timeSec, isLastLevel, category }) {
    const starHtml = [1, 2, 3].map(num => `
      <div class="star-icon ${num <= stars ? 'filled' : 'empty'}">
        <svg viewBox="0 0 24 24" width="36" height="36" fill="currentColor">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </div>
    `).join('');

    let milestoneBanner = '';
    if (levelId === 36) {
      milestoneBanner = `
        <div class="milestone-banner beginner">
          <span>🎉 BEGINNER TIER COMPLETED!</span>
          <p>⚡ Intermediate Tier is now unlocked!</p>
        </div>
      `;
    } else if (levelId === 72) {
      milestoneBanner = `
        <div class="milestone-banner intermediate">
          <span>⚡ INTERMEDIATE TIER COMPLETED!</span>
          <p>👑 Trained Tier is now unlocked!</p>
        </div>
      `;
    } else if (levelId === 108) {
      milestoneBanner = `
        <div class="milestone-banner grandmaster">
          <span>👑 GRANDMASTER CHAMPION!</span>
          <p>You have conquered all 108 levels of Arrow GO+!</p>
        </div>
      `;
    }

    const catBadge = category ? `<span class="level-cat-pill ${category.toLowerCase()}">${category}</span>` : '';

    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card bounce-in">
          <div class="modal-header">
            ${catBadge}
            <h2 class="victory-title">LEVEL ${levelId} CLEARED!</h2>
            <p class="victory-subtitle">${levelName}</p>
          </div>
          ${milestoneBanner}
          <div class="stars-row">
            ${starHtml}
          </div>
          <div class="stats-grid">
            <div class="stat-box">
              <span class="stat-label">SCORE</span>
              <span class="stat-value highlight">${score}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">MOVES</span>
              <span class="stat-value">${moves}</span>
            </div>
            <div class="stat-box">
              <span class="stat-label">TIME</span>
              <span class="stat-value">${timeSec}s</span>
            </div>
          </div>
          <div class="modal-actions">
            <button class="btn btn-secondary" id="btn-replay">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
              Replay
            </button>
            <button class="btn btn-secondary" id="btn-levels">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
              </svg>
              Levels
            </button>
            ${!isLastLevel ? `
              <button class="btn btn-primary" id="btn-next">
                Next Level
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/>
                </svg>
              </button>
            ` : `
              <button class="btn btn-primary" id="btn-next">
                Endless Mode
              </button>
            `}
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-replay')?.addEventListener('click', () => {
      this.close();
      this.callbacks.onRetry();
    });
    document.getElementById('btn-levels')?.addEventListener('click', () => {
      this.close();
      this.callbacks.onShowLevels();
    });
    document.getElementById('btn-next')?.addEventListener('click', () => {
      this.close();
      this.callbacks.onNextLevel();
    });
  }

  showGameOver({ levelName, onRevive, onRetry }) {
    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card bounce-in">
          <div class="modal-header">
            <h2 class="gameover-title">OUT OF HEARTS!</h2>
            <p class="gameover-subtitle">Carefully check the arrow's exit path before tapping.</p>
          </div>
          <div class="gameover-icon">
            💔
          </div>
          <div class="modal-actions vertical">
            <button class="btn btn-primary" id="btn-revive">
              Revive (+2 Hearts)
            </button>
            <button class="btn btn-secondary" id="btn-retry">
              Retry Level
            </button>
            <button class="btn btn-ghost" id="btn-quit">
              Quit to Menu
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-revive')?.addEventListener('click', () => {
      this.close();
      onRevive();
    });
    document.getElementById('btn-retry')?.addEventListener('click', () => {
      this.close();
      onRetry();
    });
    document.getElementById('btn-quit')?.addEventListener('click', () => {
      this.close();
      this.callbacks.onShowLevels();
    });
  }

  showLevelSelect(levels, unlockedLevel, levelScores, onSelectLevel, initialCat = null) {
    const categories = [
      { id: 'beginner', name: 'Beginner', badge: '🔰 Beginner', range: [1, 36], desc: 'Levels 1 - 36' },
      { id: 'intermediate', name: 'Intermediate', badge: '⚡ Intermediate', range: [37, 72], desc: 'Levels 37 - 72' },
      { id: 'trained', name: 'Trained', badge: '👑 Trained', range: [73, 108], desc: 'Levels 73 - 108' }
    ];

    let activeCat = initialCat;
    if (!activeCat) {
      if (unlockedLevel <= 36) activeCat = 'beginner';
      else if (unlockedLevel <= 72) activeCat = 'intermediate';
      else activeCat = 'trained';
    }

    const render = () => {
      const catStats = {};
      categories.forEach(cat => {
        const catLevels = levels.filter(l => l.id >= cat.range[0] && l.id <= cat.range[1]);
        const stars = catLevels.reduce((sum, l) => sum + (levelScores[l.id]?.stars || 0), 0);
        const unlockedInCat = catLevels.filter(l => l.id <= unlockedLevel).length;
        catStats[cat.id] = { stars, unlockedInCat, total: catLevels.length };
      });

      const currentCatObj = categories.find(c => c.id === activeCat) || categories[0];
      const filteredLevels = levels.filter(l => l.id >= currentCatObj.range[0] && l.id <= currentCatObj.range[1]);

      const tabsHtml = categories.map(cat => {
        const stats = catStats[cat.id];
        const isLocked = cat.range[0] > unlockedLevel;
        return `
          <button class="cat-tab-btn ${cat.id === activeCat ? 'active' : ''} ${isLocked ? 'locked-tab' : ''}" data-cat="${cat.id}">
            <div class="cat-tab-title">${cat.badge}</div>
            <div class="cat-tab-meta">
              <span>Lv ${cat.range[0]}-${cat.range[1]}</span>
              <span class="cat-star-count">${stats.stars}/108 ★</span>
            </div>
          </button>
        `;
      }).join('');

      const cardsHtml = filteredLevels.map(lvl => {
        const isLocked = lvl.id > unlockedLevel;
        const scoreData = levelScores[lvl.id] || { stars: 0, score: 0 };
        const starIcons = [1, 2, 3].map(n => `
          <span class="mini-star ${n <= scoreData.stars ? 'active' : ''}">★</span>
        `).join('');

        return `
          <div class="level-card cat-${activeCat} ${isLocked ? 'locked' : ''}" data-level-id="${lvl.id}">
            <div class="level-card-number">#${lvl.id}</div>
            <div class="level-card-name">${lvl.name}</div>
            <div class="level-card-diff ${lvl.difficulty.toLowerCase().replace(' ', '-')}">
              ${lvl.isCircular ? '⭕ RADAR • ' : ''}${lvl.difficulty} • ${lvl.arrows.length} 🏹
            </div>
            <div class="level-card-stars">
              ${isLocked ? '🔒' : starIcons}
            </div>
          </div>
        `;
      }).join('');

      const curStats = catStats[activeCat];

      this.container.innerHTML = `
        <div class="modal-backdrop fade-in">
          <div class="modal-card wide bounce-in level-select-modal">
            <div class="modal-header with-close">
              <div class="title-with-pill">
                <h2>SELECT LEVEL</h2>
                <span class="total-progress-pill">${Math.min(108, unlockedLevel)} / 108 Unlocked</span>
              </div>
              <button class="close-btn" id="modal-close">&times;</button>
            </div>

            <!-- 3 Category Tabs -->
            <div class="cat-tabs-row">
              ${tabsHtml}
            </div>

            <!-- Category Status Info Bar -->
            <div class="cat-status-banner cat-${activeCat}">
              <div class="cat-banner-left">
                <strong>${currentCatObj.name} Tier</strong>
                <span>${curStats.unlockedInCat} / ${curStats.total} Levels Unlocked</span>
              </div>
              <div class="cat-banner-right">
                <span class="cat-banner-stars">★ ${curStats.stars} / 108 Stars</span>
              </div>
            </div>

            <div class="level-grid-scroll">
              <div class="level-grid">
                ${cardsHtml}
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('modal-close')?.addEventListener('click', () => this.close());

      this.container.querySelectorAll('.cat-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          activeCat = btn.getAttribute('data-cat');
          render();
        });
      });

      this.container.querySelectorAll('.level-card:not(.locked)').forEach(el => {
        el.addEventListener('click', () => {
          const id = parseInt(el.getAttribute('data-level-id'), 10);
          this.close();
          onSelectLevel(id);
        });
      });
    };

    render();
  }

  showSettings(state, onSave) {
    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card bounce-in">
          <div class="modal-header with-close">
            <h2>SETTINGS</h2>
            <button class="close-btn" id="modal-close">&times;</button>
          </div>
          <div class="settings-list">
            <div class="setting-item">
              <span>Sound Effects</span>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-sound" ${state.soundEnabled ? 'checked' : ''}>
                <span class="slider"></span>
              </label>
            </div>
            <div class="setting-item">
              <span>Background Music</span>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-music" ${state.musicEnabled ? 'checked' : ''}>
                <span class="slider"></span>
              </label>
            </div>
            <div class="setting-item">
              <div>
                <span>Zen Mode</span>
                <p class="setting-subtext">Infinite hearts for casual, stress-free solving</p>
              </div>
              <label class="toggle-switch">
                <input type="checkbox" id="setting-zen" ${state.zenMode ? 'checked' : ''}>
                <span class="slider"></span>
              </label>
            </div>
            <div class="setting-item column">
              <span>Theme</span>
              <div class="theme-picker">
                <button class="theme-btn ${state.currentTheme === 'dark' ? 'active' : ''}" data-theme="dark">Midnight</button>
                <button class="theme-btn ${state.currentTheme === 'light' ? 'active' : ''}" data-theme="light">Daylight</button>
                <button class="theme-btn ${state.currentTheme === 'sunset' ? 'active' : ''}" data-theme="sunset">Sunset</button>
                <button class="theme-btn ${state.currentTheme === 'cyber' ? 'active' : ''}" data-theme="cyber">Cyber</button>
              </div>
            </div>

            <div class="setting-item column" style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 12px; margin-top: 4px;">
              <div style="display:flex; justify-content:space-between; align-items:center; width:100%;">
                <div>
                  <span style="font-weight:700;">📱 Android App (APK)</span>
                  <p class="setting-subtext">Install on your Android phone</p>
                </div>
                <a href="/ArrowGOPlus.apk" download="ArrowGOPlus.apk" class="btn btn-primary btn-sm" style="text-decoration:none;">
                  ⬇️ APK (4.1 MB)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('modal-close')?.addEventListener('click', () => this.close());
    document.getElementById('setting-sound')?.addEventListener('change', (e) => {
      onSave({ soundEnabled: e.target.checked });
    });
    document.getElementById('setting-music')?.addEventListener('change', (e) => {
      onSave({ musicEnabled: e.target.checked });
    });
    document.getElementById('setting-zen')?.addEventListener('change', (e) => {
      onSave({ zenMode: e.target.checked });
    });
    this.container.querySelectorAll('.theme-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.getAttribute('data-theme');
        this.container.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        onSave({ currentTheme: theme });
      });
    });
  }

  showHowToPlay() {
    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card bounce-in">
          <div class="modal-header with-close">
            <h2>HOW TO PLAY</h2>
            <button class="close-btn" id="modal-close">&times;</button>
          </div>
          <div class="how-to-content">
            <div class="guide-step">
              <div class="step-badge">1</div>
              <div class="step-text">
                <strong>Tap to Escape:</strong> Tap any arrow to launch it off the board in the direction it points (↑, →, ↓, ←).
              </div>
            </div>
            <div class="guide-step">
              <div class="step-badge">2</div>
              <div class="step-text">
                <strong>Clear Path Required:</strong> An arrow can only fly away if there are NO other arrows blocking its straight line to the border!
              </div>
            </div>
            <div class="guide-step">
              <div class="step-badge">3</div>
              <div class="step-text">
                <strong>Dismantle the Grid:</strong> Removing outer arrows opens lanes for inner arrows. Find the right chain reaction!
              </div>
            </div>
            <div class="guide-step">
              <div class="step-badge">4</div>
              <div class="step-text">
                <strong>Boosters:</strong> Use <strong>Hint</strong> (💡) to highlight the next move, <strong>Undo</strong> (↩️) to step back, or <strong>Bomb</strong> (💣) to destroy a stubborn arrow!
              </div>
            </div>
          </div>
          <button class="btn btn-primary full-width" id="btn-got-it">Got It! Let's Play</button>
        </div>
      </div>
    `;

    document.getElementById('modal-close')?.addEventListener('click', () => this.close());
    document.getElementById('btn-got-it')?.addEventListener('click', () => this.close());
  }

  showShop(coins, onBuy) {
    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card bounce-in">
          <div class="modal-header with-close">
            <h2>BOOSTER SHOP 🪙</h2>
            <button class="close-btn" id="modal-close">&times;</button>
          </div>
          <div class="stat-box" style="margin-bottom: 16px;">
            <span class="stat-label">YOUR COIN BALANCE</span>
            <span class="stat-value highlight" style="color: #FBBF24;">🪙 <span id="shop-coins-val">${coins}</span></span>
          </div>
          <div class="settings-list" style="margin-bottom: 16px;">
            <div class="setting-item" style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong>💡 Free Path Hint (+1)</strong>
                <p class="setting-subtext">Reveals the next free arrow</p>
              </div>
              <button class="btn btn-primary shop-buy-btn" data-type="hint" data-cost="40" style="padding: 6px 14px; font-size: 0.9rem;">
                🪙 40
              </button>
            </div>
            <div class="setting-item" style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong>↩️ Move Undo (+3)</strong>
                <p class="setting-subtext">Rewind past moves safely</p>
              </div>
              <button class="btn btn-primary shop-buy-btn" data-type="undo" data-cost="30" style="padding: 6px 14px; font-size: 0.9rem;">
                🪙 30
              </button>
            </div>
            <div class="setting-item" style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <strong>⚡ Auto-Solve (+1)</strong>
                <p class="setting-subtext">Automates a difficult board</p>
              </div>
              <button class="btn btn-primary shop-buy-btn" data-type="skip" data-cost="80" style="padding: 6px 14px; font-size: 0.9rem;">
                🪙 80
              </button>
            </div>
          </div>
          <button class="btn btn-secondary full-width" id="btn-bonus-coins">
            🎁 Claim Daily Bonus (+100 🪙)
          </button>
        </div>
      </div>
    `;

    document.getElementById('modal-close')?.addEventListener('click', () => this.close());
    this.container.querySelectorAll('.shop-buy-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-type');
        const cost = parseInt(btn.getAttribute('data-cost'), 10);
        onBuy(type, cost);
      });
    });
    document.getElementById('btn-bonus-coins')?.addEventListener('click', () => {
      onBuy('bonus', -100);
    });
  }

  showUserProfile(profile, gameSave, callbacks) {
    const isLoggedIn = profile?.isLoggedIn || false;
    const avatarHtml = profile?.avatarUrl
      ? `<img src="${profile.avatarUrl}" class="profile-avatar-img" alt="avatar" />`
      : `<div class="profile-avatar-emoji">${profile?.avatar || '👤'}</div>`;

    const totalStars = Object.values(gameSave.levelScores || {}).reduce((acc, cur) => acc + (cur.stars || 0), 0);

    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card wide bounce-in profile-modal">
          <div class="modal-header with-close">
            <h2>PLAYER PROFILE</h2>
            <button class="close-btn" id="modal-close">&times;</button>
          </div>

          <!-- Profile Info Card -->
          <div class="profile-header-card">
            <div class="profile-avatar-wrapper">
              ${avatarHtml}
              <div class="profile-status-badge ${isLoggedIn ? 'online' : 'guest'}"></div>
            </div>
            <div class="profile-text-info">
              <h3 class="profile-name">${profile?.displayName || 'Guest Player'}</h3>
              <p class="profile-sub">${profile?.email || 'Local Guest Account'}</p>
              <div class="profile-badge-pill ${isLoggedIn ? 'verified' : 'guest'}">
                ${isLoggedIn ? '🛡️ Cloud Protected' : '⚠️ Guest (Unsynced)'}
              </div>
            </div>
          </div>

          <!-- Cloud Security Card -->
          <div class="cloud-status-box ${isLoggedIn ? 'active' : 'warning'}">
            <div class="cloud-status-icon">${isLoggedIn ? '☁️' : '⚠️'}</div>
            <div class="cloud-status-text">
              <strong>${isLoggedIn ? 'Cloud Level Backup Active' : 'Progress Not Synced to Cloud'}</strong>
              <p>${isLoggedIn
                ? 'Your levels, stars, coins, and high scores are securely backed up.'
                : 'Sign in with Google to keep your levels and progress secure across all devices!'}</p>
            </div>
            ${isLoggedIn ? `
              <button class="btn btn-secondary btn-sm" id="btn-sync-cloud">
                🔄 Sync Now
              </button>
            ` : ''}
          </div>

          <!-- Career Stats Grid -->
          <div class="profile-stats-grid">
            <div class="pstat-card">
              <span class="pstat-label">LEVELS UNLOCKED</span>
              <span class="pstat-val">${Math.min(108, gameSave.unlockedLevel || 1)} / 108</span>
            </div>
            <div class="pstat-card">
              <span class="pstat-label">TOTAL STARS</span>
              <span class="pstat-val gold">★ ${totalStars} / 324</span>
            </div>
            <div class="pstat-card">
              <span class="pstat-label">VORTEX STAGE</span>
              <span class="pstat-val cyan">⭕ Ring ${gameSave.vortexStage || 1}</span>
            </div>
            <div class="pstat-card">
              <span class="pstat-label">COINS BALANCE</span>
              <span class="pstat-val amber">🪙 ${gameSave.coins || 150}</span>
            </div>
          </div>

          <!-- 3 Categories Progress -->
          <div class="profile-tier-progress">
            <div class="tier-p-item">
              <div class="tier-p-header">
                <span class="tier-p-badge beginner">🔰 Beginner</span>
                <span class="tier-p-val">${Math.min(36, gameSave.unlockedLevel || 1)} / 36</span>
              </div>
              <div class="tier-p-track">
                <div class="tier-p-fill beginner" style="width: ${Math.round((Math.min(36, gameSave.unlockedLevel || 1) / 36) * 100)}%"></div>
              </div>
            </div>

            <div class="tier-p-item">
              <div class="tier-p-header">
                <span class="tier-p-badge intermediate">⚡ Intermediate</span>
                <span class="tier-p-val">${Math.max(0, Math.min(36, (gameSave.unlockedLevel || 1) - 36))} / 36</span>
              </div>
              <div class="tier-p-track">
                <div class="tier-p-fill intermediate" style="width: ${Math.round((Math.max(0, Math.min(36, (gameSave.unlockedLevel || 1) - 36)) / 36) * 100)}%"></div>
              </div>
            </div>

            <div class="tier-p-item">
              <div class="tier-p-header">
                <span class="tier-p-badge trained">👑 Trained</span>
                <span class="tier-p-val">${Math.max(0, Math.min(36, (gameSave.unlockedLevel || 1) - 72))} / 36</span>
              </div>
              <div class="tier-p-track">
                <div class="tier-p-fill trained" style="width: ${Math.round((Math.max(0, Math.min(36, (gameSave.unlockedLevel || 1) - 72)) / 36) * 100)}%"></div>
              </div>
            </div>
          </div>

          <!-- Auth Actions Section -->
          <div class="profile-auth-section">
            ${!isLoggedIn ? `
              <button class="btn-google-auth full-width" id="btn-login-google">
                <svg width="20" height="20" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                Sign in with Google
              </button>
            ` : `
              <div class="logged-in-actions">
                <button class="btn btn-secondary full-width" id="btn-sign-out">
                  🚪 Sign Out
                </button>
              </div>
            `}
            <a href="/ArrowGOPlus.apk" download="ArrowGOPlus.apk" class="btn btn-primary full-width" style="margin-top: 10px; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px;">
              📱 Download Android APK (4.1 MB)
            </a>
          </div>
        </div>
      </div>
    `;

    document.getElementById('modal-close')?.addEventListener('click', () => this.close());
    document.getElementById('btn-login-google')?.addEventListener('click', () => callbacks.onGoogleLogin());
    document.getElementById('btn-sign-out')?.addEventListener('click', () => callbacks.onSignOut());
    document.getElementById('btn-sync-cloud')?.addEventListener('click', () => callbacks.onSyncCloud());
  }

  showGoogleAccountChooser(accounts, onSelectAccount) {
    this.container.innerHTML = `
      <div class="modal-backdrop fade-in">
        <div class="modal-card bounce-in google-chooser-modal">
          <div class="modal-header with-close">
            <div style="display:flex; align-items:center; gap:8px;">
              <svg width="22" height="22" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <h2 style="font-size:1.1rem; margin:0;">Sign in with Google</h2>
            </div>
            <button class="close-btn" id="modal-close">&times;</button>
          </div>
          <p class="setting-subtext" style="text-align:left; margin-bottom:12px;">Choose an account to continue to <strong>Arrow GO+</strong></p>

          <div class="google-chooser-container">
            ${accounts.map((acc, idx) => `
              <button class="google-account-btn" data-account-idx="${idx}">
                <div class="google-acc-avatar">${acc.avatar || acc.name.charAt(0).toUpperCase()}</div>
                <div class="google-acc-details">
                  <div class="google-acc-name">${acc.name}</div>
                  <div class="google-acc-email">${acc.email}</div>
                </div>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#94A3B8"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
              </button>
            `).join('')}

            <div style="border-top: 1px solid rgba(255,255,255,0.08); padding-top: 10px; margin-top: 6px;">
              <button class="google-account-btn" id="btn-custom-google-acc">
                <div class="google-acc-avatar" style="background:#475569;">+</div>
                <div class="google-acc-details">
                  <div class="google-acc-name">Use another Google account</div>
                  <div class="google-acc-email">Enter a new Gmail address</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    document.getElementById('modal-close')?.addEventListener('click', () => this.close());
    this.container.querySelectorAll('.google-account-btn[data-account-idx]').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-account-idx'), 10);
        this.close();
        onSelectAccount(accounts[idx]);
      });
    });
    document.getElementById('btn-custom-google-acc')?.addEventListener('click', () => {
      const email = prompt('Enter your Google email address:');
      if (email && email.includes('@')) {
        const name = email.split('@')[0];
        this.close();
        onSelectAccount({
          id: 'google_' + Math.random().toString(36).substring(2, 9),
          name: name.charAt(0).toUpperCase() + name.slice(1),
          email: email.trim(),
          avatar: '🌐'
        });
      }
    });
  }



  close() {
    this.container.innerHTML = '';
  }
}

