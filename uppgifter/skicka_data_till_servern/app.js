const fs = require("fs");
const express = require("express")
const app = express()

app.use(express.static(__dirname + "/"));
app.use(express.urlencoded({

    extended:true


}))
    
app.post("/data", (req, res)=> {
    const name = req.body
    console.log(name)
})
    
app.listen(3000, (err)=>{

})


app.post("/login")