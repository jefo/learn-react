import { ThemeProvider } from './context/ThemeContext'
import { ThemeToggle } from './components/ThemeToggle'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <h1>Theme Toggle Task</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  )
}

export default App
