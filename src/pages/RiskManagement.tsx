import React from 'react';
import { RiskCalculator } from '../components/RiskCalculator';
import { TradingLabBoard } from '../components/TradingLabBoard';
import { JournalView } from '../components/JournalView';

export default function RiskManagementPage() {
  return (
    <div>
      <div className="card">
        <h2>Risk Management</h2>
        <p className="small-muted">Protect capital with rules, position sizing, and disciplined trade planning.</p>
      </div>
      <div style={{ marginTop: 16 }}>
        <RiskCalculator />
      </div>
    </div>
  );
}
