import { TaskState, TaskAction, Task } from '../types/TaskManager';

// TODO: Implement the reducer function
// 1. Handle ADD_TASK action
// 2. Handle UPDATE_TASK action
// 3. Handle DELETE_TASK action
// 4. Handle SET_FILTER action
// 5. Handle SET_SORT action
// Remember to keep the reducer pure!

export const initialState: TaskState = {
  tasks: [],
  filters: {},
  sort: {
    by: 'createdAt',
    order: 'desc',
  },
};

export function taskReducer(state: TaskState, action: TaskAction): TaskState {
  switch (action.type) {
    case 'ADD_TASK':
      return state; // TODO: Implement

    case 'UPDATE_TASK':
      return state; // TODO: Implement

    case 'DELETE_TASK':
      return state; // TODO: Implement

    case 'SET_FILTER':
      return state; // TODO: Implement

    case 'SET_SORT':
      return state; // TODO: Implement

    default:
      return state;
  }
}
