document.getElementById("investmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let amount = parseFloat(document.getElementById("amount").value);
  let duration = parseInt(document.getElementById("duration").value);
  let roiType = document.getElementById("roiType").value;
  let paymentMethod = document.getElementById("paymentMethod").value;

  let rate = 0.05;
  if (roiType === "stocks") rate = 0.12;
  else if (roiType === "realestate") rate = 0.08;
  else if (roiType === "crypto") rate = 0.20;

  if (isNaN(amount) || isNaN(duration) || roiType === "" || paymentMethod === "") {
    document.getElementById("output").innerText = "⚠ Please fill in all fields correctly.";
    return;
  }

  let returns = amount * Math.pow((1 + rate / 12), duration);
  document.getElementById("output").innerText =
    `$${returns.toFixed(2)} after ${duration} months`;

  localStorage.setItem("amount", amount);
  localStorage.setItem("duration", duration);
  localStorage.setItem("roiType", roiType);
  localStorage.setItem("paymentMethod", paymentMethod);
  localStorage.setItem("estimatedReturn", returns.toFixed(2));
});

document.getElementById("investBtn").addEventListener("click", function() {
  window.location.href = "successful.html";
});


document.getElementById("paymentMethod").addEventListener("change", function() {
  let paymentFields = document.getElementById("paymentFields");
  paymentFields.innerHTML = ""; 

  if (this.value === "card") {
    paymentFields.innerHTML = `
      <div class="form-group">
        <label for="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required>
      </div>
      <div class="form-group">
        <label for="expiry">Expiry Date</label>
        <input type="month" id="expiry" required>
      </div>
      <div class="form-group">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" placeholder="123" required>
      </div>
    `;
  } else if (this.value === "bank") {
    paymentFields.innerHTML = `
      <div class="form-group">
        <label for="accountNumber">Account Number</label>
        <input type="text" id="accountNumber" placeholder="Enter account number" required>
      </div>
      <div class="form-group">
        <label for="bankName">Bank Name</label>
        <input type="text" id="bankName" placeholder="Enter bank name" required>
      </div>
    `;
  } else if (this.value === "paypal") {
    paymentFields.innerHTML = `
      <div class="form-group">
        <label for="paypalEmail">PayPal Email</label>
        <input type="email" id="paypalEmail" placeholder="example@domain.com" required>
      </div>
    `;
  } else if (this.value === "crypto") {
    paymentFields.innerHTML = `
      <div class="form-group">
        <label for="walletAddress">Wallet Address</label>
        <input type="text" id="walletAddress" placeholder="Enter crypto wallet address" required>
      </div>
    `;
  }
});











