// Uppgift 8 \\

// läs från en fil \\

// Med hjälp av node.js File System kan du läsa, skapa och skriva till filer \\

const fs = require('fs')

// Kodrad 7 kör file system med hjälp av variabeln "fs" \\

// Du kan använda fs.writeFile() för att skriva till en fil \\

fs.writeFile('File.txt', '123 abc', function (err) {
  if (err) throw err;
  console.log('Sparad');
});
// skriv in något och kör programmet \\
