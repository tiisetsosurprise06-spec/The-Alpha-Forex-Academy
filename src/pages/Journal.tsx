import React from 'react';
import { JournalView } from '../components/JournalView';

export default function JournalPage() {
  return (
    <div>
      <div className="card">
        <h2>Trading Journal</h2>
        <p className="small-muted">Track observations, setups, and lessons.</p>
      </div>
      <div style={{ marginTop: 16 }}>
        <JournalView />
      </div>
    </div>
  );
}
