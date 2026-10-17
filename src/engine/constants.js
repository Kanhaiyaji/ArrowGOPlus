/**
 * Arrow GO+ - Game Constants and Configuration
 * Reverse-Engineered from com.arrowpuzzle.arrowgo mechanics
 */

export const DIRECTIONS = {
  UP: {
    id: 'UP',
    dx: 0,
    dy: -1,
    angle: 0, // degrees clockwise from UP (0 = UP)
    symbol: '↑',
    arrowIcon: 'M12 4L4 12h5v8h6v-8h5L12 4z'
  },
  RIGHT: {
    id: 'RIGHT',
    dx: 1,
    dy: 0,
    angle: 90,
    symbol: '→',
    arrowIcon: 'M20 12l-8-8v5H4v6h8v5l8-8z'
  },
  DOWN: {
    id: 'DOWN',
    dx: 0,
    dy: 1,
    angle: 180,
    symbol: '↓',
    arrowIcon: 'M12 20l8-8h-5V4h-6v8H4l8 8z'
  },
  LEFT: {
    id: 'LEFT',
    dx: -1,
    dy: 0,
    angle: 270,
    symbol: '←',
    arrowIcon: 'M4 12l8 8v-5h8v-6h-8V4L4 12z'
  }
};

export const DIR_KEYS = ['UP', 'RIGHT', 'DOWN', 'LEFT'];

export const THEMES = {
  light: {
    id: 'light',
    name: 'Daylight Clean',
    bg: '#F5F7FB',
    boardBg: '#E9EEF6',
    gridDot: '#CBD5E1',
    tileBg: '#FFFFFF',
    tileBorder: '#E2E8F0',
    tileShadow: 'rgba(51, 65, 85, 0.12)',
    arrowColor: '#2563EB',
    arrowAccent: '#3B82F6',
    blockedFlash: '#EF4444',
    hintGlow: '#F59E0B',
    successColor: '#10B981',
    textPrimary: '#0F172A',
    textSecondary: '#64748B',
    hudBg: 'rgba(255, 255, 255, 0.85)',
    cardBg: '#FFFFFF'
  },
  dark: {
    id: 'dark',
    name: 'Midnight Dark',
    bg: '#0F172A',
    boardBg: '#1E293B',
    gridDot: '#334155',
    tileBg: '#1E293B',
    tileBorder: '#334155',
    tileShadow: 'rgba(0, 0, 0, 0.5)',
    arrowColor: '#38BDF8',
    arrowAccent: '#0EA5E9',
    blockedFlash: '#F87171',
    hintGlow: '#FBBF24',
    successColor: '#34D399',
    textPrimary: '#F8FAFC',
    textSecondary: '#94A3B8',
    hudBg: 'rgba(30, 41, 59, 0.85)',
    cardBg: '#1E293B'
  },
  sunset: {
    id: 'sunset',
    name: 'Sunset Pastel',
    bg: '#2D1B36',
    boardBg: '#3B2046',
    gridDot: '#583369',
    tileBg: '#4A2859',
    tileBorder: '#6A3C7E',
    tileShadow: 'rgba(23, 8, 30, 0.6)',
    arrowColor: '#F472B6',
    arrowAccent: '#FB7185',
    blockedFlash: '#E11D48',
    hintGlow: '#FCD34D',
    successColor: '#4ADE80',
    textPrimary: '#FDF2F8',
    textSecondary: '#D8B4FE',
    hudBg: 'rgba(59, 32, 70, 0.85)',
    cardBg: '#3B2046'
  },
  cyber: {
    id: 'cyber',
    name: 'Cyberpunk Neon',
    bg: '#070A13',
    boardBg: '#0D1322',
    gridDot: '#1E293B',
    tileBg: '#111827',
    tileBorder: '#00F0FF',
    tileShadow: 'rgba(0, 240, 255, 0.25)',
    arrowColor: '#00F0FF',
    arrowAccent: '#FF007F',
    blockedFlash: '#FF0055',
    hintGlow: '#FFE600',
    successColor: '#00FF66',
    textPrimary: '#FFFFFF',
    textSecondary: '#94A3B8',
    hudBg: 'rgba(13, 19, 34, 0.9)',
    cardBg: '#0D1322'
  }
};

export const DIFFICULTY_SETTINGS = {
  easy: {
    label: 'Easy',
    width: 6,
    height: 6,
    density: 0.55,
    maxCycles: 2,
    lives: 5
  },
  medium: {
    label: 'Medium',
    width: 8,
    height: 8,
    density: 0.7,
    maxCycles: 4,
    lives: 3
  },
  hard: {
    label: 'Hard',
    width: 10,
    height: 10,
    density: 0.8,
    maxCycles: 6,
    lives: 3
  },
  expert: {
    label: 'Expert',
    width: 12,
    height: 12,
    density: 0.85,
    maxCycles: 10,
    lives: 3
  }
};

export const ANIMATION = {
  ESCAPE_DURATION_MS: 320,
  BUMP_DURATION_MS: 240,
  HINT_DURATION_MS: 2500,
  COMBO_TIMEOUT_MS: 2000
};
