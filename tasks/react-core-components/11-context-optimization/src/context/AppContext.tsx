import { createContext, useContext, useState, ReactNode } from 'react';
import { Theme, UserSettings, AppContextType } from '../types/theme';

// Начальные значения темы
const initialTheme: Theme = {
  mode: 'light',
  primary: '#3b82f6',
  secondary: '#10b981',
  text: '#1f2937',
  background: '#ffffff'
};

// Начальные значения настроек
const initialSettings: UserSettings = {
  language: 'en',
  timezone: 'UTC',
  notifications: true,
  emailPreferences: {
    marketing: true,
    updates: true,
    security: true
  },
  accessibility: {
    fontSize: 16,
    contrast: 'normal',
    reduceMotion: false
  }
};

// Создаем контекст
const AppContext = createContext<AppContextType | null>(null);

// Неоптимизированный провайдер, который вызывает ререндер всего дерева
export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [settings, setSettings] = useState<UserSettings>(initialSettings);

  // Обновление темы вызывает ререндер всего приложения
  const updateTheme = (updates: Partial<Theme>) => {
    setTheme(prev => ({
      ...prev,
      ...updates
    }));
  };

  // Переключение темы вызывает ререндер всего приложения
  const toggleTheme = () => {
    setTheme(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light',
      text: prev.mode === 'light' ? '#ffffff' : '#1f2937',
      background: prev.mode === 'light' ? '#1f2937' : '#ffffff'
    }));
  };

  // Обновление настроек вызывает ререндер всего приложения
  const updateSettings = (updates: Partial<UserSettings>) => {
    setSettings(prev => ({
      ...prev,
      ...updates
    }));
  };

  // Все компоненты перерендериваются при любом изменении
  const value = {
    theme,
    settings,
    updateTheme,
    updateSettings,
    toggleTheme
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

// Хук для использования контекста
export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
