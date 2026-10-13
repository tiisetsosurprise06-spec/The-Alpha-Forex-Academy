import React, { useMemo, useState } from 'react';

export function JournalView() {
  const [entries, setEntries] = useState<Array<{ id: number; title: string; body: string; tags: string[] }>>([
    {
      id: 1,
      title: 'London session breakout',
      body: 'Felt good about the trend continuation. Planned R:R 1:2 and followed the process.',
      tags: ['London', 'breakout']
    }
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const summary = useMemo(() => `${entries.length} entries`, [entries]);

  const addEntry = () => {
    if (!title.trim() || !body.trim()) return;
    setEntries((prev) => [{ id: Date.now(), title, body, tags: ['manual'] }, ...prev]);
    setTitle('');
    setBody('');
  };

  return (
    <div className="card">
      <h3>Trading journal</h3>
      <p className="small-muted">{summary}</p>
      <div style={{ display: 'grid', gap: 10, marginBottom: 18 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Trade title" />
        <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="What happened, why, and what did you learn?" rows={4} />
        <button className="btn-primary" onClick={addEntry}>Add journal entry</button>
      </div>
      <div style={{ display: 'grid', gap: 10 }}>
        {entries.map((item) => (
          <div key={item.id} className="card" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <strong>{item.title}</strong>
            <p className="small-muted">{item.body}</p>
            <small>{item.tags.join(', ')}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
