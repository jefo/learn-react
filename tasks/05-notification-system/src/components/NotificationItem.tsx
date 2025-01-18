import React, { useCallback, useEffect, memo } from 'react';
import { useNotifications } from '../context/NotificationContext';
import type { Notification } from '../types';

interface Props {
  notification: Notification;
}

/**
 * Компонент уведомления
 * 
 * Подумайте:
 * 1. Когда использовать memo?
 * 2. Как обрабатывать действия?
 * 3. Как управлять таймером?
 */
export const NotificationItem: React.FC<Props> = memo(({ notification }) => {
  const { dismiss } = useNotifications();

  /**
   * Обработка закрытия
   * 
   * Изучите:
   * 1. Как работает всплытие событий?
   * 2. Когда вызывать callback'и?
   * 3. Как обрабатывать ошибки?
   */
  const handleDismiss = useCallback(() => {
    dismiss(notification.id);
    notification.onDismiss?.();
  }, [dismiss, notification]);

  /**
   * Автоматическое закрытие
   * 
   * Подумайте:
   * 1. Как работает useEffect?
   * 2. Когда очищать таймер?
   * 3. Как обрабатывать изменения props?
   */
  useEffect(() => {
    if (notification.duration && notification.duration > 0) {
      const timer = setTimeout(handleDismiss, notification.duration);
      return () => clearTimeout(timer);
    }
  }, [notification.duration, handleDismiss]);

  /**
   * Получение иконки по типу
   * 
   * Подумайте:
   * 1. Как организовать иконки?
   * 2. Когда мемоизировать функцию?
   * 3. Как сделать систему расширяемой?
   */
  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
        return 'ℹ';
      default:
        return null;
    }
  };

  return (
    <div
      className={`notification notification-${notification.type}`}
      role="alert"
    >
      <div className="notification-icon">
        {getIcon()}
      </div>

      <div className="notification-content">
        {notification.title && (
          <div className="notification-title">
            {notification.title}
          </div>
        )}
        
        <div className="notification-message">
          {notification.message}
        </div>

        {notification.actions && (
          <div className="notification-actions">
            {notification.actions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="notification-action"
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {notification.dismissible && (
        <button
          className="notification-close"
          onClick={handleDismiss}
          aria-label="Close notification"
        >
          ✕
        </button>
      )}
    </div>
  );
});
