# Verwende das offizielle Node-Image als Basisimage
FROM node:alpine

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die package.json- und package-lock.json-Dateien in das Arbeitsverzeichnis
COPY package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den Rest des Codes in das Arbeitsverzeichnis
COPY . .

# Baue die React-Anwendung
RUN npm run build

