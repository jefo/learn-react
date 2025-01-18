import React, { memo } from 'react';
import { format } from 'date-fns';
import type { Message, User } from '../types';

interface Props {
  message: Message;
  user: User;
  style: React.CSSProperties;
}

/**
 * Компонент отдельного сообщения
 * 
 * Подумайте:
 * 1. Когда использовать memo?
 * 2. Какие props могут меняться?
 * 3. Как оптимизировать форматирование даты?
 */
export const MessageItem: React.FC<Props> = memo(({ message, user, style }) => {
  /**
   * Форматирование времени сообщения
   * 
   * Изучите:
   * 1. Как работает мемоизация функций?
   * 2. Когда форматировать дату?
   * 3. Как обрабатывать разные часовые пояса?
   */
  const formattedTime = format(message.timestamp, 'HH:mm');

  /**
   * Рендер статуса сообщения
   * 
   * Подумайте:
   * 1. Как показывать разные статусы?
   * 2. Когда обновлять статус?
   * 3. Как анимировать изменения?
   */
  const renderStatus = () => {
    // Изучите: как работают условные стили?
    switch (message.status) {
      case 'sent':
        return '✓';
      case 'delivered':
        return '✓✓';
      case 'read':
        return '✓✓';
      default:
        return null;
    }
  };

  return (
    <div className="message-item" style={style}>
      {/* 
        Подумайте:
        1. Как организовать семантическую верстку?
        2. Как сделать сообщения доступными?
        3. Как стилизовать разные типы сообщений?
      */}
      <div className="message-avatar">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} />
        ) : (
          <div className="avatar-placeholder">
            {user.name[0]}
          </div>
        )}
      </div>

      <div className="message-content">
        <div className="message-header">
          <span className="user-name">{user.name}</span>
          <span className="message-time">{formattedTime}</span>
        </div>
        
        <div className="message-text">
          {message.text}
          <span className="message-status">
            {renderStatus()}
          </span>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) => {
  // Изучите: как работает сравнение props в memo?
  return (
    prevProps.message.id === nextProps.message.id &&
    prevProps.message.status === nextProps.message.status &&
    prevProps.style === nextProps.style
  );
});
