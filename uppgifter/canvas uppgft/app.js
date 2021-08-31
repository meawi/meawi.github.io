let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let keys = []

canvas.width = 1000
canvas.height = 500

class Box {
    constructor(x, y, w, h, color){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.color = color
    }
    draw = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h, this.color);
    }
}
//skapar objekt till spelet
ground = new Box(0, canvas.height, canvas.width, -10, "red")

player1 = new Box(10, canvas.height - ground.h - 70, 50, 50, "blue")

//skapar spelets loop
setInterval(gameLoop, 1)

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true
})

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode]
})

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player1.draw()
    move()
    checkWalls()
    ground.draw()
}

function move() {
    if(keys[87]){
        player1.y -= 1
    }
    if(keys[83]){
        if(player1.y + player1.h < canvas.height + ground.h)
        player1.y += 1
    }
    if(keys[65]){
        if(player1.x > 0)
        player1.x -= 1
    }
    if(keys[68]){
        if(player1.x + player1.w < canvas.width)
        player1.x += 1
    }

}

function checkWalls() {

}


