import { useState } from 'react'
import './Login.css'

function Login() {
  const [userType, setUserType] = useState<'usager' | 'agent' | 'admin'>('usager')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Login attempt:', { userType, email, password })
    alert('Fonctionnalité de connexion à implémenter')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Connexion</h1>
        <p className="login-subtitle">Accédez à votre espace Snel Connect</p>

        <div className="user-type-selector">
          <button
            className={`type-btn ${userType === 'usager' ? 'active' : ''}`}
            onClick={() => setUserType('usager')}
          >
            Usager
          </button>
          <button
            className={`type-btn ${userType === 'agent' ? 'active' : ''}`}
            onClick={() => setUserType('agent')}
          >
            Agent
          </button>
          <button
            className={`type-btn ${userType === 'admin' ? 'active' : ''}`}
            onClick={() => setUserType('admin')}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Se connecter
          </button>
        </form>

        <div className="login-footer">
          <a href="#" className="link">Mot de passe oublié?</a>
          <span> | </span>
          <a href="#" className="link">Créer un compte</a>
        </div>
      </div>
    </div>
  )
}

export default Login
