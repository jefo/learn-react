import { useChat } from './hooks/useChat';
import { MessageList } from './components/MessageList';
import './App.css';

/**
 * Главный компонент приложения
 * 
 * Подумайте:
 * 1. Как организовать структуру компонентов?
 * 2. Где хранить глобальное состояние?
 * 3. Как обрабатывать новые сообщения?
 */
function App() {
  const { messages, users, hasMore, loading, loadMessages } = useChat();

  return (
    <div className="app">
      <header className="header">
        <h1>Чат</h1>
      </header>

      <main className="main">
        <MessageList
          messages={messages}
          users={users}
          hasMore={hasMore}
          loading={loading}
          onLoadMore={loadMessages}
        />
      </main>
    </div>
  );
}

export default App;
