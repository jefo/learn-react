import { useState } from 'react';
import { TaskItem } from './components/TaskItem';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { id: 1, title: 'Learn React', completed: false },
  { id: 2, title: 'Master TypeScript', completed: false },
  { id: 3, title: 'Build Projects', completed: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [counter, setCounter] = useState(0);

  const handleToggle = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // This causes unnecessary re-renders of all TaskItems
  const handleClick = () => {
    setCounter(c => c + 1);
  };

  return (
    <div className="app">
      <h1>Task List</h1>
      <div>Counter: {counter}</div>
      <button onClick={handleClick}>Increment Counter</button>
      
      <div className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
