import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useNotifications } from '../context/NotificationContext';
import { NotificationItem } from './NotificationItem';
import type { NotificationPosition } from '../types';

interface Props {
  position?: NotificationPosition;
}

/**
 * Контейнер для уведомлений
 * 
 * Подумайте:
 * 1. Как организовать позиционирование?
 * 2. Как анимировать появление/исчезновение?
 * 3. Как обеспечить доступность?
 */
export const NotificationContainer: React.FC<Props> = ({
  position = 'top-right'
}) => {
  const { notifications } = useNotifications();

  /**
   * Получение стилей позиционирования
   * 
   * Изучите:
   * 1. Как работает position: fixed?
   * 2. Как организовать responsive дизайн?
   * 3. Как обрабатывать разные позиции?
   */
  const getContainerStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: 'fixed',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      margin: '1rem',
      maxWidth: '100%',
      width: '400px'
    };

    switch (position) {
      case 'top-right':
        return { ...base, top: 0, right: 0 };
      case 'top-left':
        return { ...base, top: 0, left: 0 };
      case 'bottom-right':
        return { ...base, bottom: 0, right: 0, flexDirection: 'column-reverse' };
      case 'bottom-left':
        return { ...base, bottom: 0, left: 0, flexDirection: 'column-reverse' };
      case 'top-center':
        return { ...base, top: 0, left: '50%', transform: 'translateX(-50%)' };
      case 'bottom-center':
        return {
          ...base,
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column-reverse'
        };
      default:
        return base;
    }
  };

  return (
    <div
      className="notification-container"
      style={getContainerStyle()}
      role="alert"
      aria-live="polite"
    >
      <TransitionGroup>
        {notifications.map(notification => (
          <CSSTransition
            key={notification.id}
            timeout={300}
            classNames="notification"
          >
            <NotificationItem notification={notification} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};
