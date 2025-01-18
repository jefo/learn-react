import { faker } from '@faker-js/faker';
import { User } from '../types/user';

// Генерация большого набора данных
export function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    avatar: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    role: faker.person.jobTitle(),
    department: faker.commerce.department(),
    status: faker.helpers.arrayElement(['active', 'inactive']) as 'active' | 'inactive',
    lastActive: faker.date.recent().toISOString(),
    performance: faker.number.int({ min: 0, max: 100 })
  }));
}

// Имитация задержки сети
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
