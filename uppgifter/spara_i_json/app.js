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
    const data = JSON.stringify(name)
    fs.writeFile("json.json", data, (err)=>{

        if (err) throw err
        console.log("saved")
    })
})
    
app.listen(3000, (err)=>{

})


app.post("/login")