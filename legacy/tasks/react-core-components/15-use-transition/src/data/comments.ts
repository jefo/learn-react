import { CommentThread, Comment, User } from '../types/comment';

// Генерация тестовых пользователей
function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    avatar: `https://i.pravatar.cc/150?u=${index + 1}`
  }));
}

// Генерация тестовых комментариев
function generateComments(count: number, users: User[], depth: number = 0): Comment[] {
  if (depth > 2) return []; // Максимальная глубина вложенности

  return Array.from({ length: count }, (_, index) => ({
    id: Math.random() * 1000000,
    user: users[Math.floor(Math.random() * users.length)],
    content: `This is a ${depth === 0 ? 'comment' : 'reply'} #${index + 1}. It contains some text to demonstrate how comments look in the thread.`,
    timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    likes: Math.floor(Math.random() * 100),
    replies: depth < 2 ? generateComments(Math.floor(Math.random() * 3), users, depth + 1) : []
  }));
}

// Генерация тестовых тредов
function generateThreads(count: number): CommentThread[] {
  const users = generateUsers(20);
  
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    title: `Discussion Thread #${index + 1}`,
    comments: generateComments(10 + Math.floor(Math.random() * 20), users)
  }));
}

// Экспорт 50 тредов для демонстрации
export const threads = generateThreads(50);
