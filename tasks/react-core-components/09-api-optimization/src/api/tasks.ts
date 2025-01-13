import { Task, NewTask, TaskUpdate } from '../types/task';

// Имитация задержки сети
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// API клиент с искусственными задержками
export const api = {
  getTasks: async (): Promise<Task[]> => {
    await delay(1000); // Имитация медленного API
    return fetch('/api/tasks').then(res => res.json());
  },

  getTask: async (id: number): Promise<Task> => {
    await delay(500);
    return fetch(`/api/tasks/${id}`).then(res => res.json());
  },

  createTask: async (task: NewTask): Promise<Task> => {
    await delay(800);
    return fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task)
    }).then(res => res.json());
  },

  updateTask: async (id: number, updates: TaskUpdate): Promise<Task> => {
    await delay(600);
    return fetch(`/api/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates)
    }).then(res => res.json());
  },

  deleteTask: async (id: number): Promise<void> => {
    await delay(700);
    return fetch(`/api/tasks/${id}`, {
      method: 'DELETE'
    }).then(() => undefined);
  }
};
