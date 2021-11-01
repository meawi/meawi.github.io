const canvas = document.querySelector('#canvas');

/**
 * @type {CanvasRenderingContext2D}
 */
const context = canvas.getContext('2d');

// Ange storlek på canvas elementet.
canvas.width = 800;
canvas.height = 600;

// Bollens koordinater
let x = 0;
let y = 300;
let xspeed = 4;
let yspeed = 4;


// Starta animations loopen
update();

// Funktion som uppdaterar och ritar ut animationen.
function update() {
  // Vänta på nästa gång skärmen refreshar och kör samma funktion igen.
  window.requestAnimationFrame(update);

  x += xspeed;
  y += yspeed;

// hantera kollisioner
if(x > canvas.width - 30) {
    xspeed *= -1;

}
else if(x < 30) {
xspeed *= -1;
x = 30;
}

if(y > canvas.height - 30) {
    yspeed *= -1;

}
else if(y < 30) {
yspeed *= -1;
y = 30;
}

  // Uppdatera bollens position
 

  // Rita ut en vit bakgrund för vår canvas.
  context.fillStyle = '#ffffff';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Rita ut en cirkel.
  context.beginPath();
  context.arc(x, y, 30, 0, Math.PI * 2);

  context.fillStyle = 'cyan';
  context.fill();

  context.lineWidth = 5;
  context.strokeStyle = 'black';
  context.stroke();
}




