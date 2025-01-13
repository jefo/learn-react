import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserList } from './components/UserList';

function App() {
  return (
    <div className="app">
      <h1>User Management</h1>
      <UserList />
    </div>
  );
}

export default App;
