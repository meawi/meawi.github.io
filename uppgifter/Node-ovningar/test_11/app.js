// Uppgift 11 \\

// Skapa en server som körs localt på port 3000 och skriver ut "hello HTML" på webbläsaren\\

// för att skapa en server i node.js kan man använda HTTP modulen som finns inbyggd \\

const http = require('http')

// För att skapa servern används createServer() functionen som kräver två parameter (request , response) \\

// request begär server av clienten(frontend) data, response skickar server ut data till clienten \\

// exempel på kod \\

http.createServer(function (req, res) {
    res.write('Hello html'); //skriver response till clienten
    res.end(); //slutar ge response
  }).listen(3000, function(err) {
    if(err)throw err
    console.log("Connected to port 3000");
}) //vilken port servern lyssnar till (körs på)

// skriv in localhost:3000 på din webbläsare \\
