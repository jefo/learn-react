import React, { useState, useEffect } from 'react';
import type { User, SearchState } from '../types';

// TODO: Студент должен реализовать компонент поиска пользователей
export const UserSearch: React.FC = () => {
  const [state, setState] = useState<SearchState>({
    query: '',
    results: [],
    loading: false,
    error: null
  });

  useEffect(() => {
    // TODO: Реализовать поиск пользователей
    // 1. Создать AbortController
    // 2. Выполнить fetch запрос
    // 3. Обработать результат
    // 4. Не забыть про очистку

    return () => {
      // TODO: Реализовать очистку
    };
  }, [/* TODO: Добавить зависимости */]);

  return (
    <div>
      <input
        type="text"
        value={state.query}
        onChange={(e) => setState(prev => ({ ...prev, query: e.target.value }))}
        placeholder="Поиск пользователей..."
      />
      
      {state.loading && <div>Загрузка...</div>}
      {state.error && <div>Ошибка: {state.error}</div>}
      
      <ul>
        {state.results.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};
