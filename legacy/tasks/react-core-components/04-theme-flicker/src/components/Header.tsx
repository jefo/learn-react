import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function Header() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('Header must be used within ThemeProvider');
  }
  
  const { theme, setTheme } = context;
  
  // Этот компонент ререндерится при каждом изменении контекста
  console.log('Rendering Header');
  
  return (
    <header style={{ 
      padding: '1rem',
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#333' : '#fff'
    }}>
      <h1>Theme Flicker Demo</h1>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </header>
  );
}
