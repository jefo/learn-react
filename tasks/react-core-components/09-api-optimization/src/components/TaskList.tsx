import { useState, useEffect } from 'react';
import { Task } from '../types/task';
import { api } from '../api/tasks';
import { format } from 'date-fns';

export function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Загрузка задач без кэширования
  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await api.getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks');
    } finally {
      setLoading(false);
    }
  };

  // Обновление без оптимистичных обновлений
  const toggleComplete = async (taskId: number) => {
    try {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;

      await api.updateTask(taskId, { completed: !task.completed });
      await loadTasks(); // Перезагрузка всего списка
    } catch (err) {
      setError('Failed to update task');
    }
  };

  // Создание без оптимистичных обновлений
  const createTask = async (title: string) => {
    try {
      await api.createTask({
        title,
        completed: false,
        priority: 'medium',
        dueDate: new Date().toISOString()
      });
      await loadTasks(); // Перезагрузка всего списка
    } catch (err) {
      setError('Failed to create task');
    }
  };

  // Удаление без оптимистичных обновлений
  const deleteTask = async (taskId: number) => {
    try {
      await api.deleteTask(taskId);
      await loadTasks(); // Перезагрузка всего списка
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  if (loading) {
    return <div>Loading tasks...</div>;
  }

  if (error) {
    return (
      <div>
        Error: {error}
        <button onClick={loadTasks}>Retry</button>
      </div>
    );
  }

  return (
    <div className="task-list">
      <div className="task-controls">
        <button
          onClick={() => createTask(`New Task ${tasks.length + 1}`)}
          className="create-task-btn"
        >
          Add Task
        </button>
      </div>

      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />
          <div className="task-details">
            <h3>{task.title}</h3>
            <div className="task-meta">
              <span className={`priority ${task.priority}`}>
                {task.priority}
              </span>
              <span className="due-date">
                Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
              </span>
            </div>
          </div>
          <button
            onClick={() => deleteTask(task.id)}
            className="delete-task-btn"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
