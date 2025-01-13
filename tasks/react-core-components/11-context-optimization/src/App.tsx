import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { UserPreferences } from './components/UserPreferences';

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <main>
          <UserPreferences />
        </main>
      </div>
    </AppProvider>
  );
}

export default App
