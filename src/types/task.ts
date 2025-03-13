export type TaskStatus = 'todo' | 'in-progress' | 'peer-review' | 'done';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}