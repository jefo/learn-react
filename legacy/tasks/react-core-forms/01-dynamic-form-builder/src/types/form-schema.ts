export interface FormFieldValidation {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export interface FormField {
  name: string;
  type: 'text' | 'number' | 'email' | 'select' | 'checkbox' | 'group';
  label: string;
  validation?: FormFieldValidation;
  options?: { label: string; value: string | number }[];
  fields?: FormField[]; // For group type
  condition?: {
    field: string;
    value: any;
  };
}

export interface FormSchema {
  fields: FormField[];
}
