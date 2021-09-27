// Uppgift 10 \\

// Skapa en fil med text i, sedan ska du lägga till text i filen \\

// Använd fs.appendFile() för att lägga till text \\

const fs = require('fs')

fs.writeFile('File.txt', '123 abc', function (err) {
    if (err) throw err;
    console.log('Sparad');
  });

  fs.appendFile('File.txt', ' 123 abc', function (err) {
    if (err) throw err;
    console.log('Sparad');
  });
 
