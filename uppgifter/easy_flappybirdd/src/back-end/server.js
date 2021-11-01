const express = require('express')
const fs = require('fs')
const server = express()
server.use(express.static('front-end'))
server.use(express.json())

server.post('/saveData', (req, res)=>{
    let data = req.body
    let stringify = JSON.stringify(data)
    console.log(stringify)
    //Sparar till .json fil
    fs.writeFileSync('users.json', stringify)
    //Servern skickar tillbaka index.html
})
server.get('/getData', (req, res)=>{
    const data = fs.readFileSync('users.json')
    res.json(JSON.parse(data)) 
})

server.listen(3000)