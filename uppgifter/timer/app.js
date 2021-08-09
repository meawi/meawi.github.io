const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const timeElement = document.getElementById('time');

let startTime = null;
let intervalId;

stopButton.style.display = 'none';

startButton.addEventListener('click', onStart);
stopButton.addEventListener('click', onStop);

function onStart() {
  stopButton.style.display = null;
  startButton.style.display = 'none';
  
  startTime = new Date();
  intervalId = setInterval(onTick, 10);
}

function onStop() {
  startButton.style.display = null;
  stopButton.style.display = 'none';
  clearInterval(intervalId);
}

function onTick() {
  const now = new Date();
  const elapsedMilliseconds = now.getTime() - startTime.getTime();
  const elapsedSeconds = elapsedMilliseconds / 1000;
  timeElement.innerHTML = elapsedSeconds.toFixed(3);
}