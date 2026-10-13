// weather-dashboard/app.js
// Simple weather dashboard using Open-Meteo (no API key required)

const geocodeEndpoint = 'https://geocoding-api.open-meteo.com/v1/search';
const weatherEndpoint = 'https://api.open-meteo.com/v1/forecast';

const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const geoBtn = document.getElementById('geo-btn');
const resultsList = document.getElementById('results-list');
const currentCard = document.getElementById('current');
const placeEl = document.getElementById('place');
const tempEl = document.getElementById('temperature');
const descEl = document.getElementById('description');
const windEl = document.getElementById('wind');
const timeEl = document.getElementById('time');
const forecastCard = document.getElementById('forecast');
const forecastGrid = document.getElementById('forecast-grid');

function showError(msg){
  resultsList.innerHTML = `<div class="result-item">${msg}</div>`;
}

function weatherCodeToText(code){
  // basic mapping from Open-Meteo weathercode
  const map = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail'
  };
  return map[code] || 'Unknown';
}

async function geocode(name){
  const url = `${geocodeEndpoint}?name=${encodeURIComponent(name)}&count=6&language=en&format=json`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('Geocoding failed');
  const data = await res.json();
  return data.results || [];
}

async function fetchWeather(lat, lon, timezone = 'auto'){
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current_weather: 'true',
    daily: 'temperature_2m_max,temperature_2m_min,weathercode',
    timezone
  });
  const url = `${weatherEndpoint}?${params.toString()}`;
  const res = await fetch(url);
  if(!res.ok) throw new Error('Weather fetch failed');
  return res.json();
}

function renderResults(list){
  if(!list.length) return showError('No locations found. Try another search.');
  resultsList.innerHTML = '';
  list.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'result-item';
    el.textContent = `${loc.name}${loc.admin1 ? ', '+loc.admin1 : ''}${loc.country ? ' — '+loc.country : ''}`;
    el.addEventListener('click', ()=> selectLocation(loc));
    resultsList.appendChild(el);
  });
}

async function selectLocation(loc){
  resultsList.innerHTML = '';
  try{
    const data = await fetchWeather(loc.latitude, loc.longitude, loc.timezone || 'auto');
    showCurrent(loc, data.current_weather);
    showForecast(data.daily, loc.timezone || 'UTC');
  }catch(e){
    showError('Unable to fetch weather: '+e.message);
  }
}

function showCurrent(loc, current){
  currentCard.classList.remove('hidden');
  placeEl.textContent = `${loc.name}${loc.admin1 ? ', '+loc.admin1 : ''}${loc.country ? ' — '+loc.country : ''}`;
  tempEl.textContent = `${Math.round(current.temperature)}°C`;
  descEl.textContent = weatherCodeToText(current.weathercode);
  windEl.textContent = `${current.windspeed} m/s`;
  timeEl.textContent = new Date(current.time).toLocaleString();
}

function showForecast(daily, tz){
  forecastCard.classList.remove('hidden');
  forecastGrid.innerHTML = '';
  const dates = daily.time || [];
  const max = daily.temperature_2m_max || [];
  const min = daily.temperature_2m_min || [];
  const codes = daily.weathercode || [];
  for(let i=0;i<dates.length;i++){
    const day = document.createElement('div');
    day.className = 'forecast-day';
    const date = new Date(dates[i]);
    day.innerHTML = `
      <div class="day-date">${date.toLocaleDateString(undefined,{weekday:'short',month:'short',day:'numeric'})}</div>
      <div class="day-weather">${weatherCodeToText(codes[i])}</div>
      <div class="day-temp"><strong>${Math.round(max[i])}°</strong> / <span>${Math.round(min[i])}°</span></div>
    `;
    forecastGrid.appendChild(day);
  }
}

searchBtn.addEventListener('click', async ()=>{
  const q = cityInput.value.trim();
  if(!q) return;
  resultsList.innerHTML = '<div class="result-item">Searching…</div>';
  try{
    const list = await geocode(q);
    renderResults(list);
  }catch(e){
    showError('Search failed: '+e.message);
  }
});

cityInput.addEventListener('keydown', (e)=>{ if(e.key === 'Enter') searchBtn.click(); });

geoBtn.addEventListener('click', ()=>{
  if(!navigator.geolocation) return showError('Geolocation not supported');
  resultsList.innerHTML = '<div class="result-item">Determining location…</div>';
  navigator.geolocation.getCurrentPosition(async (pos)=>{
    const {latitude, longitude} = pos.coords;
    try{
      // reverse geocode by calling the geocoding endpoint with lat/lon
      const url = `${geocodeEndpoint}?latitude=${latitude}&longitude=${longitude}&count=1&format=json`;
      const res = await fetch(url);
      const data = await res.json();
      const loc = (data.results && data.results[0]) || {name: 'Current location', latitude, longitude, country: ''};
      selectLocation(loc);
    }catch(e){ showError('Reverse geocode failed: '+e.message); }
  }, (err)=>{ showError('Geolocation error: '+err.message); });
});

// initial demo: show weather for a default city
(async function init(){
  try{
    const demo = await geocode('London');
    if(demo && demo[0]) selectLocation(demo[0]);
  }catch(e){ /* ignore */ }
})();
