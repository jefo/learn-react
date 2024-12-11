import React from 'react'
import ReactDOM from 'react-dom/client'
import { ExerciseCounter } from './ExerciseCounter'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="app">
      <h1>Exercise Counter</h1>
      <ExerciseCounter exerciseName="Push-ups" />
    </div>
  </React.StrictMode>,
)
