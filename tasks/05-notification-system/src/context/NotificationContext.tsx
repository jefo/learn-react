import React, { createContext, useCallback, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Notification, NotificationContextValue, NotificationOptions } from '../types';

/**
 * Контекст для системы уведомлений
 * 
 * Подумайте:
 * 1. Какое значение по умолчанию использовать?
 * 2. Как обрабатывать отсутствие провайдера?
 * 3. Как типизировать контекст?
 */
const NotificationContext = createContext<NotificationContextValue | null>(null);

/**
 * Действия для редьюсера
 * 
 * Изучите:
 * 1. Как типизировать actions?
 * 2. Когда использовать дискриминированные объединения?
 * 3. Как обеспечить type safety?
 */
type NotificationAction =
  | { type: 'ADD_NOTIFICATION'; payload: Notification }
  | { type: 'REMOVE_NOTIFICATION'; payload: string }
  | { type: 'REMOVE_ALL_NOTIFICATIONS' };

/**
 * Редьюсер для управления состоянием
 * 
 * Подумайте:
 * 1. Как организовать очередь уведомлений?
 * 2. Как обновлять состояние иммутабельно?
 * 3. Как обрабатывать разные действия?
 */
function notificationReducer(state: Notification[], action: NotificationAction): Notification[] {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return [...state, action.payload];

    case 'REMOVE_NOTIFICATION':
      return state.filter(notification => notification.id !== action.payload);

    case 'REMOVE_ALL_NOTIFICATIONS':
      return [];

    default:
      return state;
  }
}

interface Props {
  children: React.ReactNode;
  maxNotifications?: number;
  defaultDuration?: number;
}

/**
 * Провайдер уведомлений
 * 
 * Изучите:
 * 1. Как работает useReducer?
 * 2. Когда использовать useCallback?
 * 3. Как организовать очистку таймеров?
 */
export function NotificationProvider({
  children,
  maxNotifications = 5,
  defaultDuration = 5000
}: Props) {
  const [notifications, dispatch] = useReducer(notificationReducer, []);

  /**
   * Добавление уведомления
   * 
   * Подумайте:
   * 1. Как генерировать уникальные ID?
   * 2. Когда запускать таймер?
   * 3. Как обрабатывать очередь?
   */
  const notify = useCallback((options: NotificationOptions): string => {
    const id = uuidv4();
    const notification: Notification = {
      id,
      type: options.type || 'info',
      duration: options.duration || defaultDuration,
      dismissible: options.dismissible ?? true,
      ...options
    };

    dispatch({ type: 'ADD_NOTIFICATION', payload: notification });

    if (notification.duration && notification.duration > 0) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
      }, notification.duration);
    }

    return id;
  }, [defaultDuration]);

  /**
   * Вспомогательные методы для разных типов
   * 
   * Изучите:
   * 1. Как работает замыкание?
   * 2. Когда мемоизировать функции?
   * 3. Как типизировать методы?
   */
  const success = useCallback((options: Omit<NotificationOptions, 'type'>) => {
    return notify({ ...options, type: 'success' });
  }, [notify]);

  const error = useCallback((options: Omit<NotificationOptions, 'type'>) => {
    return notify({ ...options, type: 'error' });
  }, [notify]);

  const warning = useCallback((options: Omit<NotificationOptions, 'type'>) => {
    return notify({ ...options, type: 'warning' });
  }, [notify]);

  const info = useCallback((options: Omit<NotificationOptions, 'type'>) => {
    return notify({ ...options, type: 'info' });
  }, [notify]);

  const dismiss = useCallback((id: string) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const dismissAll = useCallback(() => {
    dispatch({ type: 'REMOVE_ALL_NOTIFICATIONS' });
  }, []);

  const value: NotificationContextValue = {
    notifications: notifications.slice(-maxNotifications),
    notify,
    success,
    error,
    warning,
    info,
    dismiss,
    dismissAll
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

/**
 * Хук для использования уведомлений
 * 
 * Подумайте:
 * 1. Как обрабатывать отсутствие контекста?
 * 2. Когда использовать кастомные хуки?
 * 3. Как документировать API?
 */
export function useNotifications(): NotificationContextValue {
  const context = useContext(NotificationContext);
  
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  
  return context;
}
