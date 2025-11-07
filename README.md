# LAC Electric Website

This repository contains **two versions** of the LAC Electric website:

## Repository Structure

### Branch: `v2` (Production - Legacy)

- **Technology**: Gatsby + Styled Components
- **Status**: Current production build (legacy)
- **Location**: Root directory (`src/`, `gatsby-*.js`, etc.)
- **Deployment**: Manual (no auto-deploy on push)

### Branch: `production-vite` (Production - New)

- **Technology**: Vite + React + TypeScript + Tailwind CSS
- **Status**: New production-ready version
- **Location**: Root directory (all files at root level)
- **Deployment**: Manual (no auto-deploy on push)
- **Note**: This branch is the default branch on GitHub

## Development Workflow

### Working on the Legacy Site (Gatsby)

```bash
git checkout v2
npm install
npm run develop
```

### Working on the New Site (Vite)

```bash
git checkout production-vite
npm install
npm run dev
```

## Branch Strategy

- **`v2`**: Legacy Gatsby production site (current production, preserved as-is)
- **`production-vite`**: New Vite-based production site (default branch)
- Both versions coexist independently in separate branches
- No automatic deployments on push

## Tech Stacks

### Legacy (Gatsby) - `v2` branch

- Gatsby
- React
- Styled Components
- FontAwesome Icons
- ESLint, Stylelint, Prettier

### New (Vite) - `production-vite` branch

- Vite
- React 19
- TypeScript
- Tailwind CSS
- Biome (linting & formatting)
- React Router v7

## Quick Start (Vite Version)

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to see the site.

---

*This project is maintained by the LAC Electric team. © 2025 LAC Electric.*
