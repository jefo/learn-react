import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export function Content() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('Content must be used within ThemeProvider');
  }
  
  const { theme } = context;
  
  // Этот компонент тоже ререндерится при каждом изменении контекста
  console.log('Rendering Content');
  
  return (
    <main style={{ 
      padding: '1rem',
      backgroundColor: theme === 'light' ? '#f0f0f0' : '#222',
      color: theme === 'light' ? '#333' : '#fff'
    }}>
      <h2>Main Content</h2>
      <p>This component rerenders unnecessarily when theme changes.</p>
      <p>Current theme: {theme}</p>
    </main>
  );
}
