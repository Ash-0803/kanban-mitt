import { create } from 'zustand';
import { Task, TaskStatus } from '../types/task';

interface TaskStore {
  tasks: Task[];
  searchQuery: string;
  addTask: (title: string, description: string) => void;
  moveTask: (taskId: string, newStatus: TaskStatus) => void;
  setSearchQuery: (query: string) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  searchQuery: '',
  
  addTask: (title: string, description: string) => {
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: crypto.randomUUID(),
          title,
          description,
          status: 'todo',
          createdAt: new Date(),
        },
      ],
    }));
  },
  
  moveTask: (taskId: string, newStatus: TaskStatus) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ),
    }));
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query });
  },
}));