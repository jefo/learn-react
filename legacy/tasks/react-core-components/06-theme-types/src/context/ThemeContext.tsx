import { createContext, useState, ReactNode } from 'react';

// Контекст без типов
export const ThemeContext = createContext(null);

// Провайдер с any
export function ThemeProvider({ children }: { children: any }) {
  const [theme, setTheme] = useState('light');

  // Значение контекста без типизации
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}
