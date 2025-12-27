window.addEventListener("DOMContentLoaded", () => {
    
  const amount = localStorage.getItem("amount");
  const duration = localStorage.getItem("duration");
  const roiType = localStorage.getItem("roiType");
  const paymentMethod = localStorage.getItem("paymentMethod");
  const estimatedReturn = localStorage.getItem("estimatedReturn");

  document.getElementById("summaryAmount").innerText = `$${amount}`;
  document.getElementById("summaryPlan").innerText = roiType;
  document.getElementById("summaryPayment").innerText = paymentMethod;
  document.getElementById("summaryReturn").innerText = `$${estimatedReturn}`;
});
