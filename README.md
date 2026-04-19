# Frontend - projekt
Detta projekt är frontend av en fullständig CRUD applikation fi kursen DT207G. Frontend är byggd med Vite, SCSS, JS och eget REST api som är publicerad på Render.

Applikation består av tre sidor:
  - Startsida: visar alla arbetslivserfarenheter
  - Lägga till: formulär för att skapa nya poster
  - Om oss: information om projektet, tekniker och slutsatser

## Tekniker
  - Vite (med multipage)
  - HTML
  - SCSS
  - JavaScript
  - Getch API
  - Render backende api

## Struktur
```
frontend/
│
├── index.html
├── add.html
├── about.html
│
├── src/
│   ├── js/
│   │   ├── main.js
│   │   ├── add.js
│   │   └── api.js
│   │
│   └── styles/
│       ├── main.scss
│       ├── home.scss
│       ├── add.scss
│       └── about.scss
│
└── vite.config.js
```

## API anslutning
Frontend kommunicerar med backend via fetch anrop. 
Backend är publicerad på Render:
https://backend-lab-53gq.onrender.com/api/workexperience

Exempel på fetch anrop:
```
const response = await fetch("https://backend-lab-53gq.onrender.com/api/workexperience");
const data = await response.json();
```

## Installation och körning

### Klona projektet
```
git clone https://github.com/Punttt/frontend-lab.git
cd frontend-lab

```

### Installera dependencies
```
npm install

```

### Starta utvecklingsserver
```
npm run dev

```

## Funktionalitet
### Sidorpå webbplatsen
**Startsida**
  - Hämtar alla poster från backend
  - renderar dynamiskt i DOM
  - visar knapp för att ta bort poster

**Lägga till**
  - Formulär för att lägga till ny arbetslivserfarenhet
  - validering av fält
  - POST-anrop till backend
  - Återställning av formulär efter lyckad inskickning

**Om oss**
  - Beskriver sidan syfte och projektet med både front och back end
  - Förklarar backend, databas och deploy
  - Sammanfattar projektet

### Design
Webbsidan är uppbyggd med SCSS struktur och en responsiv layout. Enhetlig header och navigation.
Med fokus på enkelhet och tydlighet.

### Testning
Frontend har testats med:
  - Webbläsare chrome, edge och firefox.
  - render för backend
  - thunderclient för api testning

### Publicering
Netlify: https://laboration-cv.netlify.app/

## Skapad av
Pontus Johansson

