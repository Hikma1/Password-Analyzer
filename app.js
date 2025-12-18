// Select elements
const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const feedback = document.getElementById("feedback");
const scoreText = document.getElementById("scoreText");

const checkLength = document.getElementById("check-length");
const checkUpper = document.getElementById("check-upper");
const checkLower = document.getElementById("check-lower");
const checkNumber = document.getElementById("check-number");
const checkSymbol = document.getElementById("check-symbol");

const historyList = document.getElementById("historyList");
let strengthHistory = [];

// Requirement elements
const reqLength = document.getElementById("req-length");
const reqUpper = document.getElementById("req-upper");
const reqLower = document.getElementById("req-lower");
const reqNumber = document.getElementById("req-number");
const reqSymbol = document.getElementById("req-symbol");
passwordInput.addEventListener("input", analyzePassword);

function analyzePassword() {
  const password = passwordInput.value;
  let score = 0;
   // Requirements
  updateRequirement(reqLength, password.length >= 8);
  updateRequirement(reqUpper, /[A-Z]/.test(password));
  updateRequirement(reqLower, /[a-z]/.test(password));
  updateRequirement(reqNumber, /\d/.test(password));
  updateRequirement(reqSymbol, /[\W_]/.test(password));

  // Score system
  if (password.length >= 8) score += 20;
  if (/\d/.test(password)) score += 20;
  if (/[\W_]/.test(password)) score += 20;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[a-z]/.test(password)) score += 20;

  scoreText.textContent = `Strength: ${score} / 100`;

  // Length check
if (password.length >= 8) {
  checkLength.classList.add("valid");
  checkLength.textContent = "✅ At least 8 characters";
} else {
  checkLength.classList.remove("valid");
  checkLength.textContent = "❌ At least 8 characters";
}
// Uppercase
if (/[A-Z]/.test(password)) {
  checkUpper.classList.add("valid");
  checkUpper.textContent = "✅ At least one uppercase letter";
} else {
  checkUpper.classList.remove("valid");
  checkUpper.textContent = "❌ At least one uppercase letter";
}
// Lowercase
if (/[a-z]/.test(password)) {
  checkLower.classList.add("valid");
  checkLower.textContent = "✅ At least one lowercase letter";
} else {
  checkLower.classList.remove("valid");
  checkLower.textContent = "❌ At least one lowercase letter";
}
// Number
if (/\d/.test(password)) {
  checkNumber.classList.add("valid");
  checkNumber.textContent = "✅ At least one number";
} else {
  checkNumber.classList.remove("valid");
  checkNumber.textContent = "❌ At least one number";
}
// Symbol
if (/[\W_]/.test(password)) {
  checkSymbol.classList.add("valid");
  checkSymbol.textContent = "✅ At least one symbol";
} else {
  checkSymbol.classList.remove("valid");
  checkSymbol.textContent = "❌ At least one symbol";
}

// Save history entry
const entry = {
  label: feedback.textContent,
  score: score
};

strengthHistory.push(entry);

// Keep only last 5
if (strengthHistory.length > 5) {
  strengthHistory.shift();
}

// Update history UI
renderHistory();

// Color
  let color = "red";
  if (score <= 20) color = "red";
  else if (score <= 40) color = "orange";
  else if (score <= 60) color = "goldenrod";
  else if (score <= 80) color = "green";
  else color = "darkgreen";
 // Update bar
  strengthBar.style.width = score + "%";
  strengthBar.style.backgroundColor = color;
}
// Helper function
function updateRequirement(element, condition) {
  if (condition) {
    element.textContent = "✔ " + element.textContent.slice(2);
    element.classList.add("valid");
    element.classList.remove("invalid");
  }
  else {
    element.textContent = "✖ " + element.textContent.slice(2);
    element.classList.add("invalid");
    element.classList.remove("valid");
  }
}
const toggleEye = document.getElementById("toggleEye");
toggleEye.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleEye.textContent = "👁️‍🗨️"; // open
  } else {
    passwordInput.type = "password";
    toggleEye.textContent = "👁️"; // closed
  }
});
const copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener("click", () => {
  const password = passwordInput.value;

  if (password === "") {
    feedback.textContent = "Nothing to copy!";
    feedback.style.color = "red";
    return;
  }
   navigator.clipboard.writeText(password)
    .then(() => {
      feedback.textContent = "Password copied ✔️";
      feedback.style.color = "green";
        setTimeout(() => {
        feedback.textContent = "";
      }, 1500);
    });
}); 
function renderHistory() {
  historyList.innerHTML = "";