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

  if (password.length >= 8) score += 20;
  if (/\d/.test(password)) score += 20;
  if (/[\W_]/.test(password)) score += 20;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[a-z]/.test(password)) score += 20;

  // Update progress bar
  strengthBar.value = score;

  // Feedback text
  if (score <= 20) {
    feedback.textContent = "Very Weak";
    feedback.style.color = "red";
  }
  else if (score <= 40) {
    feedback.textContent = "Weak";
    feedback.style.color = "orange";
  }
  else if (score <= 60) {
    feedback.textContent = "Medium";
    feedback.style.color = "goldenrod";
  }
  else if (score <= 80) {
    feedback.textContent = "Strong";
    feedback.style.color = "green";
  }
  else {
    feedback.textContent = "Very Strong";
    feedback.style.color = "darkgreen";
  }
  let color = "red";

if (score <= 20) {
  color = "red";
} 
else if (score <= 40) {
  color = "orange";
}
else if (score <= 60) {
  color = "goldenrod";
}
else if (score <= 80) {
  color = "green";
}
else {
  color = "darkgreen";
}
// Update progress bar fill color
strengthBar.style.setProperty("--fill-color", color);
strengthBar.style.backgroundColor = "#e0e0e0"; // optional
strengthBar.style.color = color; // fallback
strengthBar.style.setProperty("background-color", "#e0e0e0");
strengthBar.style.setProperty("accent-color", color); // for Chrome
strengthBar.style.setProperty("webkitProgressValue", color); // attempt Chrome
}

