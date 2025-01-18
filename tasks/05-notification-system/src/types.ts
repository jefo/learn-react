/**
 * Типы для системы уведомлений
 * 
 * Подумайте:
 * 1. Какие поля нужны для разных типов уведомлений?
 * 2. Как типизировать действия?
 * 3. Как организовать расширяемость типов?
 */

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export type NotificationPosition = 
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center';

export interface NotificationAction {
  label: string;
  onClick: () => void;
}

/**
 * Изучите:
 * 1. Как использовать дискриминированные объединения?
 * 2. Когда делать поля опциональными?
 * 3. Как типизировать callback'и?
 */
export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  duration?: number;
  actions?: NotificationAction[];
  dismissible?: boolean;
  onDismiss?: () => void;
}

export interface NotificationOptions extends Omit<Notification, 'id' | 'type'> {
  type?: NotificationType;
}

/**
 * Подумайте:
 * 1. Какие методы нужны для работы с уведомлениями?
 * 2. Как типизировать контекст?
 * 3. Как обеспечить type safety для пользователей?
 */
export interface NotificationContextValue {
  notifications: Notification[];
  notify: (options: NotificationOptions) => string;
  success: (options: Omit<NotificationOptions, 'type'>) => string;
  error: (options: Omit<NotificationOptions, 'type'>) => string;
  warning: (options: Omit<NotificationOptions, 'type'>) => string;
  info: (options: Omit<NotificationOptions, 'type'>) => string;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}
