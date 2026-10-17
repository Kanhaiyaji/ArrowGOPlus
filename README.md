# 🏹 Arrow GO+
### Reverse-Engineered Logic Puzzle Escape Game
Inspired by **Arrow Go – Arrow Puzzle Escape** (`com.arrowpuzzle.arrowgo` on Google Play).

---

## 🎮 What is Arrow GO+?
Arrow GO+ is a minimalist logic puzzle game based on spatial reasoning and sequencing.
- **The Objective:** Clear the board by tapping arrows to slide them off the screen.
- **The Catch:** An arrow can only escape if its path to the edge of the board is completely clear of other arrows.
- **The Strategy:** Clear outer arrows to unlock cascading paths for arrows trapped deep in the interior.

---

## 🌟 Key Features

1. **25+ Handcrafted Campaign Levels:**
   - Onboarding & tutorials
   - Geometric shapes (Cross, Diamond, Donut)
   - Iconic silhouettes (Heart, Star, Coffee Mug, Crown, Sword, Rocket, Retro Space Invader, Key, Rubber Ducky, Butterfly, Trophy, Hourglass, Vortex, Castle Keep)
   - Master labyrinths (Sunburst, Pinwheel Matrix, Falcon, The Grand Maze, Infinity Loop)

2. **Infinite Procedural Mode:**
   - Reverse-construction generator with the **Minimum Remaining Values (MRV)** heuristic.
   - Guaranteed 100% solvable puzzles on any grid size (Easy, Medium, Hard, Expert).

3. **Interactive Level Editor & AI Solver:**
   - Paint, rotate, or erase arrows on a custom grid.
   - 1-Click **Test Solvable** button that verifies solvability and detects deadlocks.
   - Export and import custom level JSON configurations.

4. **In-Game Boosters:**
   - **Hint (💡):** AI solver highlights the best next arrow to tap.
   - **Undo (↩️):** Reverses the last move.
   - **Bomb (💣):** Directly destroys any obstacle arrow.
   - **Rotate (🔄):** Turns an arrow 90° clockwise.

5. **Procedural Web Audio Engine:**
   - 100% synthesized using Web Audio API (no external mp3 files).
   - Dynamic combo pitch-scaling along the C Major pentatonic scale.
   - Realistic wooden bump thud on collision.
   - Victory fanfare and optional ambient background chords.

6. **Themes & Zen Mode:**
   - 4 Color Themes: Midnight Dark, Daylight Clean, Sunset Pastel, Cyberpunk Neon.
   - **Zen Mode:** Toggle infinite hearts for relaxing, stress-free solving.

---

## 🚀 How to Run and Play

### Option 1: Instant Development Server (Recommended)
```bash
npm run dev
```
Open the local URL displayed in the terminal (usually `http://localhost:5173`) in your browser.

### Option 2: Production Build & Preview
```bash
npm run build
npm run preview
```

### Option 3: Run Automated Verification Tests
```bash
node test/verify_game.js
```
Runs the test suite verifying ray-casting collision math, deadlock detection, reverse-construction generator, and solvability of all 25 levels.

---

## 📱 Building into an Android APK (Google Play)

This project is ready for native Android packaging via **Capacitor**:

```bash
# 1. Install Capacitor
npm install @capacitor/core @capacitor/cli @capacitor/android

# 2. Build the web distribution
npm run build

# 3. Add Android platform
npx cap add android

# 4. Sync web assets
npx cap sync

# 5. Open in Android Studio
npx cap open android
```
Inside Android Studio, click **Build > Build Bundle(s) / APK(s) > Build APK(s)** to generate your release or debug APK.

---

## 📁 Project Structure

```text
Arrow GO+/
├── index.html                   # Mobile-responsive app entry point
├── package.json                 # Project scripts and dependencies (Vite)
├── capacitor.config.json        # Capacitor Android APK configuration
├── README.md                    # Quickstart guide
├── REVERSE_ENGINEERING_DOCS.md  # Detailed reverse-engineering mathematical report
├── src/
│   ├── main.js                  # Game state machine & main controller
│   ├── style.css                # Themes, glassmorphism, responsive styles
│   ├── engine/
│   │   ├── constants.js         # Directions, vectors, themes, audio frequencies
│   │   ├── grid.js              # Ray-casting collision engine and 2D matrix
│   │   ├── solver.js            # DAG solver, topological analyzer, hint generator
│   │   ├── generator.js         # Reverse-construction level generator (MRV)
│   │   ├── audio.js             # Procedural Web Audio API sound synthesizer
│   │   ├── particles.js         # Hardware-accelerated canvas VFX & confetti
│   │   └── storage.js           # LocalStorage progress, stars, settings
│   ├── data/
│   │   └── levels.js            # 25+ handcrafted campaign levels & silhouettes
│   ├── ui/
│   │   ├── renderer.js          # Canvas tile and arrow vector rendering
│   │   └── modals.js            # Victory, game over, level select dialogs
│   └── editor/
│       └── editor.js            # Interactive level creator & test studio
└── test/
    └── verify_game.js           # Automated test suite
```
