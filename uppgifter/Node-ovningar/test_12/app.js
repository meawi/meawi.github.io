// Uppgift 12 \\

// Skapa en server som körs localt på port 3000 och skriver ut från index.html filen \\

const http = require("http");
const fs = require("fs");

http.createServer((request, response)=>{
    fs.readFile("index.html", function(err, data){
        response.write(data);
    })
}).listen(3000, function(err) {
    if(err)throw err
    console.log("Connected to port 3000");
})