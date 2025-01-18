import { useState } from 'react';
import { CommentThread as ThreadType } from '../types/comment';
import { CommentThread } from './CommentThread';

interface ThreadListProps {
  threads: ThreadType[];
}

// Неоптимизированный компонент списка тредов
export function ThreadList({ threads }: ThreadListProps) {
  const [selectedThread, setSelectedThread] = useState<ThreadType | null>(null);
  const [commentsToShow, setCommentsToShow] = useState(5);

  // Тяжелая функция поиска для демонстрации проблемы
  const searchThreads = (query: string) => {
    if (!query) return threads;

    // Искусственная задержка для имитации сложных вычислений
    const startTime = performance.now();
    while (performance.now() - startTime < 100) {
      // Блокируем поток на 100мс
    }

    return threads.filter(thread => 
      thread.title.toLowerCase().includes(query.toLowerCase()) ||
      thread.comments.some(comment =>
        comment.content.toLowerCase().includes(query.toLowerCase()) ||
        comment.user.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  const [searchQuery, setSearchQuery] = useState('');
  const filteredThreads = searchThreads(searchQuery);

  const handleLoadMore = () => {
    // Искусственная задержка для демонстрации проблемы
    const startTime = performance.now();
    while (performance.now() - startTime < 500) {
      // Блокируем поток на 500мс
    }
    setCommentsToShow(prev => prev + 5);
  };

  return (
    <div className="thread-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search threads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="threads">
        {filteredThreads.map(thread => (
          <div
            key={thread.id}
            className={`thread ${selectedThread?.id === thread.id ? 'selected' : ''}`}
            onClick={() => setSelectedThread(thread)}
          >
            <h3>{thread.title}</h3>
            <div className="thread-stats">
              {thread.comments.length} comments
            </div>
          </div>
        ))}
      </div>

      {selectedThread && (
        <div className="selected-thread">
          <h2>{selectedThread.title}</h2>
          <CommentThread
            comments={selectedThread.comments.slice(0, commentsToShow)}
            onLoadMore={handleLoadMore}
          />
        </div>
      )}
    </div>
  );
}
