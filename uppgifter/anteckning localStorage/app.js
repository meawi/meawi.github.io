const textArea = document.getElementsByTagName('textarea')[0];
const loadButton = document.getElementById('load');
const saveButton = document.getElementById('save');
const backgroundSelect = document.getElementsByTagName('select')[1];
const colorSelect = document.getElementsByTagName('select')[2];
const fontSelect = document.getElementsByTagName('select')[3];
const sizeSelect = document.getElementsByTagName("select")[0];

saveButton.addEventListener('click', onSave);
loadButton.addEventListener('click', onLoad);
backgroundSelect.addEventListener('change', onBackgroundChange);
colorSelect.addEventListener('change', onColorChange);
fontSelect.addEventListener('change', onFontChange);
sizeSelect.addEventListener("change", onSizeChange);

const font = localStorage.getItem('font') || 'monospace';
textArea.style.fontFamily = font;
fontSelect.value = font;

const background = localStorage.getItem('background') || 'white';
textArea.style.background = background;
backgroundSelect.value = background;

const color = localStorage.getItem('color') || 'white';
textArea.style.color = color;
colorSelect.value = color;

const size = localStorage.getItem('size') || 'normal';
textArea.style.fontSize = size;
sizeSelect.value = size;

function onSave() {
  localStorage.setItem('text', textArea.value);
}

function onLoad() {
  textArea.value = localStorage.getItem('text');
}

function onFontChange() {
  textArea.style.fontFamily = fontSelect.value;
  localStorage.setItem('font', fontSelect.value);
}

function onBackgroundChange() {
  textArea.style.background = backgroundSelect.value;
  localStorage.setItem('background', backgroundSelect.value);
}

function onColorChange() {
  textArea.style.color = colorSelect.value;
  localStorage.setItem('color', colorSelect.value);
}

function onSizeChange() {
 textArea.style.fontSize = sizeSelect.value;
 localStorage.setItem("size", sizeSelect.value)
}