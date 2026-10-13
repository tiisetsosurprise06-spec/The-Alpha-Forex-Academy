import { saveAs } from 'file-saver';
import { UserProgress } from '../lib/types';

const STORAGE_KEY = 'maniac_forex_progress_v1';

export function loadProgress(): UserProgress | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserProgress;
  } catch (e) {
    console.error('Failed to load progress', e);
    return null;
  }
}

export function saveProgress(progress: UserProgress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (e) {
    console.error('Failed to save progress', e);
    throw e;
  }
}

export function exportProgress(progress: UserProgress) {
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
  saveAs(blob, 'maniac-forex-progress.json');
}

export function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
}
