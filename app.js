const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const feedback = document.getElementById("feedback");
passwordInput.addEventListener("input", analyzePassword);

function analyzePassword() {
  const password = passwordInput.value;
  let score = 0;