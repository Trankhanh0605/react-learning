# Antigravity Repository Overview & Guidelines

This file provides context, rules, and guidelines for the Antigravity AI assistant when working in this repository.

## Repository Overview

- **Project Layout:** The primary application is located in `chatbot-project/` (Vite + React). The root is a React learning workspace containing sections (e.g., `section1`, `section2`, `section3`, `section4`).
- **Core App Source:** The runnable application code lives under `chatbot-project/src/`.

---

## Build, Test, and Lint Commands

Always execute commands relative to the `chatbot-project/` directory or specify the correct working directory.

- **Development Server:**
  ```bash
  cd chatbot-project && npm run dev
  ```
- **Build Production Bundle:**
  ```bash
  cd chatbot-project && npm run build
  ```
- **Preview Built Site:**
  ```bash
  cd chatbot-project && npm run preview
  ```
- **Lint (ESLint):**
  ```bash
  cd chatbot-project && npm run lint
  ```

---

## High-Level Architecture (Vite + React App)

- **Entry Point:** `chatbot-project/index.html` -> `src/main.jsx` -> `src/App.jsx`.
- **Component Breakdown:**
  - `src/main.jsx`: Bootstrapping the React app.
  - `src/App.jsx`: State management (such as `chatMessages`) and high-level layout.
  - `src/components/`:
    - `ChatInput.jsx`: Handles user input and chatbot responses.
    - `ChatMessages.jsx`: Handles message rendering and automatic scroll-to-bottom behavior.
    - `ChatMessage.jsx`: Renders individual messages (user vs. bot).
- **Styling:** Global CSS via `src/App.css` and `src/index.css`.
- **Build Configuration:** `vite.config.js` with `@vitejs/plugin-react` for React support and Fast Refresh.

---

## Key Conventions & Patterns

- **Path Context:** Always place runtime scripts, assets, and components inside the `chatbot-project/` folder.
- **ES Modules:** The project is configured as `"type": "module"`. Use ESM import/export statements and `.jsx` extensions for React files.
- **ID Generation:** Message lists and other dynamically generated lists use `crypto.randomUUID()` for unique identifiers.
- **Response Helper:** The chatbot relies on `supersimpledev.Chatbot.getResponse(input)`. Keep responses synchronous unless updating to an asynchronous API helper.

---

## Guidelines for Antigravity

- **Aesthetics & UI:** When building UI or styling components, focus on premium, interactive, and responsive designs.
- **Dependency Management:** Always check `package.json` before proposing or using libraries. Do not add global or unnecessary packages.
- **Code Continuity:** Maintain documentation integrity, existing docstrings, and existing helper functions.
