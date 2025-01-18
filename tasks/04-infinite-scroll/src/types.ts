/**
 * Типы данных для чата
 * 
 * Подумайте:
 * 1. Какие поля необходимы для группировки сообщений?
 * 2. Как типизировать разные виды сообщений?
 * 3. Какие данные нужны для оптимизации?
 */

export interface Message {
  id: string;
  text: string;
  userId: string;
  timestamp: number;
  status: 'sent' | 'delivered' | 'read';
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
}

/**
 * Изучите:
 * 1. Как типизировать состояние загрузки?
 * 2. Как организовать пагинацию?
 * 3. Как хранить кеш сообщений?
 */
export interface ChatState {
  messages: Message[];
  users: Record<string, User>;
  hasMore: boolean;
  loading: boolean;
  error: string | null;
  lastMessageId?: string;
}

/**
 * Подумайте:
 * 1. Какие события могут происходить в чате?
 * 2. Как типизировать обработчики событий?
 * 3. Как обеспечить type safety для редьюсера?
 */
export type ChatAction =
  | { type: 'MESSAGES_LOADING' }
  | { type: 'MESSAGES_LOADED'; payload: { messages: Message[]; users: User[] } }
  | { type: 'MESSAGES_ERROR'; payload: string }
  | { type: 'MESSAGE_RECEIVED'; payload: Message }
  | { type: 'MESSAGE_STATUS_UPDATED'; payload: { id: string; status: Message['status'] } };
