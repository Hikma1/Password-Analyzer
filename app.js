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

    progressBar.className = "";
    progressBar.classList.add("strength-animate");
    if (score <= 20) {
  progressBar.style.width = "20%";
  progressBar.classList.add("weak");
  feedback.textContent = "Very Weak 😟";
}
    else if (score <= 40) {
  progressBar.style.width = "40%";
  progressBar.classList.add("weak");
  feedback.textContent = "Weak 😕";
}
   else if (score <= 60) {
  progressBar.style.width = "60%";
  progressBar.classList.add("medium");
  feedback.textContent = "Medium 🙂";
}
    else if (score <= 80) {
      progressBar.style.backgroundColor = "lightgreen";
      feedback.textContent = "Strong";
    }
    else {
      progressBar.style.backgroundColor = "green";
      feedback.textContent = "Very Strong";
    }
  }
    function updateCheck(id, condition) {
      checks[id].textContent = condition ? "✔ " + checks[id].dataset.text : "✘ " + checks[id].dataset.text;   
    }
toggleEye.addEventListener("click", () => {
passwordInput.type = passwordInput.type === "password" ? "text" : "password";
toggleEye.classList.toggle("fa-eye-slash");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

