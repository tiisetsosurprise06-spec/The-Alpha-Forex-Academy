import React from 'react';

type DiagramProps = { name: string; props?: Record<string, any> };

export function DiagramRenderer({ name, props }: DiagramProps) {
  // Minimal but accessible SVG diagrams for the vertical slice
  switch (name) {
    case 'candlestick-anatomy':
      return (
        <figure aria-label="Candlestick anatomy diagram">
          <svg width="100%" height="140" viewBox="0 0 600 140" role="img" aria-labelledby="candleTitle">
            <title id="candleTitle">Candlestick anatomy with open high low close labels</title>
            <rect x="0" y="0" width="600" height="140" fill="none" />
            {/* Price axis left */}
            <line x1="80" y1="10" x2="80" y2="130" stroke="#4b5563" />

            {/* Bullish candle */}
            {/* wick */}
            <line x1="170" y1="20" x2="170" y2="110" stroke="#22c55e" strokeWidth="4" />
            {/* body */}
            <rect x="150" y="50" width="40" height="30" fill="#22c55e" stroke="#0f766e" rx="3" />
            <text x="200" y="58" fill="#a7f3d0">Open</text>
            <text x="200" y="78" fill="#a7f3d0">Close</text>

            {/* Bearish candle */}
            <line x1="360" y1="30" x2="360" y2="120" stroke="#ef4444" strokeWidth="4" />
            <rect x="340" y="60" width="40" height="25" fill="#ef4444" stroke="#7f1d1d" rx="3" />
            <text x="300" y="70" fill="#fecaca">High</text>
            <text x="300" y="110" fill="#fecaca">Low</text>

            <rect x="120" y="8" width="360" height="124" fill="none" stroke="rgba(255,255,255,0.03)" rx="6" />
            <figcaption style={{color:'#9CA8A0',marginTop:6}}>This diagram shows the anatomy of bullish (green) and bearish (red) candlesticks. Notice body and wicks.</figcaption>
          </svg>
        </figure>
      );
    case 'market-participants':
      return (
        <figure>
          <svg width="100%" height="160" viewBox="0 0 600 160" role="img" aria-labelledby="mpTitle">
            <title id="mpTitle">Market participants: banks, retail, HFT, brokers</title>
            <rect x="20" y="20" width="120" height="80" rx="8" fill="#0f1724" stroke="#1f2937" />
            <text x="30" y="60" fill="#F3F5F4">Banks / Liquidity providers</text>
            <rect x="220" y="20" width="120" height="80" rx="8" fill="#0f1724" stroke="#1f2937" />
            <text x="240" y="60" fill="#F3F5F4">Retail traders</text>
            <rect x="420" y="20" width="120" height="80" rx="8" fill="#0f1724" stroke="#1f2937" />
            <text x="440" y="60" fill="#F3F5F4">Brokers / ECNs</text>
            <line x1="140" y1="60" x2="220" y2="60" stroke="#6EE7B7" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="340" y1="60" x2="420" y2="60" stroke="#60A5FA" strokeWidth="2" strokeDasharray="4 4" />
            <figcaption style={{color:'#9CA8A0',marginTop:6}}>FX participants interact across OTC venues; this is a simplified illustration for learners.</figcaption>
          </svg>
        </figure>
      );
    case 'pip-example':
      return (
        <figure>
          <svg width="100%" height="100" viewBox="0 0 600 100" role="img" aria-labelledby="pipTitle">
            <title id="pipTitle">Pip calculation example</title>
            <text x="20" y="30" fill="#F3F5F4">EUR/USD: 1.1200 → 1.1250</text>
            <text x="20" y="60" fill="#9CA8A0">Pip move = 0.0050 = 50 pips</text>
            <text x="20" y="80" fill="#9CA8A0">If one standard lot (100,000) = $10 per pip → 50 × $10 = $500</text>
          </svg>
        </figure>
      );
    default:
      return <div className="small-muted">Diagram "{name}" not found.</div>;
  }
}
