import { useApp } from '../context/AppContext';
import { ThemeToggle } from './ThemeToggle';

// Компонент перерендеривается при любом изменении контекста
export function Header() {
  console.log('Header render');
  const { theme } = useApp();

  return (
    <header
      style={{
        backgroundColor: theme.background,
        color: theme.text,
        borderBottom: `1px solid ${theme.text}`
      }}
    >
      <h1>Theme & Settings Demo</h1>
      <ThemeToggle />
    </header>
  );
}
