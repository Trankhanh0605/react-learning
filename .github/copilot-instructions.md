Repository overview

- Project layout: primary app lives in chatbot-project/ (Vite + React). Root README.md notes this repo is a React learning workspace; source for the runnable app is chatbot-project/.

Build, test, and lint commands

- Development server (hot reload):
  - cd chatbot-project && npm run dev
- Build production bundle:
  - cd chatbot-project && npm run build
- Preview built site:
  - cd chatbot-project && npm run preview
- Lint (ESLint is configured via eslint.config.js):
  - cd chatbot-project && npm run lint

Tests

- No test runner is configured in this repository. If tests are added, common choices and single-test invocations that Copilot can assume:
  - Vitest (recommended lightweight): npm i -D vitest @testing-library/react
    - Full suite: npx vitest
    - Run a single file: npx vitest run path/to/file.test.{js,jsx} --run
    - Run a single named test: npx vitest -t "test name"
  - Jest: npm i -D jest @testing-library/react
    - Run a single test by name: npx jest -t "test name"

High-level architecture (big picture)

- Top-level: this repo is a learning workspace. The runnable web app is under chatbot-project/.
- Frontend stack: Vite (dev server + build) + React. Entry: chatbot-project/index.html -> src/main.jsx.
- App structure (key files):
  - src/main.jsx: React app bootstrap (createRoot)
  - src/App.jsx: top-level component that holds chatMessages state and composes UI
  - src/components/
    - ChatInput.jsx: handles input, uses supersimpledev.Chatbot.getResponse to produce replies
    - ChatMessages.jsx: renders list, manages scroll-to-bottom via useEffect + ref
    - ChatMessage.jsx: single message rendering (user vs robot profile images)
  - src/assets/: image assets (robot/user icons, react.svg)
- Build tool config: vite.config.js with @vitejs/plugin-react for Fast Refresh.
- Linting: eslint.config.js using @eslint/js + react-hooks + react-refresh rules; lint script runs "eslint ." from chatbot-project root.

Key repository-specific conventions and patterns

- Project root vs app folder: commands and configs (package.json, vite.config.js, eslint.config.js) are inside chatbot-project/ — run scripts from that directory.
- Module type: package.json sets "type": "module" in chatbot-project — use ES module imports and .jsx extension for React files.
- ID generation: components use crypto.randomUUID() for message IDs — Copilot should suggest that same pattern for new message-like entities.
- Chatbot integration: code calls Chatbot.getResponse(input) (from dependency "supersimpledev"). Treat this as a synchronous helper that returns a string; handle errors or async variants if/when the dependency changes.
- State hoisting: App.jsx holds chatMessages state and passes setChatMessages down to ChatInput — follow the same pattern when adding related UI.
- CSS placement: component styles are global CSS files under src/ (App.css, index.css) rather than CSS Modules — expect global class names.
- ESLint config file: eslint.config.js exports an array and targets JS/JSX files; mirror rule shapes when adding new lint overrides.

AI/assistant notes for Copilot sessions

- When offered code edits or scaffolding, place runtime scripts and project files under chatbot-project/ to match existing layout.
- Prefer using existing patterns (crypto.randomUUID for ids, state in App.jsx, synchronous Chatbot.getResponse) unless migrating to an async API — in that case update consumers accordingly.
- If adding tests, add tooling in chatbot-project/package.json and document test scripts there so Copilot can find them via package.json scripts.

Files and configs consulted

- chatbot-project/package.json (scripts: dev, build, preview, lint)
- chatbot-project/vite.config.js
- chatbot-project/eslint.config.js
- chatbot-project/src/* (main.jsx, App.jsx, components/)
- Root README.md (notes this repo is a React learning workspace)

End

(If this file already exists, merge these sections into the existing file and keep any project-specific notes that may already be present.)
