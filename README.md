# Maniac Forex Academy (Stage A + vertical slice)

This repository contains the initial implementation for Maniac Forex Academy. It implements Stage A (scaffold, theme, navigation, routes) and a vertical slice of Stage B (curriculum data, lesson reader, diagrams, quiz engine, progress persistence).

Important notes
- This is a local-first demo. All progress and journal entries are persisted in LocalStorage. There is no authentication in Stage A.
- No external API keys are required to run this version.

Quick start
1. Clone the repository
2. Install dependencies:
   - npm install
3. Run the dev server:
   - npm run dev
4. Open http://localhost:5173

Build
- npm run build
- Preview the production build with npm run preview

Testing
- npm run test

Project structure (selected)
- src/
  - components/DiagramRenderer.tsx — original SVG diagram renderer used in lessons
  - components/Quiz.tsx — lightweight quiz engine
  - data/curriculum.ts — structured curriculum data and lessons
  - lib/types.ts — TypeScript types for curriculum and progress
  - pages/ — route pages
  - utils/storage.ts — LocalStorage persistence, export/import helpers

Next stages (planned)
- Stage B complete: more lessons, interactive diagram editing, more questions per lesson, randomization, and prerequisites enforcement.
- Stage C: dashboard improvements, resource library, glossary, and validated import.
- Stage D: risk calculator, fully-functional trading lab with bundled datasets, and journal features.
- Stage E: tests, accessibility audits, deployment instructions.

License
- MIT (see LICENSE)

Content & attribution
- Curriculum content and diagrams in this release are original and simplified for the learning demo. External resources and links will be added in Stage C with verified attribution and licence notes.

