import { useApp } from '../context/AppContext';

// Компонент перерендеривается при любом изменении контекста
export function ThemeToggle() {
  console.log('ThemeToggle render');
  const { theme, toggleTheme } = useApp();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      style={{
        backgroundColor: theme.primary,
        color: theme.mode === 'light' ? '#ffffff' : '#1f2937'
      }}
    >
      Toggle Theme ({theme.mode})
    </button>
  );
}
