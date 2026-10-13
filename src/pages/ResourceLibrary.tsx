import React from 'react';
import { resourceLibrary } from '../data/resources';

export default function ResourceLibraryPage() {
  const [query, setQuery] = React.useState('');
  const filtered = resourceLibrary.filter((item) => {
    const q = query.toLowerCase();
    if (!q) return true;
    return `${item.title} ${item.publisher} ${item.type} ${item.description}`.toLowerCase().includes(q);
  });

  return (
    <div>
      <div className="card">
        <h2>Free Resource Library</h2>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search resources" style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
        {filtered.map((item) => (
          <div key={item.id} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
              <h3>{item.title}</h3>
              <span className="small-muted">{item.type}</span>
            </div>
            <p className="small-muted">{item.publisher}</p>
            <p>{item.description}</p>
            <p className="small-muted">Licence: {item.licence}</p>
            <a href={item.url} target="_blank" rel="noreferrer">Open resource</a>
          </div>
        ))}
      </div>
    </div>
  );
}
