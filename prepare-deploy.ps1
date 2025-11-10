# Script d'automatisation pour préparer le projet SNEL Connect pour la mise en ligne
# À lancer à la racine du projet, sous Windows PowerShell

# 1. Build du frontend
Write-Host '--- Build du frontend ---'
npm install
npm run build

# 2. Préparation du backend
Write-Host '--- Préparation du backend ---'
cd backend
npm install --production
cd ..

# 3. Nettoyage (suppression node_modules racine si présent)
if (Test-Path node_modules) {
    Write-Host '--- Suppression node_modules racine ---'
    Remove-Item -Recurse -Force node_modules
}
if (Test-Path package-lock.json) {
    Remove-Item -Force package-lock.json
}

# 4. Création de l'archive zip prête à transférer
Write-Host '--- Création de l''archive zip ---'
$files = @('backend', 'dist', 'package.json', 'vite.config.ts', 'tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json')
Compress-Archive -Path $files -DestinationPath snel-connect-app.zip -Force

Write-Host '--- Archive prête : snel-connect-app.zip ---'
Write-Host "Transferez ce fichier sur votre VPS et suivez les instructions de deploiement."
