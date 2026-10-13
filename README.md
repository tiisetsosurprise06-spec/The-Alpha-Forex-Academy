# Alpha Forex Academy

A no-build, no-paid-dependency starter for a dark, institutional-style forex education site.

## Included in this prototype
- Responsive dark charcoal / green interface
- Six learning modules with locally saved completion state
- Searchable curated resource list linking to original providers
- Position-risk calculator (educational estimate; verify pip value for your instrument/account currency)
- Trading journal stored in the current browser
- GitHub Pages deployment workflow

## Run locally
Open `index.html` in a modern browser. For the most reliable local storage behavior, serve this folder with a simple local server, e.g. VS Code Live Server or `python -m http.server 8000`, then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Create a new GitHub repository, e.g. `alpha-forex-academy`.
2. Upload the files and commit them to the `main` branch, preserving `.github/workflows/deploy.yml`.
3. In repository **Settings → Pages**, set the build/deployment source to **GitHub Actions**.
4. Push a commit to `main` or run the workflow from **Actions**.
5. After the workflow succeeds, GitHub shows the published URL in the deployment environment.

## Important limitations
- Progress and journal data are stored only in the current browser's local storage. They are not user accounts, cloud backups, or synced between devices.
- Resource links are a small starter list. Check each provider's current terms, access, and licensing before embedding, downloading, copying, or redistributing material.
- No live market feed, broker connection, trade execution, authentication, or financial advice is included.
- The risk calculator assumes the entered pip value is for one standard lot in the account currency; FX pip values vary by pair, quote currency, lot size and account currency. It ignores spread, commission, swaps and slippage.
- This project is educational, not investment advice or a promise of trading results.

## Roadmap
1. Expand original lessons, quizzes, glossary and examples.
2. Add resource metadata, source review dates, license/embedding permissions and report-link workflow.
3. Add CSV export/import for journal and progress.
4. Add historical chart replay and backtesting only with properly licensed data.
5. Add authentication/cloud sync only if needed, with privacy and security review.
