# The Alpha Forex Academy

This repository contains a static, open-source scaffold for a free Forex course website. It aims to:

- Provide a complete list of important forex topics, organized for learning.
- Curate free resources and YouTube channels for each topic.
- Let learners track progress locally (in their browser) and export/import progress.

What's included
- index.html — frontend for the course and progress tracker
- styles.css — simple styling
- app.js — client logic, topics and resource data, localStorage progress

How to contribute
- Add resources to the RESOURCES array in app.js or add a JSON file and fetch it from the site.
- Add more topics to the TOPICS array in app.js.
- Open issues and pull requests with curated links, timestamps, and short descriptions so others can verify the resource is still free.

Deployment
- This is a static site and can be hosted on GitHub Pages, Netlify, Vercel, or any static hosting.
- To enable GitHub Pages, configure the repository settings -> Pages -> deploy from the `main` branch (root).

Next improvements (suggestions)
- Add per-topic pages with embedded playlists and timestamps.
- Add tagging and difficulty levels for topics.
- Add server-side user accounts to persist progress across devices (requires a backend).
- Add automated link-checking (CI) to validate that YouTube links remain available.

License
- Add a license if you want to set reuse permissions. Currently the repository has no explicit license file.
