document.getElementById("emiForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const amount = parseFloat(document.getElementById("amount").value);
  const annualRate = parseFloat(document.getElementById("rate").value);
  const tenure = parseFloat(document.getElementById("tenure").value);
  const result = document.getElementById("result");

  if (isNaN(amount) || isNaN(annualRate) || isNaN(tenure) || amount <= 0 || annualRate <= 0 || tenure <= 0) {
    result.textContent = "Please enter valid numbers!";
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
  const totalPayment = emi * tenure;
  const totalInterest = totalPayment - amount;

  result.innerHTML = `
    Monthly EMI: ₹${emi.toFixed(2)}<br>
    Total Interest: ₹${totalInterest.toFixed(2)}<br>
    Total Payment: ₹${totalPayment.toFixed(2)}
  `;
});
