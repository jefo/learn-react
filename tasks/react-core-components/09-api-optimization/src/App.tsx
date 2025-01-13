import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TaskList } from './components/TaskList';

// Инициализация MSW
if (process.env.NODE_ENV === 'development') {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

function App() {
  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;
