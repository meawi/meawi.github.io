const canvas = document.querySelector("#smile")
const ctx = canvas.getContext('2d');

ctx.lineWidth = 5;

ctx.beginPath();
ctx.arc(250, 240, 150, 0, 1 * Math.PI);
ctx.stroke();

ctx.beginPath()
ctx.arc(250 , 220, 150, 1*Math.PI, 2*Math.PI)
ctx.stroke();

//högra öra
ctx.beginPath()
ctx.arc(400, 237 ,20 , -0.5 *Math.PI, -1.5 * Math.PI)
ctx.stroke();

//vänstra öra
ctx.beginPath()
ctx.arc(100, 237 ,20 , 0.5 *Math.PI, 1.5 * Math.PI)
ctx.stroke();

//högra mittöra
ctx.beginPath();
ctx.moveTo(397, 240);
ctx.lineTo(410, 240);
ctx.stroke();

//vänstra mittöra
ctx.beginPath();
ctx.moveTo(103, 240);
ctx.lineTo(89, 240);
ctx.stroke();


//högra öra
ctx.beginPath();
ctx.arc(320, 240, 40, 0, 2 * Math.PI);
ctx.stroke();


//vänstra öga
ctx.beginPath();
ctx.arc(180, 240, 40, 0, 2 * Math.PI);
ctx.stroke();

//mun
ctx.beginPath()
ctx.arc(250, 310, 30, 1, 0.7 * Math.PI);
ctx.stroke();

//högra pupillen
ctx.beginPath();
ctx.arc(320, 240, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()

//vänstra pupillen
ctx.beginPath();
ctx.arc(180, 240, 10, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill()

// Starta draw loopen
requestAnimationFrame(draw);

// Variabler för att hålla koll på pupillernas koordinater
let x = 0;
let y = 0;

function draw() {

  // Räkna ut var pupillerna skall vara, exempel:
  x += 1;

  // Här ska du ha kod för att rita ut din smilegubbe.  

  // Exempel hur du ritar ut pupillerna:
  // (observera att x och y variablerna används i arc funktionen)
  context.fillStyle = 'black';
  context.beginPath();
  context.arc(x, y, 10, 0, Math.PI * 2);
  context.fill();

  // Vänta på datorskärmens nästa refresh och kalla på funktionen draw.
  // Detta gör så att funktionen draw körs med samma fps som skärmens refresh rate.
  requestAnimationFrame(draw);
}