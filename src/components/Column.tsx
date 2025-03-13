import React from 'react';
import { TaskCard } from './TaskCard';
import { Task, TaskStatus } from '../types/task';
import { useTaskStore } from '../store/useTaskStore';
import { cn } from '../lib/utils';

interface ColumnProps {
  title: string;
  status: TaskStatus;
  tasks: Task[];
}

export const Column: React.FC<ColumnProps> = ({ title, status, tasks }) => {
  const moveTask = useTaskStore((state) => state.moveTask);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    moveTask(taskId, status);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={cn(
        'bg-gray-100 rounded-lg p-4 min-h-[500px] w-full',
        'flex flex-col'
      )}
    >
      <h2 className="font-bold text-lg mb-4 text-gray-700">{title}</h2>
      <div className="flex-1">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};