const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const feedback = document.getElementById("feedback");
passwordInput.addEventListener("input", analyzePassword);

function analyzePassword() {
  const password = passwordInput.value;
  let score = 0;
   if (password.length >= 8) score += 20;
  if (/[0-9]/.test(password)) score += 20;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[a-z]/.test(password)) score += 20;
  if (/[^A-Za-z0-9]/.test(password)) score += 20;

  let color = "red";
  let text = "Very Weak";

  if (score <= 20) {
    color = "red";
    text = "Very Weak";
  } 
  else if (score <= 40) {
    color = "orange";
    text = "Weak";
  }
  else if (score <= 60) {
    color = "goldenrod";
    text = "Medium";
  }
  else if (score <= 80) {
    color = "green";
    text = "Strong";
  }
  else {
    color = "darkgreen";
    text = "Very Strong";
  }
   // Visual update
  strengthBar.style.width = score + "%";
  strengthBar.style.backgroundColor = color;

  feedback.textContent = text;
  feedback.style.color = color;
}
