const socket = io()
console.log(socket);

let msg = document.getElementById("input");
let form = document.getElementById("form");
let chat = document.getElementById("msg"); 

form.addEventListener("submit", (e)=> {
    e.preventDefault()
        console.log(input.value);
        if(input.value){
            socket.emit("chat message", input.value)
        }
});

socket.on("chat message", (msg)=>{
    var list = document.createElement("li")
    list.innerHTML = msg;
    chat.appendChild(list);
})