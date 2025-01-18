# Задача 7: Исправление утечек памяти в чате

## Теория, которую нужно изучить:
- Очистка эффектов в React
- WebSocket соединения
- Таймеры и интервалы в React
- Утечки памяти в React приложениях

## Проблема:
В приложении чата обнаружены утечки памяти из-за неправильной очистки эффектов:
1. WebSocket соединения не закрываются при смене комнаты
2. Интервалы для ping не очищаются
3. Старые сообщения остаются в памяти

## Требования к решению:
1. Добавить корректную очистку WebSocket соединений
2. Реализовать очистку всех таймеров и интервалов
3. Правильно обрабатывать отписку от событий

## Ограничения:
- Нельзя менять структуру WebSocket соединения
- Нельзя изменять API чата
- Необходимо использовать TypeScript

## Как начать работу:
1. Установите зависимости:
```bash
npm install
```

2. Запустите проект:
```bash
npm run dev
```

3. Откройте файл `src/components/ChatRoom.tsx` и исправьте утечки памяти.
4. Используйте React DevTools и Memory Profiler для проверки утечек.

## Подсказки по реализации:

1. Очистка WebSocket:
```tsx
useEffect(() => {
  const ws = new WebSocket(url);
  
  // Настройка WebSocket...
  
  return () => {
    ws.close();
  };
}, [url]);
```

2. Очистка таймеров:
```tsx
useEffect(() => {
  const timer = setInterval(() => {
    // Действия...
  }, 1000);
  
  return () => {
    clearInterval(timer);
  };
}, []);
```

## Проверка результата:
Ваше решение должно:
- Закрывать WebSocket соединения при смене комнаты
- Очищать все таймеры при размонтировании
- Не иметь утечек памяти (проверяется через React DevTools)

## Полезные материалы:
- [Cleaning Up Effects](https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
