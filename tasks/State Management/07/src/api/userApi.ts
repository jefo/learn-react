import { User } from '../types/User';

const BASE_URL = '/api';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    throw new ApiError(response.status, await response.text());
  }
  return response.json();
}

export const userApi = {
  async getUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`);
    return handleResponse<User[]>(response);
  },

  async getUser(id: number): Promise<User> {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    return handleResponse<User>(response);
  },

  async updateUser(user: User): Promise<User> {
    const response = await fetch(`${BASE_URL}/users/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    return handleResponse<User>(response);
  },
};
