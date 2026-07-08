Repository overview

- Top-level: This repo is a React learning workspace with multiple project folders.
- Root README.md confirms this is a learning repository for React practice.
- Key projects:
  1. **chatbot-project/** — Simple Vite + React chatbot using supersimpledev API
  2. **ecommerce-project/** — Full-stack frontend (Vite + React + TypeScript + Router)
  3. **ecommerce-backend/** — Node.js backend (Express + Sequelize + MySQL/PostgreSQL)

## chatbot-project

Build, test, and lint commands:
- Development server (hot reload): `cd chatbot-project && npm run dev`
- Build production: `cd chatbot-project && npm run build`
- Preview built site: `cd chatbot-project && npm run preview`
- Lint: `cd chatbot-project && npm run lint`

Stack: Vite + React 19 (ESM, .jsx extension)
- Main entry: `src/main.jsx`
- Top component: `src/App.jsx` (manages chatMessages state, passes to ChatInput)
- Components: ChatInput.jsx (handles input, calls Chatbot.getResponse), ChatMessages.jsx, ChatMessage.jsx
- Chatbot API: Uses supersimpledev.Chatbot.getResponse(input) — synchronous, returns string
- ID generation: Uses crypto.randomUUID() for message IDs
- Styling: Global CSS (App.css, index.css, component-specific .css files)
- ESLint: eslint.config.js uses @eslint/js + react-hooks + react-refresh

## ecommerce-project

Build, test, and lint commands:
- Development server (hot reload): `cd ecommerce-project && npm run dev`
- Build production: `cd ecommerce-project && npm run build`
- Lint: `cd ecommerce-project && npm run lint`
- Preview: `cd ecommerce-project && npm run preview`

Stack: Vite + React 19 + TypeScript + React Router + Vitest
- Entry: `src/main.tsx` (TypeScript)
- TypeScript config: tsconfig.json, tsconfig.app.json, tsconfig.node.json
- Router: React Router v7 for navigation
- Testing: Vitest configured (setupTests.js)
  - Run all tests: `cd ecommerce-project && npx vitest`
  - Run single file: `cd ecommerce-project && npx vitest run path/to/file.test.ts --run`
- HTTP client: axios for API calls
- Utilities: dayjs for date handling
- ESLint: TypeScript-aware (typescript-eslint, eslint-plugin-react-hooks)
- Vite config: vite.config.ts (TypeScript)

## ecommerce-backend

Commands:
- Start server: `cd ecommerce-backend && npm start` (node server.js)
- Development (auto-reload): `cd ecommerce-backend && npm run dev` (nodemon)
- Lint: ESLint configured via .eslintrc.json

Stack: Node.js + Express + Sequelize ORM
- Main entry: `server.js`
- Database: Sequelize ORM (supports MySQL via mysql2, PostgreSQL via pg, SQLite via sql.js)
- Default DB: SQLite (database.sqlite)
- Routing: routes/ directory
- Models: models/ directory
- Backend structure: backend/ directory (Express setup, routes, models)
- Dependencies: cors, express, sequelize, mysql2, pg

Key repository-specific conventions and patterns

**chatbot-project specifics:**
- Config files inside project root (package.json, vite.config.js, eslint.config.js)
- Module type: "type": "module" (ES imports)
- Pattern: App.jsx holds state, passes callbacks down (e.g., setChatMessages to ChatInput)
- Chatbot.getResponse() is synchronous; handle async variants if API changes

**ecommerce-project specifics:**
- TypeScript primary language (.ts, .tsx extensions)
- Vite + TypeScript compilation (build command runs tsc -b && vite build)
- React Router v7 for multi-page navigation
- Vitest test runner already configured (setupTests.js exists)
- axios + dayjs utilities included

**ecommerce-backend specifics:**
- Node.js + Express API server
- Sequelize models in models/ (auto-sync or migrations)
- postinstall hook runs patch-package (be aware if modifying node_modules)
- nodemon for dev mode auto-reload

AI/assistant notes for Copilot sessions

- Confirm which project (chatbot, ecommerce-frontend, ecommerce-backend) before making changes
- chatbot-project: Use synchronous Chatbot.getResponse, crypto.randomUUID for IDs, global CSS patterns
- ecommerce-project: Use TypeScript, React Router patterns, Vitest for tests, axios for HTTP
- ecommerce-backend: Use Express routes, Sequelize models, handle database layer in models/
- For new code: match existing folder structure, naming conventions, and module patterns per project

Files and configs consulted

**chatbot-project/:**
- package.json (scripts: dev, build, lint, preview)
- vite.config.js
- eslint.config.js
- src/ (main.jsx, App.jsx, components/, assets/)

**ecommerce-project/:**
- package.json (includes vitest config ref: vitest.config.js)
- vite.config.ts
- eslint.config.js
- tsconfig.json, tsconfig.app.json, tsconfig.node.json
- src/ (main.tsx, React components, router setup)
- setupTests.js

**ecommerce-backend/:**
- server.js (main entry)
- package.json
- .eslintrc.json
- backend/, routes/, models/, database.sqlite
- documentation.md, troubleshooting.md (for reference)

End

(If this file already exists, merge these sections into the existing file and keep any project-specific notes that may already be present.)