export interface Task {
  id: number;
  title: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}

export type NewTask = Omit<Task, 'id'>;
export type TaskUpdate = Partial<Task>;
