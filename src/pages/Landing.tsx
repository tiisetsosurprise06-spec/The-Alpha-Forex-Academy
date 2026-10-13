import React from 'react';

export default function Landing(){
  return (
    <div>
      <div className="card">
        <h1>Welcome to Maniac Forex Academy</h1>
        <p className="small-muted">A free, structured forex curriculum with interactive lessons, quizzes, and a paper-trading lab. This demo implements Stage A and a vertical slice of Stage B.</p>
        <div style={{marginTop:12}}>
          <a className="nav-link" href="/academy">Start learning →</a>
        </div>
      </div>

      <div style={{height:16}} />

      <div className="card">
        <h3>Mission</h3>
        <p>Provide transparent, evidence-based forex education. Learn the mechanics, the math, and how to test strategies without risking real capital.</p>
      </div>
    </div>
  );
}
