
@echo off
REM Script de lancement complet pour la démo locale

REM Vérifier Node.js
where node >nul 2>nul || (
	echo Node.js n'est pas installé. Installez-le puis relancez ce script.
	pause
	exit /b
)

REM Installer les dépendances backend si besoin
cd backend
if not exist node_modules (
	echo Installation des dépendances backend...
	npm install
)
cd ..

REM Installer les dépendances frontend si besoin
if not exist node_modules (
	echo Installation des dépendances frontend...
	npm install
)

REM Lancer le backend (avec nodemon si dispo, sinon node)
start cmd /k "cd backend && npm run start"

REM Lancer le frontend (Vite)
start cmd /k "npm run dev"

REM Attendre quelques secondes pour laisser le temps aux serveurs de démarrer
timeout /t 5 /nobreak >nul

REM Ouvrir l'application dans le navigateur (front)
start http://localhost:5173

REM Ouvrir l'API backend dans le navigateur
start http://localhost:4000

pause
