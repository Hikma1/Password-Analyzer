const passwordInput = document.getElementById("passwordInput");
const progressBar = document.getElementById("progressBar");
const feedback = document.getElementById("feedback");
const toggleEye = document.getElementById("toggleEye");
const themeToggle = document.getElementById("themeToggle");
const checks ={
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    lowercase: document.getElementById("lowercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special")
}
passwordInput.addEventListener("input", analyzePassword);

function analyzePassword() {
    const password = passwordInput.value;
    let score = 0;

    updateCheck("length",password.length >= 8);
    updateCheck("uppercase", /[A-Z]/.test(password));
    updateCheck("lowercase", /[a-z]/.test(password));
    updateCheck("number", /[0-9]/.test(password));
    updateCheck("special", /[!@#$%^&*(),.?":{}|<>]/.test(password));

    score=document.querySelectorAll(".checklist li:contains('✔')").length * 20;

    progressBar.style.width = score + "%";

    if (score <= 20) {
      progressBar.style.backgroundColor = "red";
      feedback.textContent = "Very Weak";
    }
    else if (score <= 40) {
      progressBar.style.backgroundColor = "orange";
      feedback.textContent = "Weak";
    }
    else if (score <= 60) {
      progressBar.style.backgroundColor = "yellow";
      feedback.textContent = "Moderate";
    }
  
  
  
  
  
  
  
  
  
  }
