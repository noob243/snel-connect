import './Home.css'

function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Bienvenue sur Snel Connect</h1>
        <p className="hero-description">
          Application de gestion des signalements de pannes électriques en RDC
        </p>
      </div>

      <div className="features-section">
        <h2>Fonctionnalités principales</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📸 Signalement de panne</h3>
            <p>Signalez une panne avec photo/vidéo et géolocalisation</p>
          </div>
          
          <div className="feature-card">
            <h3>👷 Interface agent</h3>
            <p>Gestion des interventions et itinéraires optimisés</p>
          </div>
          
          <div className="feature-card">
            <h3>📊 Dashboard admin</h3>
            <p>Statistiques détaillées et exports de données</p>
          </div>
          
          <div className="feature-card">
            <h3>🔐 Authentification</h3>
            <p>Accès sécurisé pour usagers, agents et administrateurs</p>
          </div>
          
          <div className="feature-card">
            <h3>💳 Paiement en ligne</h3>
            <p>Mobile money et paiement par carte acceptés</p>
          </div>
          
          <div className="feature-card">
            <h3>🗺️ Cartographie</h3>
            <p>Visualisation des pannes sur carte interactive</p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Commencez maintenant</h2>
        <p>Connectez-vous pour accéder à toutes les fonctionnalités</p>
        <button className="cta-button">Se connecter</button>
      </div>
    </div>
  )
}

export default Home
