import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Tableau de bord</h1>
        <p>Vue d'ensemble des signalements de pannes électriques</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>42</h3>
            <p>Pannes signalées</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <h3>15</h3>
            <p>En cours de traitement</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>27</h3>
            <p>Résolues</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">👷</div>
          <div className="stat-content">
            <h3>8</h3>
            <p>Agents actifs</p>
          </div>
        </div>
      </div>

      <div className="dashboard-sections">
        <div className="section">
          <h2>Signalements récents</h2>
          <div className="recent-reports">
            <div className="report-item">
              <div className="report-info">
                <h4>Panne secteur Kinshasa</h4>
                <p>Signalé il y a 2 heures</p>
              </div>
              <span className="status status-pending">En attente</span>
            </div>
            <div className="report-item">
              <div className="report-info">
                <h4>Câble endommagé Gombe</h4>
                <p>Signalé il y a 4 heures</p>
              </div>
              <span className="status status-progress">En cours</span>
            </div>
            <div className="report-item">
              <div className="report-info">
                <h4>Transformateur Limete</h4>
                <p>Signalé il y a 6 heures</p>
              </div>
              <span className="status status-resolved">Résolu</span>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Actions rapides</h2>
          <div className="actions-grid">
            <button className="action-btn">
              <span>➕</span>
              Nouveau signalement
            </button>
            <button className="action-btn">
              <span>🗺️</span>
              Voir la carte
            </button>
            <button className="action-btn">
              <span>📈</span>
              Rapports
            </button>
            <button className="action-btn">
              <span>⚙️</span>
              Paramètres
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
