// 1️⃣ Select elements
const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const feedback = document.getElementById("feedback");

// 2️⃣ Listen to typing
passwordInput.addEventListener("input", analyzePassword);

// 3️⃣ Function to calculate password strength
function analyzePassword() {
  const password = passwordInput.value;
  let score = 0;

  // Length ≥ 8
  if (password.length >= 8) score += 20;

  // Contains number
  if (/\d/.test(password)) score += 20;

  // Contains symbol
  if (/[\W_]/.test(password)) score += 20;

  // Contains uppercase
  if (/[A-Z]/.test(password)) score += 20;

  // Contains lowercase
  if (/[a-z]/.test(password)) score += 20;

  // For now, just log the score
  console.log("Score:", score);
}
