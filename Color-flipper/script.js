// Select button and color span
const btn = document.getElementById('btn');
const colorSpan = document.getElementById('color');

// Function to generate random hex color
function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, '0');
}

// Event listener to flip color on click
btn.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
});
