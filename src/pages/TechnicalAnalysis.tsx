import React from 'react';
import { DiagramRenderer } from '../components/DiagramRenderer';

export default function TechnicalAnalysis(){
  return (
    <div>
      <div className="card">
        <h2>Technical Analysis hub</h2>
        <p className="small-muted">Interactive diagrams and charting exercises (vertical slice provides diagrams).</p>
      </div>

      <div style={{height:12}} />

      <div className="card">
        <h3>Candlestick anatomy</h3>
        <DiagramRenderer name="candlestick-anatomy" />
      </div>
    </div>
  );
}
