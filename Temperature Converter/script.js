function convertTemp() {
  const tempInput = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const result = document.getElementById("result");

  if (tempInput === "") {
    result.textContent = "Please enter a temperature value!";
    return;
  }

  let converted;
  let outputText = "";

  if (unit === "celsius") {
    converted = (tempInput * 9) / 5 + 32;
    outputText = `${tempInput}°C = ${converted.toFixed(2)}°F`;
  } else {
    converted = ((tempInput - 32) * 5) / 9;
    outputText = `${tempInput}°F = ${converted.toFixed(2)}°C`;
  }

  result.textContent = outputText;
}
