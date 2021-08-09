const containerElement = document.getElementById('container');
const scoreElement = document.getElementById('score');
const playAgainButton = document.getElementById('play-again');

let startTime = null;
let isGameOver = false;

document.body.style.background = 'red';
containerElement.style.display = 'none';

const delay = 3000 + 4000 * Math.random();
let timeoutHandle = setTimeout(onTimeout, delay);

window.addEventListener('pointerdown', onWindowClicked);
playAgainButton.addEventListener('click', onPlayAgainClicked);

function onTimeout() {
  document.body.style.background = 'lime';
  startTime = new Date();
}

function onWindowClicked() {
  if(startTime == null) {
    clearTimeout(timeoutHandle);
    const delay = 3000 + 4000 * Math.random();
    timeoutHandle = setTimeout(onTimeout, delay);
  }
  else if(isGameOver == false) {
    isGameOver = true;

    const endTime = new Date();
    const deltaTime = endTime.getTime() - startTime.getTime();
    
    scoreElement.innerHTML = deltaTime + ' ms';
    containerElement.style.display = null;
  }
}

function onPlayAgainClicked() {
  window.location.reload();
}

