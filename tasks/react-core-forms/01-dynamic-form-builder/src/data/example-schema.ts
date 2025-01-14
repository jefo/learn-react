import { FormSchema } from '../types/form-schema';

export const formSchema: FormSchema = {
  fields: [
    {
      name: 'personalInfo',
      type: 'group',
      label: 'Personal Information',
      fields: [
        {
          name: 'firstName',
          type: 'text',
          label: 'First Name',
          validation: {
            required: 'First name is required',
            minLength: {
              value: 2,
              message: 'Min length is 2'
            }
          }
        },
        {
          name: 'lastName',
          type: 'text',
          label: 'Last Name',
          validation: {
            required: 'Last name is required'
          }
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
          validation: {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email format'
            }
          }
        }
      ]
    },
    {
      name: 'preferences',
      type: 'group',
      label: 'Preferences',
      fields: [
        {
          name: 'notifications',
          type: 'checkbox',
          label: 'Enable Notifications'
        },
        {
          name: 'theme',
          type: 'select',
          label: 'Theme',
          options: [
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'System', value: 'system' }
          ]
        }
      ]
    }
  ]
};
