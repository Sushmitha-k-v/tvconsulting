# TerraVerde Consulting — Modern React Frontend

This project is now built with a modern **React 18 + Vite** architecture.

---

## 🚀 Getting Started

### 1. Run the Development Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

Or simply double-click `start.bat`.

### 2. Build for Production
```bash
npm run build
```
This compiles the optimized production bundle into the `dist/` directory.

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```
Prototype/
├── public/
│   └── assets/              # Logos, favicons, branding images
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Glassmorphism navigation, mobile drawer
│   │   ├── Footer.jsx       # Multi-column footer & back-to-top
│   │   ├── Icons.jsx        # SVG vector icon system
│   │   └── ThemeSwitcher.jsx# Live 5-palette theme engine with localStorage
│   ├── pages/
│   │   ├── HomePage.jsx     # Hero, offerings, stats, insights
│   │   ├── WhatWeDoPage.jsx # 7 service practices & CCTS breakdown
│   │   ├── WhoWeArePage.jsx # Mission, founder & executive leadership profile
│   │   ├── CareerPage.jsx   # Culture & career application
│   │   ├── EngagePage.jsx   # Blogs, publications & media coverage
│   │   ├── InvestorRelationsPage.jsx # Real-time searchable disclosures table
│   │   ├── ContactPage.jsx  # Interactive enquiry form & embedded Google Map
│   │   └── LegalPage.jsx    # Privacy, disclaimer & grievance information
│   ├── data/
│   │   └── siteContent.js   # Structured content & company information
│   ├── App.jsx              # Main React SPA Controller & Route Manager
│   ├── index.css            # Climate-Tech Luxe Design System tokens & styles
│   └── main.jsx             # React entry point
├── index.html               # Root HTML with Google Fonts
├── vite.config.js           # Vite configuration
└── package.json
```

---

## 🎨 Theme Customization
The site comes with 5 themes accessible via the floating theme switcher:
1. **Emerald Obsidian** (Default Climate-Tech Luxe)
2. **Oceanic Azure & Cyan**
3. **Cyber Carbon & Lime**
4. **Executive Alabaster Light**
5. **Royal Indigo & Gold**
