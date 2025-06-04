document.getElementById("tipForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);
  const result = document.getElementById("result");

  if (isNaN(bill) || isNaN(tipPercent) || bill <= 0 || tipPercent < 0) {
    result.textContent = "Please enter valid bill and tip values!";
    return;
  }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;

  result.innerHTML = `
    Tip Amount: ₹${tipAmount.toFixed(2)}<br/>
    Total Amount: ₹${totalAmount.toFixed(2)}
  `;
});
