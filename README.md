# Clivaro Media — Landing Page

A modern, dark-themed landing page for Clivaro Media built with React, Vite, TypeScript, Tailwind CSS v4, and Framer Motion.

## Prerequisites

- Node.js **20 or newer** — https://nodejs.org

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open http://localhost:5173 in your browser.

## Build for production

```bash
npm run build
npm run preview
```

The production-ready files will be in the `dist/` folder.

## Project structure

```
src/
├── components/      # Landing page sections (Hero, Services, etc.)
│   └── ui/          # Reusable UI primitives (button, card, dialog, ...)
├── pages/           # Page-level components (Home, NotFound)
├── hooks/           # Reusable hooks
├── lib/             # Utilities (cn helper, etc.)
├── App.tsx          # Root component
├── main.tsx         # Entry point
└── index.css        # Global styles + Tailwind theme tokens

public/
├── favicon.svg
├── opengraph.jpg
└── images/          # Hero, clip, and website preview images
```
