# Задача 3: Переключатель темы с использованием Context

## Теория, которую нужно изучить:
- React Context API
- Хук useContext
- Паттерн Provider в React

## Требования к компоненту:
1. Компонент должен использовать существующий ThemeContext
2. На экране должна быть кнопка, отображающая текущую тему
3. При нажатии на кнопку тема должна переключаться между 'light' и 'dark'

## Как начать работу:
1. Установите зависимости:
```bash
npm install
```

2. Запустите проект:
```bash
npm run dev
```

3. Откройте файл `src/components/ThemeToggle.tsx` и реализуйте компонент.

## Подсказки по реализации:

1. ThemeContext уже создан и доступен:
```tsx
const ThemeContext = React.createContext<{
  theme: 'light' | 'dark';
  toggleTheme: () => void;
} | null>(null);
```

2. Для использования контекста:
```tsx
const themeContext = useContext(ThemeContext);
```

## Ограничения:
- Использовать только хук useContext
- Нельзя создавать новый контекст
- Нельзя использовать пропсы для передачи темы

## Проверка результата:
Ваше решение должно:
- Корректно отображать текущую тему
- Переключать тему при клике на кнопку
- Обновлять отображение при изменении темы

## Тестирование:
```bash
npm test
```

## Полезные материалы:
- [React Context Documentation](https://react.dev/reference/react/useContext)
- [Using Context API in React](https://react.dev/learn/passing-data-deeply-with-context)
