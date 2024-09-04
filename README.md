# Three.js Scene Initializer

Dieses Projekt enthält eine `SceneInitializer`-Klasse, die eine grundlegende 3D-Szene mit [Three.js](https://threejs.org/) erstellt. Sie beinhaltet Kamera, Renderer, Beleuchtung, Benutzersteuerung und ein animiertes 3D-Objekt (rotierender Würfel). Darüber hinaus kann sie externe 3D-Modelle laden und reagiert dynamisch auf Fenstergrößenänderungen.

## Features

- **Kamera & Renderer**: Erstellt eine Perspektivkamera und einen WebGL-Renderer für die 3D-Darstellung.
- **Lichtquelle**: Eine Richtungslichtquelle beleuchtet die Szene.
- **Benutzersteuerung**: Mit den OrbitControls kann die Kamera um das Objekt bewegt und gezoomt werden.
- **Animierter Würfel**: Ein einfacher Würfel rotiert kontinuierlich in der Szene.
- **Modell-Loader**: Lädt GLTF-Modelle in die Szene.
- **Dynamische Größenanpassung**: Passt Renderer und Kamera an, wenn das Browserfenster geändert wird.

## Installation

1. Stelle sicher, dass du Node.js und npm installiert hast.
2. Klone das Repository:
   git clone https://github.com/Raxselot/3D-Cube
Installiere die benötigten Abhängigkeiten:


npm install

Starte den lokalen Server:

npm start

Verwendung

Stelle sicher, dass du den viewer-Container in deinem HTML-Dokument hast:


<div id="viewer"></div>
Die Szene wird durch Aufruf des SceneInitializer gestartet:

new SceneInitializer();
Modell einbinden
Du kannst dein eigenes 3D-Modell als .gltf oder .glb Datei laden, indem du den Pfad in der loadModels() Methode anpasst:

Add your gltf. modell here
![image](https://github.com/user-attachments/assets/5ac85fc7-7cd7-4d7b-9a10-2bf76a563767)


Abhängigkeiten

Three.js - WebGL-basierte Bibliothek für 3D-Grafiken
GLTFLoader - Für das Laden von GLTF-Modellen
OrbitControls - Ermöglicht das Bewegen der Kamera durch Benutzerinteraktion


Lizenz
Dieses Projekt steht unter der MIT-Lizenz.

Passe die Datei nach deinen Bedürfnissen an, z.B. füge zusätzliche Details zu Features oder Anweisungen hinzu, wenn nötig.






