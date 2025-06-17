function updateInputs() {
  const shape = document.getElementById("shape").value;
  const inputsDiv = document.getElementById("inputs");

  let html = "";

  if (shape === "circle") {
    html = `
        <label for="radius">Radius (r):</label>
        <input type="number" id="radius" placeholder="Enter radius" />
      `;
  } else if (shape === "square") {
    html = `
        <label for="side">Side (a):</label>
        <input type="number" id="side" placeholder="Enter side length" />
      `;
  } else if (shape === "rectangle") {
    html = `
        <label for="length">Length (l):</label>
        <input type="number" id="length" placeholder="Enter length" />
        <label for="width">Width (w):</label>
        <input type="number" id="width" placeholder="Enter width" />
      `;
  }

  inputsDiv.innerHTML = html;
}

function calculateArea() {
  const shape = document.getElementById("shape").value;
  let area = 0;
  const result = document.getElementById("result");

  if (shape === "circle") {
    const r = parseFloat(document.getElementById("radius").value);
    if (isNaN(r) || r <= 0) {
      result.textContent = "Please enter a valid radius!";
      return;
    }
    area = Math.PI * r * r;
    result.textContent = `Area of Circle: ${area.toFixed(2)} units²`;
  } else if (shape === "square") {
    const a = parseFloat(document.getElementById("side").value);
    if (isNaN(a) || a <= 0) {
      result.textContent = "Please enter a valid side!";
      return;
    }
    area = a * a;
    result.textContent = `Area of Square: ${area.toFixed(2)} units²`;
  } else if (shape === "rectangle") {
    const l = parseFloat(document.getElementById("length").value);
    const w = parseFloat(document.getElementById("width").value);
    if (isNaN(l) || l <= 0 || isNaN(w) || w <= 0) {
      result.textContent = "Please enter valid length and width!";
      return;
    }
    area = l * w;
    result.textContent = `Area of Rectangle: ${area.toFixed(2)} units²`;
  }
}

// Initialize inputs on page load
updateInputs();
