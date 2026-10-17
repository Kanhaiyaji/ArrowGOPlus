# 🏹 Arrow GO+

<div align="center">

[![Android APK Download](https://img.shields.io/badge/Download-ArrowGOPlus.apk-brightgreen?logo=android&logoColor=white&style=for-the-badge)](https://github.com/Kanhaiyaji/ArrowGOPlus/releases/latest/download/ArrowGOPlus.apk)
[![GitHub Actions CI](https://img.shields.io/github/actions/workflow/status/Kanhaiyaji/ArrowGOPlus/build-apk.yml?branch=main&label=APK%20Build&style=for-the-badge)](https://github.com/Kanhaiyaji/ArrowGOPlus/actions)
[![Latest Release](https://img.shields.io/github/v/release/Kanhaiyaji/ArrowGOPlus?color=blue&label=Latest%20Version&style=for-the-badge)](https://github.com/Kanhaiyaji/ArrowGOPlus/releases/latest)

**Minimalist Logic Puzzle Escape Game with 108 Levels, Procedural Generation, Level Editor, and Cloud Save**  
*Built for Web & Android Mobile (Capacitor + Vite)*

</div>

---

## 📲 Install Arrow GO+ on Android

Users can easily download and install the latest APK build directly from GitHub without needing any developer tools:

### 1. Direct Release Download (Instant)
- ⬇️ **[Download Latest ArrowGOPlus.apk](https://github.com/Kanhaiyaji/ArrowGOPlus/releases/latest/download/ArrowGOPlus.apk)**
- Simply tap the link above on your Android phone, download the APK, and tap **Install**.
- All historical releases and update logs can be found on the **[GitHub Releases Page](https://github.com/Kanhaiyaji/ArrowGOPlus/releases)**.

### 2. Download from GitHub Actions
- Every time code is pushed or updated on the `main` branch, **GitHub Actions** automatically compiles a fresh Android APK!
- Go to the **[GitHub Actions Tab](https://github.com/Kanhaiyaji/ArrowGOPlus/actions)**.
- Click on the latest workflow run: **Build & Release Android APK**.
- Under **Artifacts** at the bottom of the summary, click **`ArrowGOPlus-APK`** to download the signed APK.

---

## 🎮 What is Arrow GO+?
Arrow GO+ is a minimalist logic puzzle game based on spatial reasoning and directional sequencing:
- **The Objective:** Clear the board by tapping arrows to slide them off the screen.
- **The Catch:** An arrow can only escape if its straight line to the border is completely free of other blocking arrows.
- **The Strategy:** Dismantle the outer perimeter first to open escape vectors for arrows trapped deep in the interior.

---

## 🌟 Key Features

1. **108 Handcrafted Levels across 3 Tiers:**
   - 🔰 **Beginner Tier (Levels 1 - 36):** Basic navigation, tutorial stages, geometric foundations (Cross, Diamond, Donut).
   - ⚡ **Intermediate Tier (Levels 37 - 72):** Complex silhouettes (Star, Coffee Mug, Crown, Sword, Rocket, Space Invader, Key, Rubber Ducky, Butterfly, Trophy).
   - 👑 **Trained Tier (Levels 73 - 108):** Master labyrinths (Sunburst, Pinwheel Matrix, Falcon, The Grand Maze, Infinity Loop, Ring VORTEX).

2. **Google OAuth & Cloud Save via Supabase:**
   - Sign in with your real Google account or phone number.
   - Cloud backup protects unlocked levels, 3-star ratings, coins, and high scores across all devices.

3. **Infinite Procedural Mode (MRV Heuristic):**
   - Reverse-construction generator with the **Minimum Remaining Values (MRV)** heuristic.
   - 100% mathematically guaranteed solvable puzzles on any grid size (Easy, Medium, Hard, Expert).

4. **Interactive Level Editor & AI Solver:**
   - Paint, rotate, or erase arrows on a custom grid.
   - 1-Click **Test Solvable** button that checks solvability and flags deadlocks.
   - Export and import custom level JSON configurations.

5. **In-Game Boosters:**
   - **Hint (💡):** AI solver highlights the next free arrow to tap.
   - **Undo (↩️):** Reverses moves safely.
   - **Bomb (💣):** Blasts away blocking arrows.
   - **Auto-Solve (⚡):** Automates complex board resolution.

6. **Procedural Web Audio Engine:**
   - 100% synthesized using Web Audio API (no heavy audio assets).
   - Dynamic combo pitch-scaling along the C Major pentatonic scale.
   - Realistic wooden bump thud on collision, victory fanfare, and ambient chime textures.

7. **Themes & Zen Mode:**
   - 4 Color Themes: Midnight Dark, Daylight Clean, Sunset Pastel, Cyberpunk Neon.
   - **Zen Mode:** Toggle infinite hearts for relaxing, stress-free solving.

---

## 🚀 How to Run Locally

### Option 1: Instant Development Server
```bash
npm install
npm run dev
```
Open `http://localhost:5173` in your browser.

### Option 2: Production Build
```bash
npm run build
npm run preview
```

### Option 3: Run Automated Verification Tests
```bash
node test/verify_game.js
```

---

## 📱 Local Android APK Build

```bash
# 1. Build web distribution
npm run build

# 2. Sync web assets with Capacitor Android
npx cap sync android

# 3. Build debug APK using Gradle wrapper
cd android
./gradlew assembleDebug
```
The output APK will be generated at `android/app/build/outputs/apk/debug/app-debug.apk`.

---

## 📁 Project Structure

```text
Arrow GO+/
├── .github/
│   └── workflows/
│       └── build-apk.yml        # Automated GitHub Actions APK build & release CI/CD
├── index.html                   # Mobile-responsive app entry point
├── package.json                 # Project scripts and dependencies (Vite + Capacitor)
├── capacitor.config.json        # Capacitor Android APK configuration
├── android/                     # Full native Android Studio project
├── src/
│   ├── main.js                  # Game state machine & main controller
│   ├── style.css                # Themes, glassmorphism, responsive styles
│   ├── engine/
│   │   ├── auth.js              # Supabase & Google OAuth authentication engine
│   │   ├── constants.js         # Directions, vectors, themes, audio frequencies
│   │   ├── grid.js              # Ray-casting collision engine and 2D matrix
│   │   ├── solver.js            # DAG solver, topological analyzer, hint generator
│   │   ├── generator.js         # Reverse-construction level generator (MRV)
│   │   ├── audio.js             # Procedural Web Audio API sound synthesizer
│   │   ├── particles.js         # Hardware-accelerated canvas VFX & confetti
│   │   └── storage.js           # LocalStorage progress, stars, settings
│   ├── data/
│   │   └── levels.js            # 108 handcrafted campaign levels across 3 tiers
│   ├── ui/
│   │   ├── renderer.js          # Canvas tile and arrow vector rendering
│   │   └── modals.js            # Victory, profile, settings, level select dialogs
│   └── editor/
│       └── editor.js            # Interactive level creator & test studio
└── test/
    └── verify_game.js           # Automated test suite
```

---

## 📄 License
MIT License. Created with ❤️ for puzzle lovers everywhere.
