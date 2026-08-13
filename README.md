# Atelier & Co. — Portfolio Platform SPA

A small React single-page portfolio archive for a creative studio. The interface is designed as a warm, editorial work archive rather than a generic dashboard, with responsive project cards, live search, and a focused add-project dialog.

## Features

The landing page displays the current project collection and a live result count. Visitors can search by project title, category, description, or year. The **New project** flow validates the required title and category fields, assigns a visual color automatically, and adds the project immediately to the archive. Each card can also be removed from the current session.

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build

```bash
npm run build
```

The optimized production files are written to `dist/`.

## Project structure

| File | Purpose |
| --- | --- |
| `app.jsx` | Top-level state, filtering, and page composition |
| `projectform.jsx` | Accessible add-project dialog |
| `projectlist.jsx` | Project grid and empty-state handling |
| `projectcard.jsx` | Reusable project card |
| `searchbar.jsx` | Live search field and result counter |
| `data/projects.js` | Starter project data |
| `index.css` | Responsive visual system and component styling |
| `src/main.jsx` | React/Vite entrypoint |

Project data is currently stored in React state, so additions and removals last for the current browser session only. A future backend or local-storage layer can be added without changing the component boundaries.
