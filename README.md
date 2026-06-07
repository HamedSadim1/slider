  <div align="center">
    <h1>⭐ Reviews Slider</h1>
    <p>
      <strong>A modern, responsive React review slider component</strong>
      <br />
      Built with React 19, TypeScript and Vite
    </p>
    <p>
      <a href="#features">Features</a> •
      <a href="#screenshots">Screenshots</a> •
      <a href="#technologies">Technologies</a> •
      <a href="#installation">Installation</a> •
      <a href="#project-structure">Structure</a>
    </p>
    <br />
  </div>

## 📸 Screenshots

<p align="center">
  <img src="screenshots/slider-demo.gif" alt="Reviews Slider Demo" width="700" />
  <br />
  <em>Auto-slide, navigation buttons and indicator dots in action</em>
</p>

<br />

<p align="center">
  <img src="screenshots/slider-dashboard.png" alt="Reviews Slider Dashboard" width="700" />
  <br />
  <em>Dashboard with stat cards and the active review</em>
</p>

<p align="center">
  <img src="screenshots/slider-review.png" alt="Reviews Slider - Next Review" width="700" />
  <br />
  <em>Auto-slide transitioning to the next review with animation</em>
</p>

## ✨ Features

- **🎠 Auto-slider** — Transitions to the next slide every 5 seconds
- **👆 Swipe detection** — Swipe left/right on mobile to navigate
- **📊 Stats dashboard** — Displays Total Reviews, Unique Roles, Avg. Words, Max Name Len
- **● Indicator dots** — Clickable dots to jump directly to a slide
- **📱 Fully responsive** — 5 breakpoints from small phones to large screens
- **🎨 Modern design** — Blue color palette, Inter font, smooth animations
- **⚡ React Compiler** — Automatic memoization for optimal performance
- **♿ Accessible** — Aria labels and prefers-reduced-motion support
- **🧩 DRY principles** — No duplicate code, SSOT for constants and utility functions

## 🛠 Technologies

| Tech | Version |
|------|---------|
| [React](https://react.dev/) | 19.2.7 |
| [TypeScript](https://www.typescriptlang.org/) | 6.0 |
| [Vite](https://vitejs.dev/) | 8.0 |
| [React Icons](https://react-icons.github.io/react-icons/) | 5.6 |
| [React Compiler](https://react.dev/learn/react-compiler) | 1.0 |
| [ESLint](https://eslint.org/) | 10.4 |
| [Stylelint](https://stylelint.io/) | 17.13 |

## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/HamedSadim1/slider.git
cd slider

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open http://localhost:5173 in your browser
```

## 📁 Project Structure

```
slider/
├── public/
├── screenshots/
│   ├── slider-dashboard.png
│   └── slider-review.png
├── src/
│   ├── components/
│   │   ├── ReviewCard.tsx        # Individual review card
│   │   ├── StatsDashboard.tsx    # Statistics dashboard
│   │   ├── SectionTitle.tsx      # Section title component
│   │   ├── SliderNavButtons.tsx  # Navigation buttons
│   │   └── SlideIndicator.tsx    # Indicator dots
│   ├── constants/
│   │   └── index.ts              # Central constants (SSOT)
│   ├── hooks/
│   │   ├── useAutoSlide.ts       # Auto-slide interval hook
│   │   └── useSwipe.ts           # Touch swipe detection hook
│   ├── utils/
│   │   └── index.ts              # Utility functions (DRY)
│   ├── data/
│   │   └── index.ts              # Review data
│   ├── types/
│   │   └── index.ts              # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── pr.yml               # GitHub Actions CI
├── index.html
├── package.json
├── vite.config.ts
├── eslint.config.ts
├── stylelint.config.ts
├── commitlint.config.ts
└── README.md
```

## 📜 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production (tsc + vite) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint (0 warnings policy) |

## 🧪 CI/CD

Every Pull Request to `main` runs:

- **Lint** — ESLint on all TypeScript files
- **Build** — TypeScript compilation + Vite build
- **Commitlint** — Conventional commits validation

## 🧠 Architecture

The app follows several principles:

- **SSOT (Single Source of Truth)**: All constant values are in `src/constants/`, all types in `src/types/`
- **DRY (Don't Repeat Yourself)**: Utility functions in `src/utils/` are reused by hooks and components
- **Component splitting**: `App.tsx` is split into 5 smaller components and 2 custom hooks
- **React Compiler**: Automatic memoization removes the need for manual `React.memo`/`useMemo`/`useCallback`

## 👤 Author

**Hamed Sadim** — [GitHub](https://github.com/HamedSadim1)

---

<p align="center">Built with ❤️ using React, TypeScript & Vite</p>
