export type Curriculum = {
  version: string;
  levels: Level[];
};

export type Level = {
  id: string;
  title: string;
  description?: string;
  modules: Module[];
};

export type Module = {
  id: string;
  title: string;
  description?: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  estimatedMinutes?: number;
  content: ContentBlock[];
  quiz?: QuizQuestion[];
  prerequisites?: string[]; // lesson ids
};

export type ContentBlock =
  | { type: 'text'; title?: string; body: string }
  | { type: 'diagram'; name: string; props?: Record<string, any> }
  | { type: 'exercise'; id: string; description: string };

export type QuizQuestion = {
  id: string;
  type: 'multiple' | 'tf' | 'numeric';
  prompt: string;
  choices?: { id: string; text: string; correct?: boolean; explanation?: string }[];
  answer?: number | string; // for numeric or tf
  explanation?: string;
};

export type UserProgress = {
  curriculumVersion: string;
  completedLessons: Record<string, { passedAt: string; attempts: number }>; // lessonId
  quizAttempts: Record<string, { attemptAt: string; score: number; answers: any[] }[]>;
  unlockedLessons: string[];
  journalEntries: JournalEntry[];
  paperTrading?: any;
};

export type JournalEntry = {
  id: string;
  createdAt: string;
  title: string;
  body: string;
  tags?: string[];
};
