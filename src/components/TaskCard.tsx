import React from 'react';
import { Task } from '../types/task';
import { cn } from '../lib/utils';

interface TaskCardProps {
  task: Task;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={cn(
        'bg-white rounded-lg shadow-md p-4 mb-3 cursor-move',
        'hover:shadow-lg transition-shadow duration-200',
        'border-l-4',
        {
          'border-blue-500': task.status === 'todo',
          'border-yellow-500': task.status === 'in-progress',
          'border-purple-500': task.status === 'peer-review',
          'border-green-500': task.status === 'done',
        }
      )}
    >
      <h3 className="font-semibold text-gray-800 mb-2">{task.title}</h3>
      <p className="text-gray-600 text-sm line-clamp-2">{task.description}</p>
    </div>
  );
};