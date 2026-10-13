import React, { useMemo, useState } from 'react';

export function RiskCalculator() {
  const [accountEquity, setAccountEquity] = useState(1000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entryPrice, setEntryPrice] = useState(1.1000);
  const [stopLossPrice, setStopLossPrice] = useState(1.0950);
  const [pipValue, setPipValue] = useState(10);

  const result = useMemo(() => {
    const riskAmount = (accountEquity * riskPercent) / 100;
    const stopDistance = Math.abs(entryPrice - stopLossPrice);
    const pipDistance = stopDistance * 10000;
    const positionSize = pipDistance > 0 ? riskAmount / (pipDistance * (pipValue / 10000)) : 0;
    return {
      riskAmount,
      stopDistance,
      pipDistance,
      positionSize,
      invalid: stopDistance <= 0 || riskPercent <= 0 || accountEquity <= 0
    };
  }, [accountEquity, riskPercent, entryPrice, stopLossPrice, pipValue]);

  return (
    <div className="card">
      <h3>Risk calculator</h3>
      <div style={{ display: 'grid', gap: 10, gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
        <label>Account equity <input type="number" value={accountEquity} onChange={(e) => setAccountEquity(Number(e.target.value))} /></label>
        <label>Risk % <input type="number" value={riskPercent} onChange={(e) => setRiskPercent(Number(e.target.value))} /></label>
        <label>Entry price <input type="number" step="0.0001" value={entryPrice} onChange={(e) => setEntryPrice(Number(e.target.value))} /></label>
        <label>Stop-loss price <input type="number" step="0.0001" value={stopLossPrice} onChange={(e) => setStopLossPrice(Number(e.target.value))} /></label>
        <label>Pip value per lot <input type="number" value={pipValue} onChange={(e) => setPipValue(Number(e.target.value))} /></label>
      </div>

      <div style={{ marginTop: 18, display: 'grid', gap: 6 }}>
        {result.invalid ? (
          <p className="small-muted">Invalid inputs. Entry and stop-loss prices must differ, and account/risk values must be positive.</p>
        ) : (
          <>
            <p>Risk amount: ${result.riskAmount.toFixed(2)}</p>
            <p>Stop distance: {result.stopDistance.toFixed(4)} price points</p>
            <p>Position size estimate: {result.positionSize.toFixed(2)} units</p>
            <p className="small-muted">Note: pip value depends on instrument and account currency. This is a simplified educational approximation.</p>
          </>
        )}
      </div>
    </div>
  );
}
