// Uppgift 9 \\

// Skapa en fil och läs sedan från filen \\

// tips använd fs.readFile('namn_påFilen', function(err, data) för att läsa filen \\


const fs = require('fs')

fs.writeFile('File.txt', '123 abc', function (err) {
    if (err) throw err;
    console.log('Sparad');
  });

  fs.readFile("File.txt", "utf-8", function(err, data) {
    console.log(data);
  });
