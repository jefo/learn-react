export interface Theme {
  mode: 'light' | 'dark';
  primary: string;
  secondary: string;
  text: string;
  background: string;
}

export interface UserSettings {
  language: string;
  timezone: string;
  notifications: boolean;
  emailPreferences: {
    marketing: boolean;
    updates: boolean;
    security: boolean;
  };
  accessibility: {
    fontSize: number;
    contrast: 'normal' | 'high';
    reduceMotion: boolean;
  };
}

export interface AppContextType {
  theme: Theme;
  settings: UserSettings;
  updateTheme: (theme: Partial<Theme>) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  toggleTheme: () => void;
}
