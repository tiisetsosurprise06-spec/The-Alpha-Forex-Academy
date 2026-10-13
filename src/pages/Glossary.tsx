import React from 'react';
import { glossaryTerms } from '../data/resources';

export default function GlossaryPage() {
  const [query, setQuery] = React.useState('');
  const filtered = glossaryTerms.filter((item) => `${item.term} ${item.definition}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <div className="card">
        <h2>Glossary</h2>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search glossary" style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
        {filtered.map((item) => (
          <div key={item.term} className="card">
            <h3>{item.term}</h3>
            <p>{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
