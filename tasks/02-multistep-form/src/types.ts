export interface FormData {
  // Шаг 1: Персональные данные
  personal: {
    firstName: string;
    lastName: string;
    email: string;
  };
  // Шаг 2: Рабочая информация
  work: {
    company: string;
    position: string;
    experience: number;
  };
  // Шаг 3: Дополнительно
  additional: {
    bio: string;
    subscribe: boolean;
  };
}

export interface FormErrors {
  personal?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
  work?: {
    company?: string;
    position?: string;
    experience?: string;
  };
  additional?: {
    bio?: string;
  };
}

export type Step = 'personal' | 'work' | 'additional';
