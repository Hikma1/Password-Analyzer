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

   if (score <= 20) {
    strengthBar.style.width = "20%";
    strengthBar.classList.add("weak");
    feedback.textContent = "Very Weak 😟";
  } else if (score <= 40) {
    strengthBar.style.width = "40%";
    strengthBar.classList.add("weak");
    feedback.textContent = "Weak 😕";
  } else if (score <= 60) {
    strengthBar.style.width = "60%";
    strengthBar.classList.add("medium");
    feedback.textContent = "Medium 🙂";
  } else if (score <= 80) {
    strengthBar.style.width = "80%";
    strengthBar.classList.add("strong");
    feedback.textContent = "Strong 💪";
  }else {
    strengthBar.style.width = "100%";
    strengthBar.classList.add("very-strong");
    feedback.textContent = "Very Strong 🔥";
  }
});
  /* Floating Particles */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = Array.from({ length: 60 }, () => (
  {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2 + 1,
  dx: Math.random() * 0.5,
  dy: Math.random() * 0.5
}));


function animateParticles() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,255,255,0.6)";
    ctx.fill();

     p.x += p.dx;
    p.y += p.dy;

    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

