import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BookingForm } from './components/BookingForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Hotel Booking Form</h1>
      <div className="form-container">
        <h2>Current Implementation (Basic Validation)</h2>
        <BookingForm />
        
        <h2>Requirements</h2>
        <ul>
          <li>Add validation for minimum stay duration</li>
          <li>Validate guest count against room type</li>
          <li>Add document validation for adult guests</li>
          <li>Implement conditional validation rules</li>
          <li>Optimize validation performance</li>
        </ul>
      </div>
    </div>
  )
}

export default App
