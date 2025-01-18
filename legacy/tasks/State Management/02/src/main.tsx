import React from 'react';
import ReactDOM from 'react-dom/client';
import { UserProfileForm } from './components/UserProfileForm';
import './index.css';

const initialData = {
  displayName: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  emailNotifications: true,
  smsNotifications: false,
};

const handleSubmit = async (profile: any) => {
  // Имитация отправки данных на сервер
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Submitted profile:', profile);
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="app">
      <h1>User Profile</h1>
      <UserProfileForm 
        initialData={initialData}
        onSubmit={handleSubmit}
      />
    </div>
  </React.StrictMode>,
);
