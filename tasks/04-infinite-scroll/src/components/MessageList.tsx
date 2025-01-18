import React, { useCallback, useRef, useState } from 'react';
import { FixedSizeList as List } from 'react-window';
import { Message, User } from '../types';
import { MessageItem } from './MessageItem';

interface Props {
  messages: Message[];
  users: Record<string, User>;
  hasMore: boolean;
  loading: boolean;
  onLoadMore: () => void;
}

/**
 * Компонент списка сообщений с виртуализацией
 * 
 * Подумайте:
 * 1. Как оптимизировать рендеринг списка?
 * 2. Когда загружать новые сообщения?
 * 3. Как сохранять позицию скролла?
 */
export const MessageList: React.FC<Props> = ({
  messages,
  users,
  hasMore,
  loading,
  onLoadMore
}) => {
  const listRef = useRef<List>(null);
  const observerRef = useRef<IntersectionObserver>();
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

  /**
   * Обработчик скролла
   * 
   * Подумайте:
   * 1. Как определить направление скролла?
   * 2. Когда запрашивать новые данные?
   * 3. Как избежать лишних запросов?
   */
  const handleScroll = useCallback(({ scrollOffset, scrollDirection }) => {
    // Изучите: как работает виртуализация списков?
  }, [hasMore, loading, onLoadMore]);

  /**
   * Настройка Intersection Observer
   * 
   * Изучите:
   * 1. Как работает Intersection Observer API?
   * 2. Какие настройки влияют на производительность?
   * 3. Когда очищать observer?
   */
  const setUpObserver = useCallback((element: HTMLElement | null) => {
    // Подумайте: как обрабатывать пересечение элементов?
  }, [hasMore, loading, onLoadMore]);

  /**
   * Рендер элемента списка
   * 
   * Подумайте:
   * 1. Когда мемоизировать рендер?
   * 2. Какие props передавать в MessageItem?
   * 3. Как группировать сообщения по дате?
   */
  const renderMessage = useCallback(({ index, style }) => {
    // Изучите: как работает React.memo?
    const message = messages[index];
    const user = users[message.userId];

    return (
      <MessageItem
        key={message.id}
        message={message}
        user={user}
        style={style}
      />
    );
  }, [messages, users]);

  return (
    <div className="message-list">
      {/* 
        Подумайте:
        1. Как рассчитать размеры списка?
        2. Как обрабатывать изменение размера окна?
        3. Как оптимизировать прокрутку?
      */}
      <List
        ref={listRef}
        height={600}
        width="100%"
        itemCount={messages.length}
        itemSize={80}
        onScroll={handleScroll}
      >
        {renderMessage}
      </List>

      {loading && (
        <div className="loading-indicator">
          Загрузка сообщений...
        </div>
      )}
    </div>
  );
};
