export interface User {
  id: number;
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  department: string;
  status: 'active' | 'inactive';
  lastActive: string;
  performance: number;
}
