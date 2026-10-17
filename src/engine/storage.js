/**
 * Arrow GO+ - LocalStorage & State Persistence Manager (Commercial Edition)
 */

const STORAGE_KEY = 'arrow_go_plus_save_v2';

const DEFAULT_STATE = {
  unlockedLevel: 1,
  levelScores: {}, // { levelId: { stars: 3, score: 1200, timeSec: 15 } }
  coins: 150, // Starting currency for boosters
  boosters: {
    hint: 3,
    undo: 5,
    skip: 1
  },
  currentTheme: 'cyber', // 'cyber' | 'amber' | 'synthwave' | 'matrix'
  soundEnabled: true,
  musicEnabled: true,
  hapticsEnabled: true,
  zenMode: false
};

export class StorageManager {
  static load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return { ...DEFAULT_STATE };
      return { ...DEFAULT_STATE, ...JSON.parse(data) };
    } catch (e) {
      console.warn('Failed to load save state:', e);
      return { ...DEFAULT_STATE };
    }
  }

  static save(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Failed to save state:', e);
    }
  }

  static update(updater) {
    const current = this.load();
    const updated = updater(current);
    this.save(updated);
    return updated;
  }

  static recordLevelComplete(levelId, stars, score, timeSec, coinsReward = 50) {
    return this.update(state => {
      const existing = state.levelScores[levelId];
      const newStars = Math.max(stars, existing ? existing.stars : 0);
      const newScore = Math.max(score, existing ? existing.score : 0);
      const newTime = existing ? Math.min(timeSec, existing.timeSec) : timeSec;

      state.levelScores[levelId] = {
        stars: newStars,
        score: newScore,
        timeSec: newTime
      };

      if (levelId >= state.unlockedLevel) {
        state.unlockedLevel = levelId + 1;
      }

      state.coins = (state.coins || 0) + coinsReward;
      return state;
    });
  }

  static buyBooster(type, cost = 50) {
    let success = false;
    this.update(state => {
      if ((state.coins || 0) >= cost) {
        state.coins -= cost;
        state.boosters[type] = (state.boosters[type] || 0) + 1;
        success = true;
      }
      return state;
    });
    return success;
  }

  static consumeBooster(type) {
    let hasAvailable = false;
    this.update(state => {
      if ((state.boosters[type] || 0) > 0) {
        state.boosters[type]--;
        hasAvailable = true;
      }
      return state;
    });
    return hasAvailable;
  }
}
