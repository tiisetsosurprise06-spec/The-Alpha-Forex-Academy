import React from 'react';
import { loadProgress } from '../utils/storage';

export default function Dashboard(){
  const progress = loadProgress();
  const completed = progress?.completedLessons ? Object.keys(progress.completedLessons).length : 0;
  return (
    <div>
      <div className="card">
        <h2>Your learning dashboard</h2>
        <p className="small-muted">Progress is stored locally in your browser. Export or import progress in Settings.</p>
        <div style={{marginTop:12}}>
          <strong>{completed}</strong> lessons completed
        </div>
      </div>

      <div style={{height:12}} />

      <div className="card">
        <h3>Recommended next lesson</h3>
        <p>From the vertical slice, try "Candlestick anatomy" in Technical Analysis.</p>
      </div>
    </div>
  );
}
