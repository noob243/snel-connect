import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-brand">
            <h2>Snel Connect</h2>
          </div>
          <div className="navbar-menu">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/login" className="nav-link">Connexion</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </div>
        </nav>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <p>&copy; 2025 Snel Connect - Gestion des signalements de pannes électriques</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
