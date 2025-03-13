import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';
import { Column } from './components/Column';
import { AddTaskDialog } from './components/AddTaskDialog';
import { useTaskStore } from './store/useTaskStore';

const COLUMNS = [
  { title: 'To Do', status: 'todo' },
  { title: 'In Progress', status: 'in-progress' },
  { title: 'Peer Review', status: 'peer-review' },
  { title: 'Done', status: 'done' },
] as const;

function App() {
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const { tasks, searchQuery, setSearchQuery } = useTaskStore();

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Kanban Board</h1>
          <button
            onClick={() => setIsAddTaskOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus size={20} />
            Add Task
          </button>
        </div>

        <div className="relative mb-6">
          <Search
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLUMNS.map(({ title, status }) => (
            <Column
              key={status}
              title={title}
              status={status}
              tasks={filteredTasks.filter((task) => task.status === status)}
            />
          ))}
        </div>

        <AddTaskDialog
          isOpen={isAddTaskOpen}
          onClose={() => setIsAddTaskOpen(false)}
        />
      </div>
    </div>
  );
}

export default App;