let score = 5


// tar emot data via fetch
fetch('http://localhost:3000/getData', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    } 
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
})

// skickar data via fetch
let data = {score}
fetch('http://localhost:3000/getData', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
})