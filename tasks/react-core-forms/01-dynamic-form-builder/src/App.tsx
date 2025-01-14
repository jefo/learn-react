import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SimpleForm } from './components/SimpleForm'
import { formSchema } from './data/example-schema'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1>Dynamic Form Builder</h1>
      <div className="form-container">
        <h2>Current Implementation (Simple Form)</h2>
        <SimpleForm />
        
        <h2>Example Schema</h2>
        <pre>
          {JSON.stringify(formSchema, null, 2)}
        </pre>
      </div>
    </div>
  )
}

export default App
