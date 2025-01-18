export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface SearchState {
  query: string;
  results: User[];
  loading: boolean;
  error: string | null;
}
