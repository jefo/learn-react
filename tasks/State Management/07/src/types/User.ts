export interface UserDetails {
  age: number;
  location: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  details?: UserDetails;
}

export interface UserState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
  saving: boolean;
  saveError: string | null;
}

export type UserAction =
  | { type: 'FETCH_USERS_START' }
  | { type: 'FETCH_USERS_SUCCESS'; payload: User[] }
  | { type: 'FETCH_USERS_ERROR'; payload: string }
  | { type: 'SELECT_USER'; payload: User }
  | { type: 'UPDATE_USER_START' }
  | { type: 'UPDATE_USER_SUCCESS'; payload: User }
  | { type: 'UPDATE_USER_ERROR'; payload: string }
  | { type: 'CLEAR_SELECTED_USER' };
