import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Chart } from './components/Chart';
import { chartData } from './data/chartData';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Analytics Dashboard</h1>
        <p>Visualizing data from {new Date(chartData.startDate).toLocaleDateString()} to {new Date(chartData.endDate).toLocaleDateString()}</p>
      </header>
      <main>
        <Chart data={chartData} />
      </main>
    </div>
  );
}

export default App;
