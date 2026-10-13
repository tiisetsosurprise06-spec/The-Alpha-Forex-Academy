import React from 'react';
import { TradingLabBoard } from '../components/TradingLabBoard';

export default function TradingLabPage() {
  return (
    <div>
      <div className="card">
        <h2>Trading Lab</h2>
        <p className="small-muted">Offline paper trading practice with sample data and educational simulations.</p>
      </div>
      <div style={{ marginTop: 16 }}>
        <TradingLabBoard />
      </div>
    </div>
  );
}
