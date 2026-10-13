import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { curriculum } from '../data/curriculum';
import { DiagramRenderer } from '../components/DiagramRenderer';
import { Quiz } from '../components/Quiz';
import { loadProgress, saveProgress } from '../utils/storage';

export default function LessonPage(){
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState<any | null>(null);
  const [progress, setProgress] = useState(loadProgress());

  useEffect(()=>{
    let found: any = null;
    for(const level of curriculum.levels){
      for(const mod of level.modules){
        const l = mod.lessons.find(ls=>ls.id===lessonId);
        if(l){ found = l; break; }
      }
      if(found) break;
    }
    setLesson(found);
  },[lessonId]);

  function handlePass(score:number){
    const now = new Date().toISOString();
    const p = progress || { curriculumVersion: curriculum.version, completedLessons: {}, quizAttempts: {}, unlockedLessons: [], journalEntries: [] };
    p.curriculumVersion = curriculum.version;
    p.completedLessons = p.completedLessons || {};
    p.completedLessons[lessonId!] = { passedAt: now, attempts: (p.completedLessons[lessonId!]?.attempts || 0) + 1 };
    p.quizAttempts = p.quizAttempts || {};
    p.quizAttempts[lessonId!] = p.quizAttempts[lessonId!] || [];
    p.quizAttempts[lessonId!].push({ attemptAt: now, score, answers: [] });
    saveProgress(p);
    setProgress(p);
    // simple flow: after pass, go back to academy
    setTimeout(()=>navigate('/academy'),1200);
  }

  if(!lesson) return <div className="card">Lesson not found.</div>;

  return (
    <div>
      <div className="card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <h2>{lesson.title}</h2>
            <p className="small-muted">Estimated: {lesson.estimatedMinutes} minutes</p>
          </div>
          <div>
            <Link to="/academy" className="nav-link">Back to Academy</Link>
          </div>
        </div>
        <hr style={{borderColor:'rgba(255,255,255,0.04)',margin:'12px 0'}} />
        <div>
          {lesson.content.map((block:any, idx:number)=>{
            if(block.type==='text') return (<section key={idx}><h4>{block.title}</h4><p className="small-muted">{block.body}</p></section>);
            if(block.type==='diagram') return (<section key={idx}><h4>{block.name}</h4><DiagramRenderer name={block.name} props={block.props} /></section>);
            if(block.type==='exercise') return (<section key={idx}><h4>Exercise</h4><p className="small-muted">{block.description}</p></section>);
            return null;
          })}
        </div>
      </div>

      <div style={{height:12}} />

      <div className="card">
        <Quiz questions={lesson.quiz || []} onPass={handlePass} />
      </div>
    </div>
  );
}
