// app.js - simple static site client logic
const TOPICS = [
  {id:'intro', title:'Introduction to Forex', desc:'What forex is, how currency pairs work, major/minor/exotic pairs.'},
  {id:'market-structure', title:'Market Structure & Participants', desc:'Liquidity providers, brokers, ECNs, market sessions.'},
  {id:'charts-and-timeframes', title:'Charts & Timeframes', desc:'Candlesticks, renko, daily/4h/1h/15m usage.'},
  {id:'candlesticks', title:'Candlestick patterns', desc:'Reversals and continuation patterns.'},
  {id:'support-resistance', title:'Support & Resistance', desc:'Zones, flip levels, areas vs lines.'},
  {id:'trendlines', title:'Trendlines & Channels', desc:'Drawing, validation, breakouts.'},
  {id:'price-action', title:'Price Action Trading', desc:'Naked charts, order flow concepts, structure.'},
  {id:'indicators', title:'Technical Indicators', desc:'Moving averages, RSI, MACD, Bollinger Bands.'},
  {id:'volume-and-oi', title:'Volume & Orderflow basics', desc:'Volume, tick volume, reading interest.'},
  {id:'risk-management', title:'Risk Management', desc:'Position sizing, risk-reward, drawdown control.'},
  {id:'position-sizing', title:'Position Sizing & Money Management', desc:'Percent risk, Kelly, geometric returns.'},
  {id:'order-types', title:'Order Types & Execution', desc:'Market, limit, stop, slippage, fills.'},
  {id:'fundamental', title:'Fundamental Analysis', desc:'Economic indicators, interest rates, CPI, GDP.'},
  {id:'news-trading', title:'News & Event Trading', desc:'Preparing for NFP, GDP, refining entries.'},
  {id:'backtesting', title:'Backtesting & Journaling', desc:'Building tests, sample sizes, journaling trades.'},
  {id:'psychology', title:'Trading Psychology', desc:'Biases, emotional control, routine.'},
  {id:'strategies', title:'Strategy Development', desc:'Edge, rules, optimization vs overfitting.'},
  {id:'algo', title:'Algorithmic Trading & Automation', desc:'Basic algos, indicators to code, platforms (MT4/MT5, Python).'},
  {id:'platforms', title:'Platforms & Tools', desc:'MT4/MT5, TradingView, brokers, demo accounts.'},
  {id:'brokers', title:'Choosing a Broker', desc:'Regulation, spreads, execution, accounts.'},
  {id:'session-overview', title:'Session Times & Correlations', desc:'London/NY/Tokyo session behavior, pair correlations.'},
  {id:'trading-types', title:'Scalping, Day & Swing Trading', desc:'Styles, timeframe selection.'},
  {id:'taxes-legal', title:'Taxes & Legal', desc:'Record keeping, tax basics (depends on your jurisdiction).'},
  {id:'advanced', title:'Advanced Topics', desc:'Intermarket analysis, macro, carry trade, volatility trading.'}
];

const RESOURCES = [
  {type:'channel', name:'Rayner Teo', url:'https://www.youtube.com/@RaynerTeo'},
  {type:'channel', name:'The Trading Channel', url:'https://www.youtube.com/c/TheTradingChannel'},
  {type:'channel', name:'No Nonsense Forex', url:'https://www.youtube.com/c/NoNonsenseForexOfficial'},
  {type:'channel', name:'Adam Khoo', url:'https://www.youtube.com/user/AdamKhooLearningCentre'},
  {type:'channel', name:'UKspreadbetting', url:'https://www.youtube.com/c/UKspreadbetting'},
  {type:'site', name:'BabyPips School of Pipsology', url:'https://www.babypips.com/learn/forex'},
  {type:'tool', name:'TradingView (Charts & Ideas)', url:'https://www.tradingview.com'},
  {type:'tool', name:'Forex Factory (Economic calendar & forum)', url:'https://www.forexfactory.com'}
];

// Storage key
const STORAGE_KEY = 'alpha_forex_progress_v1';

function loadProgress(){
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') } catch(e){ return {} }
}
function saveProgress(p){ localStorage.setItem(STORAGE_KEY, JSON.stringify(p)) }

function renderTopics(filter){
  const list = document.getElementById('topic-list');
  list.innerHTML = '';
  const progress = loadProgress();
  const filtered = TOPICS.filter(t => !filter || (t.title+ ' ' + t.desc).toLowerCase().includes(filter));
  filtered.forEach(t => {
    const li = document.createElement('li'); li.className = 'topic';

    const cb = document.createElement('input'); cb.type='checkbox'; cb.className='checkbox'; cb.checked = !!progress[t.id];
    cb.onchange = ()=>{ progress[t.id]=cb.checked; saveProgress(progress); updateProgress(); };

    const meta = document.createElement('div');
    const h = document.createElement('h3'); h.textContent = t.title;
    const p = document.createElement('p'); p.textContent = t.desc;
    meta.appendChild(h); meta.appendChild(p);

    li.appendChild(cb); li.appendChild(meta);
    list.appendChild(li);
  });
}

function renderResources(filter){
  const container = document.getElementById('resource-list');
  container.innerHTML = '';
  const filtered = RESOURCES.filter(r => !filter || (r.name + ' ' + r.type).toLowerCase().includes(filter));
  filtered.forEach(r => {
    const div = document.createElement('div'); div.className='resource-item';
    const a = document.createElement('a'); a.href=r.url; a.target='_blank'; a.textContent=r.name + (r.type? ' ('+r.type+')' : '');
    div.appendChild(a);
    container.appendChild(div);
  })
}

function updateProgress(){
  const progress = loadProgress();
  const total = TOPICS.length;
  const done = Object.keys(progress).filter(k=>progress[k]).length;
  const pct = Math.round((done/total)*100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${done} / ${total} topics completed (${pct}%)`;
}

function exportProgress(){
  const data = localStorage.getItem(STORAGE_KEY) || '{}';
  const blob = new Blob([data], {type:'application/json'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'alpha-forex-progress.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function importProgressFile(file){
  const reader = new FileReader();
  reader.onload = ()=>{
    try{ const parsed = JSON.parse(reader.result);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
      renderTopics(document.getElementById('search').value.trim().toLowerCase());
      updateProgress();
      alert('Progress imported');
    } catch(e){ alert('Import failed: invalid file') }
  }
  reader.readAsText(file);
}

// init
window.addEventListener('DOMContentLoaded', ()=>{
  renderTopics(); renderResources(); updateProgress();
  document.getElementById('search').addEventListener('input', e=>{
    const q = e.target.value.trim().toLowerCase(); renderTopics(q); renderResources(q);
  });
  document.getElementById('export').addEventListener('click', exportProgress);
  const importBtn = document.getElementById('import');
  importBtn.addEventListener('click', ()=>document.getElementById('import-file').click());
  document.getElementById('import-file').addEventListener('change', e=>{
    const f = e.target.files[0]; if(f) importProgressFile(f);
  });
});
