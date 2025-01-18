import { Routes, Route } from 'react-router-dom'
import { SmartLink } from './components/Navigation/Link'

function App() {
  return (
    <div className="container">
      <h1>Smart Routing</h1>
      <nav>
        <SmartLink to="/courses" prefetch>Courses</SmartLink>
        <SmartLink to="/profile" guard>Profile</SmartLink>
      </nav>
      <Routes>
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
    </div>
  )
}

export default App
