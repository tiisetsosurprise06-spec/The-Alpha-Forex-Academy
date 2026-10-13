import { describe, it, expect } from 'vitest'
import { loadProgress, saveProgress } from './storage'

describe('storage utilities', () => {
  it('saves and loads progress', () => {
    const sample = { curriculumVersion: '0.1.0', completedLessons: { 'l1-what-is-forex': { passedAt: new Date().toISOString(), attempts: 1 } }, quizAttempts: {}, unlockedLessons: [], journalEntries: [] } as any
    saveProgress(sample)
    const loaded = loadProgress()
    expect(loaded?.curriculumVersion).toBe('0.1.0')
    expect(loaded?.completedLessons['l1-what-is-forex']).toBeDefined()
  })
})
