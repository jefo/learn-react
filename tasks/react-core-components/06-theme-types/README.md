# Задача 6: Типизация компонентов с контекстом

## Теория, которую нужно изучить:
- TypeScript в React
- React Context с TypeScript
- Типизация пропсов и контекста
- Type Safety в React приложениях

## Проблема:
В приложении есть компоненты, использующие ThemeContext, но их типизация реализована неправильно:
- Используется `any` в типах
- Отсутствует проверка типов для значений контекста
- Нет переиспользуемых типов
- Небезопасное извлечение значений из контекста

## Требования к решению:
1. Создать строгую типизацию для значений контекста
2. Реализовать безопасное извлечение значений из контекста
3. Сделать типы переиспользуемыми
4. Убрать все `any` из кода

## Ограничения:
- Нельзя менять логику работы компонентов
- Все `any` должны быть заменены на конкретные типы
- Типы должны быть переиспользуемыми

## Как начать работу:
1. Установите зависимости:
```bash
npm install
```

2. Запустите проект:
```bash
npm run dev
```

3. Откройте файлы в директории `src/components/` и улучшите их типизацию.

## Подсказки по реализации:

1. Создание типизированного контекста:
```tsx
type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);
```

2. Безопасное извлечение значений:
```tsx
function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within ThemeProvider');
  }
  return context;
}
```

## Проверка результата:
Ваше решение должно:
- Не иметь TypeScript ошибок
- Предоставлять автодополнение в IDE
- Выдавать ошибки при неправильном использовании

## Полезные материалы:
- [TypeScript and React](https://react.dev/learn/typescript)
- [Using TypeScript with React Context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/)
