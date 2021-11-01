// Först måste vi inkludera de paket vårt program är beroende av.
// Detta gör vi med funktionen require. 
//
// Vi använder följande paket:
//   * express: Gör det enkelt att starta en webb-server
//   * path   : Gör det enklare att hantera sökväg till filer/mappar.

const express = require('express');
const path = require('path');

// En array för att hålla alla meddelandet som skickas till servern.
const messages = [];

// Skapar en variabel för att konfigurera vår webbserver.
const server = express();

// Lägg till public end-points till alla filer som finns i mappen ../front-end.
server.use(express.static(path.join(__dirname, '../front-end')));

// Konfigurera server att ta emot data i json format.
// De betyder att när front-end skickar data med funktionen fetch
// skall den data va i formatet json.
server.use(express.json());

// End-point för att hämta alla meddelanden som skickats till servern.
server.get('/message', (request, response) => {
  // Skickar messages arrayn till klienten.
  response.json(messages);
});

// End-point som lägger till ett meddelande till vår messages array
// och sen skickar tillbaka den nya arrayn till klienten.
server.post('/message', (request, response) => {
  // Lägg till det meddelande som klienten skickade till messages arrayn.
  // request.body innehåller de meddelande klienten skickar med post.
  messages.push(request.body);

  // Skickar messages arrayn till klienten.
  response.json(messages);
});

// Starta webb-servern och lyssna på port 3000.
// De betyder att du kan öppna en webb-browser och besöka adressen:
// http://localhost:3000
server.listen(3000);