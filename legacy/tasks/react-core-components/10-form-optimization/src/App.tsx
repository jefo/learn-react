import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RegistrationForm } from './components/RegistrationForm';

function App() {
  return (
    <div className="app">
      <h1>Registration</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;
