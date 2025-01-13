import { useState, useEffect } from 'react';
import { Message } from '../types/message';

interface ChatRoomProps {
  roomId: string;
}

export function ChatRoom({ roomId }: ChatRoomProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [status, setStatus] = useState<'connecting' | 'connected' | 'disconnected'>('connecting');

  useEffect(() => {
    // Создаем WebSocket соединение
    const ws = new WebSocket(`wss://echo.websocket.org/${roomId}`);

    // Устанавливаем обработчики событий без их очистки
    ws.onopen = () => {
      setStatus('connected');
    };

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages(prev => [...prev, message]);
    };

    ws.onerror = () => {
      setStatus('disconnected');
    };

    // Создаем интервал для ping без его очистки
    const timer = setInterval(() => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ type: 'ping' }));
      }
    }, 30000);

    // Подписываемся на события без отписки
    window.addEventListener('offline', () => {
      setStatus('disconnected');
    });

    // Нет функции очистки!
  }, [roomId]);

  return (
    <div className="chat-room">
      <div className="status">Status: {status}</div>
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <div className="message-text">{msg.text}</div>
            <div className="message-time">
              {new Date(msg.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
