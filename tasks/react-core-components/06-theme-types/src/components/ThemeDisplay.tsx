import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Компонент с any в пропсах
export function ThemeDisplay({ className }: any) {
  // Небезопасное получение контекста
  const theme = useContext(ThemeContext);
  
  return (
    <div className={className}>
      Current theme: {theme.theme}
    </div>
  );
}
