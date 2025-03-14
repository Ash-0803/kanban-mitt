# Kanban Board Application

A beautiful and functional Kanban board built with React, TypeScript, and Tailwind CSS. This application allows users to manage tasks across different stages with drag-and-drop functionality and search capabilities.

## Coding Practices

- **Code Consistency**: Follow consistent coding styles and conventions throughout the project.
- **Type Safety**: Utilize TypeScript to ensure type safety and reduce runtime errors.
- **Component Reusability**: Design components to be reusable and maintainable.
- **State Management**: Use Zustand for efficient and scalable state management.
- **Responsive Design**: Ensure the application is responsive and works well on various devices.
- **Testing**: Write unit and integration tests to maintain code quality and reliability.

## Features

- Four-column Kanban board (To Do, In Progress, Peer Review, Done)
- Drag and drop tasks between columns
- Search functionality to filter tasks
- Add new tasks with title and description
- Responsive design
- Clean and modern UI
- State management with Zustand

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Lucide React (Icons)

## Project Structure

```
src/
├── components/      # React components
├── store/          # Zustand store
├── types/          # TypeScript types
├── lib/            # Utility functions
└── App.tsx         # Main application component
```

## Usage

- To add a new task, click the "Add Task" button
- To move a task, drag and drop it to another column
- To search tasks, type in the search bar at the top
- Tasks are automatically saved to local storage

## Contributing

Feel free to submit issues and enhancement requests!
