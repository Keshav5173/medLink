import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// Import Pages
import HomePage from "./pages/home.jsx"
import MedReportPage from './pages/medReport.jsx'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/user/medical-report' element={<MedReportPage />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />

      </Routes>
    </Router>
    
  )
}

export default App
