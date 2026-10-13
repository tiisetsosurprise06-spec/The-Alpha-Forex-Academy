import React from 'react';
import { loadProgress, exportProgress, resetProgress } from '../utils/storage';

export default function Settings(){
  const progress = loadProgress();

  function handleExport(){
    if(progress) exportProgress(progress as any);
    else alert('No progress to export');
  }

  function handleReset(){
    if(confirm('Are you sure you want to reset all local progress? This cannot be undone.')){
      resetProgress();
      alert('Progress reset');
      location.reload();
    }
  }

  return (
    <div>
      <div className="card">
        <h2>Settings & Data</h2>
        <p className="small-muted">Manage local progress and learning preferences.</p>
        <div style={{marginTop:12}}>
          <button className="nav-link" onClick={handleExport}>Export progress</button>
          <button className="nav-link" onClick={handleReset} style={{marginLeft:12}}>Reset progress</button>
        </div>
      </div>

      <div style={{height:12}} />

      <div className="card">
        <h3>Disclaimer</h3>
        <p className="small-muted">Forex is high risk. This platform provides educational materials only and is not financial advice.</p>
      </div>
    </div>
  );
}
