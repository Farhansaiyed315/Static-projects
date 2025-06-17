const fontSizeRange = document.getElementById("fontSizeRange");
const fontSizeValue = document.getElementById("fontSizeValue");
const text = document.getElementById("text");

fontSizeRange.addEventListener("input", () => {
  const size = fontSizeRange.value;
  text.style.fontSize = `${size}px`;
  fontSizeValue.textContent = size;
});
