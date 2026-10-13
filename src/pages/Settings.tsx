import React from 'react';
import { Link } from 'react-router-dom';

export default function Settings(){
  const progress = typeof window !== 'undefined' ? window.localStorage.getItem('maniac_forex_progress_v1') : null;

  function handleExport(){
    if(!progress) {
      alert('No progress to export');
      return;
    }
    const blob = new Blob([progress], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'maniac-forex-progress.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function handleReset(){
    if(confirm('Are you sure you want to reset all local progress? This cannot be undone.')){
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('maniac_forex_progress_v1');
      }
      alert('Progress reset');
      window.location.reload();
    }
  }

  return (
    <div>
      <div className="card">
        <h2>Settings & Data</h2>
        <p className="small-muted">Manage local progress and learning preferences.</p>
        <div style={{marginTop:12, display:'flex', gap:12, flexWrap:'wrap'}}>
          <button type="button" className="nav-link" onClick={handleExport}>Export progress</button>
          <button type="button" className="nav-link" onClick={handleReset}>Reset progress</button>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
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
