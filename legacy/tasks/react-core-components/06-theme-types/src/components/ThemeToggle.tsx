import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

// Компонент без типизации пропсов
export function ThemeToggle(props: any) {
  // Отсутствие типизации для значений контекста
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className={props.className}
    >
      Toggle theme
    </button>
  );
}
