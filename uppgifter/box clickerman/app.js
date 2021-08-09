highlightRandomCell();

function highlightRandomCell() {
  const cells = document.getElementsByClassName('cell');
  const randomIndex = Math.floor(cells.length * Math.random());
  cells[randomIndex].classList.add('--highlighted');
}