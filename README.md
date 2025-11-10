# Snel Connect App

Application web pour la gestion des signalements de pannes électriques en RDC.

## Stack technique
- Front-end : React + TypeScript (Vite)
- Back-end : Node.js + Express
- Base de données : SQLite

## Fonctionnalités principales
- Signalement de panne (photo/vidéo, géolocalisation)
- Interface agent (liste, intervention, itinéraire)
- Dashboard admin (statistiques, export)
- Authentification (usager, agent, admin)
- Paiement en ligne (mobile money, carte)

## Lancement du projet

### Front-end
1. Installer les dépendances :
   ```
   npm install
   ```
2. Démarrer le serveur de développement :
   ```
   npm run dev
   ```

### Back-end
1. Aller dans le dossier `backend` :
   ```
   cd backend
   ```
2. Installer les dépendances :
   ```
   npm install
   ```
3. Démarrer le serveur :
   ```
   npm start
   ```

---

Pour toute question, contactez l’équipe technique.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
