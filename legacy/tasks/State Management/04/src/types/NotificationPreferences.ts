export type NotificationFrequency = 'daily' | 'weekly' | 'monthly';

export type NotificationCategory = 'news' | 'updates' | 'marketing' | 'security';

export interface NotificationPreferencesForm {
  email: string;
  frequency: NotificationFrequency;
  time: string;
  categories: NotificationCategory[];
  maxNotifications: number;
}

export interface NotificationPreferencesErrors {
  email?: string;
  frequency?: string;
  time?: string;
  categories?: string;
  maxNotifications?: string;
}

export interface NotificationPreferencesProps {
  onSubmit: (data: NotificationPreferencesForm) => void;
  initialValues?: Partial<NotificationPreferencesForm>;
}
