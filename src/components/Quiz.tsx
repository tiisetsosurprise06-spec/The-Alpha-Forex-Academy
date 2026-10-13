import React, { useState } from 'react';
import { QuizQuestion } from '../lib/types';

type Props = {
  questions: QuizQuestion[];
  onPass?: (score: number) => void;
  passingScore?: number;
};

export function Quiz({ questions, onPass, passingScore = 80 }: Props) {
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null);

  function choose(qid: string, value: any) {
    setAnswers((s) => ({ ...s, [qid]: value }));
  }

  function evaluate() {
    let correct = 0;
    let total = questions.length;
    const explanations: string[] = [];
    questions.forEach((q) => {
      const a = answers[q.id];
      if (q.type === 'tf') {
        const passed = String(a).toLowerCase() === String(q.answer).toLowerCase();
        if (passed) correct++;
        explanations.push(q.explanation || '');
      } else if (q.type === 'multiple') {
        const correctChoice = q.choices?.find((c) => c.correct);
        if (Array.isArray(a)) {
          // multiple-selection not used here
        } else {
          if (correctChoice && a === correctChoice.id) correct++;
        }
        explanations.push(q.explanation || (q.choices?.find(c=>c.correct)?.explanation||''));
      } else if (q.type === 'numeric') {
        const numeric = Number(a);
        if (!Number.isNaN(numeric) && Number(q.answer) === numeric) correct++;
        explanations.push(q.explanation || '');
      }
    });
    const score = Math.round((correct / total) * 100);
    const passed = score >= passingScore;
    setResult({ score, passed });
    if (passed && onPass) onPass(score);
  }

  if (!questions.length) return <div className="small-muted">No questions for this lesson.</div>;

  return (
    <div>
      <h4 className="mb-3">Lesson quiz</h4>
      <form onSubmit={(e) => { e.preventDefault(); evaluate(); }}>
        {questions.map((q, idx) => (
          <fieldset key={q.id} className="mb-4">
            <legend className="font-semibold">{idx + 1}. {q.prompt}</legend>
            {q.type === 'tf' && (
              <div>
                <label className="mr-4"><input type="radio" name={q.id} onChange={() => choose(q.id, 'true')} /> True</label>
                <label><input type="radio" name={q.id} onChange={() => choose(q.id, 'false')} /> False</label>
              </div>
            )}
            {q.type === 'multiple' && q.choices && (
              <div>
                {q.choices.map((c) => (
                  <div key={c.id}><label><input type="radio" name={q.id} onChange={() => choose(q.id, c.id)} /> {c.text}</label></div>
                ))}
              </div>
            )}
            {q.type === 'numeric' && (
              <div><input className="border p-2 rounded mt-2" type="number" onChange={(e)=>choose(q.id,e.target.value)} /></div>
            )}
          </fieldset>
        ))}
        <div className="flex gap-3">
          <button className="btn-primary" type="submit">Submit</button>
          <button type="button" onClick={()=>{ setAnswers({}); setResult(null); }} className="btn-secondary">Reset</button>
        </div>
      </form>
      {result && (
        <div className="mt-4 card">
          <strong>Score: {result.score}%</strong>
          <p>{result.passed ? 'Passed — you unlocked the next lesson.' : 'Did not pass — review the lesson and try again.'}</p>
        </div>
      )}
    </div>
  );
}
