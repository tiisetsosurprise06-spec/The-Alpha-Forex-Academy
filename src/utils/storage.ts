import { saveAs } from 'file-saver';

export function getStorage(): Storage | null {
  if (typeof window === 'undefined') return null;
  return window.localStorage;
}

export function loadProgress(): any | null {
  const storage = getStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem('maniac_forex_progress_v1');
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    console.error('Could not parse progress from localStorage', err);
    return null;
  }
}

export function saveProgress(progress: any) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem('maniac_forex_progress_v1', JSON.stringify(progress));
}

export function exportProgress(progress: any) {
  if (typeof window === 'undefined') return;
  const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
  saveAs(blob, 'maniac-forex-progress.json');
}

export function resetProgress() {
  const storage = getStorage();
  if (!storage) return;
  storage.removeItem('maniac_forex_progress_v1');
}
