// Uppgift 6 \\

// Installera igen tillägget promt-sync \\

// För att använda tillägget skriver du in följande i app.js \\

const prompt = require('prompt-sync')();

// Efter detta fungerar variabel promt som en input \\

// Skapa en input och spara den i en variabel och skriv ut sedan "Hej {variabelns-namn}" \\

let hej = prompt("Skriv något")

console.log("Hej" + hej);