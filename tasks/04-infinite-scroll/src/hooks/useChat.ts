import { useReducer, useCallback } from 'react';
import type { ChatState, ChatAction, Message } from '../types';

/**
 * Хук для управления состоянием чата
 * 
 * Подумайте:
 * 1. Как организовать загрузку сообщений?
 * 2. Где хранить состояние загрузки?
 * 3. Как обновлять сообщения эффективно?
 */
const initialState: ChatState = {
  messages: [],
  users: {},
  hasMore: true,
  loading: false,
  error: null
};

/**
 * Редьюсер чата
 * 
 * Изучите:
 * 1. Как работает useReducer?
 * 2. Когда использовать иммутабельное обновление?
 * 3. Как типизировать actions?
 */
function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'MESSAGES_LOADING':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'MESSAGES_LOADED':
      return {
        ...state,
        messages: [...action.payload.messages, ...state.messages],
        users: {
          ...state.users,
          ...action.payload.users.reduce((acc, user) => ({
            ...acc,
            [user.id]: user
          }), {})
        },
        loading: false,
        hasMore: action.payload.messages.length > 0
      };

    case 'MESSAGES_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case 'MESSAGE_RECEIVED':
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    case 'MESSAGE_STATUS_UPDATED':
      return {
        ...state,
        messages: state.messages.map(message =>
          message.id === action.payload.id
            ? { ...message, status: action.payload.status }
            : message
        )
      };

    default:
      return state;
  }
}

/**
 * Кастомный хук для работы с чатом
 * 
 * Подумайте:
 * 1. Какие операции нужно мемоизировать?
 * 2. Как обрабатывать ошибки?
 * 3. Как организовать пагинацию?
 */
export function useChat() {
  const [state, dispatch] = useReducer(chatReducer, initialState);

  /**
   * Загрузка сообщений
   * 
   * Изучите:
   * 1. Как работает пагинация?
   * 2. Когда делать запросы?
   * 3. Как обрабатывать ошибки сети?
   */
  const loadMessages = useCallback(async () => {
    // Подумайте: как реализовать загрузку с сервера?
  }, [state.lastMessageId]);

  /**
   * Обновление статуса сообщения
   * 
   * Подумайте:
   * 1. Когда обновлять статус?
   * 2. Как обеспечить оптимистичное обновление?
   * 3. Как обрабатывать ошибки обновления?
   */
  const updateMessageStatus = useCallback((messageId: string, status: Message['status']) => {
    // Изучите: как работает оптимистичное обновление?
  }, []);

  return {
    ...state,
    loadMessages,
    updateMessageStatus
  };
}
