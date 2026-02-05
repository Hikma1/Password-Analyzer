const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const feedback = document.getElementById("feedback");
const toggleEye = document.getElementById("toggleEye");
/* Eye Toggle */
toggleEye.addEventListener("click", () => {
   passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";
});
passwordInput.addEventListener("input", () => {
  const password = passwordInput.value;
  let score = 0;
  if (password.length >= 8) score += 20;
  if (/[A-Z]/.test(password)) score += 20;
  if (/[a-z]/.test(password)) score += 20;
  if (/\d/.test(password)) score += 20;
  if (/[\W_]/.test(password)) score += 20;

  strengthBar.className = "progress-fill";


  }));