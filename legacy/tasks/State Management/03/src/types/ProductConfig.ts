export type ProductConfig = {
  basics: {
    color: string;
    size: string;
    material: string;
  };
  features: {
    [key: string]: {
      enabled: boolean;
      level: 'basic' | 'premium';
      settings: Record<string, unknown>;
    };
  };
  addons: Array<{
    id: string;
    quantity: number;
    customization: {
      color?: string;
      text?: string;
    };
  }>;
};

export type ConfigChange = {
  timestamp: number;
  path: string[];
  previousValue: unknown;
  newValue: unknown;
};
