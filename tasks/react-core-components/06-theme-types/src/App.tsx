import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './context/ThemeContext';
import { ThemeDisplay } from './components/ThemeDisplay';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Theme Context Example</h1>
        <ThemeDisplay className="theme-display" />
        <ThemeToggle className="theme-toggle" />
      </div>
    </ThemeProvider>
  );
}

export default App;
