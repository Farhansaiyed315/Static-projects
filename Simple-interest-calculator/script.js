document.getElementById("interestForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const time = parseFloat(document.getElementById("time").value);
  const result = document.getElementById("result");

  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
    result.textContent = "Please enter valid values!";
    return;
  }

  const interest = (principal * rate * time) / 100;
  const total = principal + interest;

  result.innerHTML = `
    Simple Interest: ₹${interest.toFixed(2)}<br>
    Total Amount: ₹${total.toFixed(2)}
  `;
});
