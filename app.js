// 1. Select elements
const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strengthBar');
const feedback = document.getElementById('feedback');

// 2. Add event listener on input
passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;

  // 3. Calculate strength (we’ll fill this logic next)
  const strength = calculateStrength(password);

  // 4. Update progress bar and feedback
  strengthBar.value = strength.value;   // 0 - 100
  strengthBar.style.backgroundColor = strength.color;
  feedback.textContent = strength.text;
});

// 5. Strength calculation function (to implement next)
function calculateStrength(password) {
  // We’ll add rules here
  return { value: 0, color: '#007BFF', text: '' };
}
