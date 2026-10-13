Weather Dashboard

This is a small static weather dashboard that uses Open‑Meteo's free APIs (no API key needed).

Files in this folder:
- index.html — dashboard UI
- styles.css — basic styling
- app.js — client logic: geocoding, fetching current weather and 7-day forecast

How it works:
- City search uses Open‑Meteo Geocoding API: https://geocoding-api.open-meteo.com
- Weather data fetched from Open‑Meteo Forecast API: https://api.open-meteo.com
- Demo defaults to London on load. Use the search box or "Use my location" to get local weather.

Notes & next steps you might want to add:
- Add icons for weather codes (SVGs or icon font).
- Add units toggle (Celsius / Fahrenheit) and wind unit conversion.
- Cache recent searches in localStorage and allow bookmarking locations.
- Add hourly forecasts and charts (e.g., simple temperature sparkline).

Deploy:
- This is a static folder — deploy with GitHub Pages, Netlify, Vercel, or any static host.

License
- Add a LICENSE if you want to set explicit reuse terms.
