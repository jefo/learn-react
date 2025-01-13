export interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: {
    street: string;
    city: string;
    country: string;
    zip: string;
  };
}

export interface ValidationErrors {
  [key: string]: string;
}
