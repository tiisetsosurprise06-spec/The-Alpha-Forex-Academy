import React from 'react';
import { curriculum } from '../data/curriculum';
import { Link } from 'react-router-dom';

export default function Academy(){
  return (
    <div>
      <div className="card">
        <h2>Curriculum map</h2>
        <p className="small-muted">Browse levels, modules, and lessons. Complete quizzes to unlock progress.</p>
      </div>

      <div style={{height:12}} />

      {curriculum.levels.map(level => (
        <section key={level.id} style={{marginBottom:18}}>
          <h3>{level.title}</h3>
          <p className="small-muted">{level.description}</p>
          <div style={{display:'grid',gap:8,marginTop:8}}>
            {level.modules.map(mod => (
              <div key={mod.id} className="card">
                <h4>{mod.title}</h4>
                <p className="small-muted">{mod.description}</p>
                <ul style={{marginTop:8}}>
                  {mod.lessons.map(lesson => (
                    <li key={lesson.id}><Link to={`/lesson/${lesson.id}`} className="nav-link">{lesson.title}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
