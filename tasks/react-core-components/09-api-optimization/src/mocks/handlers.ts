import { rest } from 'msw';
import { Task } from '../types/task';

let tasks: Task[] = [
  {
    id: 1,
    title: 'Complete project documentation',
    completed: false,
    priority: 'high',
    dueDate: '2025-01-20'
  },
  {
    id: 2,
    title: 'Review pull requests',
    completed: true,
    priority: 'medium',
    dueDate: '2025-01-15'
  },
  {
    id: 3,
    title: 'Setup development environment',
    completed: false,
    priority: 'low',
    dueDate: '2025-01-18'
  }
];

let nextId = 4;

export const handlers = [
  // GET /api/tasks
  rest.get('/api/tasks', (_, res, ctx) => {
    return res(ctx.json(tasks));
  }),

  // GET /api/tasks/:id
  rest.get('/api/tasks/:id', (req, res, ctx) => {
    const { id } = req.params;
    const task = tasks.find(t => t.id === Number(id));
    if (!task) {
      return res(ctx.status(404));
    }
    return res(ctx.json(task));
  }),

  // POST /api/tasks
  rest.post('/api/tasks', async (req, res, ctx) => {
    const task = await req.json();
    const newTask = {
      ...task,
      id: nextId++
    };
    tasks.push(newTask);
    return res(ctx.json(newTask));
  }),

  // PATCH /api/tasks/:id
  rest.patch('/api/tasks/:id', async (req, res, ctx) => {
    const { id } = req.params;
    const updates = await req.json();
    const index = tasks.findIndex(t => t.id === Number(id));
    
    if (index === -1) {
      return res(ctx.status(404));
    }

    tasks[index] = { ...tasks[index], ...updates };
    return res(ctx.json(tasks[index]));
  }),

  // DELETE /api/tasks/:id
  rest.delete('/api/tasks/:id', (req, res, ctx) => {
    const { id } = req.params;
    const index = tasks.findIndex(t => t.id === Number(id));
    
    if (index === -1) {
      return res(ctx.status(404));
    }

    tasks = tasks.filter(t => t.id !== Number(id));
    return res(ctx.status(200));
  })
];
