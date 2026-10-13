import React, { useMemo, useState } from 'react';

export function TradingLabBoard() {
  const [balance, setBalance] = useState(10000);
  const [entry, setEntry] = useState(1.1000);
  const [exit, setExit] = useState(1.1080);
  const [position, setPosition] = useState('long');
  const [lotSize, setLotSize] = useState(0.5);

  const pnl = useMemo(() => {
    const diff = position === 'long' ? exit - entry : entry - exit;
    const pipValue = 10 * lotSize;
    const result = diff * 10000 * pipValue;
    return result;
  }, [balance, entry, exit, position, lotSize]);

  return (
    <div className="card">
      <h3>Paper trading lab</h3>
      <div style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
        <label>Balance <input type="number" value={balance} onChange={(e) => setBalance(Number(e.target.value))} /></label>
        <label>Entry <input type="number" step="0.0001" value={entry} onChange={(e) => setEntry(Number(e.target.value))} /></label>
        <label>Exit <input type="number" step="0.0001" value={exit} onChange={(e) => setExit(Number(e.target.value))} /></label>
        <label>Direction
          <select value={position} onChange={(e) => setPosition(e.target.value)}>
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
        </label>
        <label>Lot size <input type="number" step="0.1" value={lotSize} onChange={(e) => setLotSize(Number(e.target.value))} /></label>
      </div>
      <div style={{ marginTop: 20 }}>
        <p>Simulated P/L: ${pnl.toFixed(2)}</p>
        <p className="small-muted">This is a paper-trading simulation using sample data only. It is not real execution or lit market data.</p>
      </div>
    </div>
  );
}
