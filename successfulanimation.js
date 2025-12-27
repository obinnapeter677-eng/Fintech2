document.addEventListener("DOMContentLoaded", () => {
  const confirmBtn = document.querySelector(".btnn, .btn"); // adjust if needed
  const confirmInvestment = document.querySelector(".btnn") || document.querySelector(".btn");

  if (confirmInvestment) {
    confirmInvestment.addEventListener("click", () => {
      // Optionally, you can add a brief fade or loader before redirect
      setTimeout(() => {
        window.location.href = "successfulanimation.html";
      }, 500);
    });
  }
});
