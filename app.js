// Login Function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
  
    // Simulate login process
    if (email && password) {
      // Hide login section
      document.getElementById('login-section').classList.add('hidden');
  
      // Show personalized welcome message
      document.getElementById('welcome-section').classList.remove('hidden');
      document.getElementById('welcome-message').textContent = 'Welcome, Ankit Bhati!';
      document.getElementById('status-message').textContent = 'Good going, Ankit!';
    } else {
      alert('Please enter valid email and password.');
    }
  }
  // Signup Function
  function signup() {
    const fullname = document.getElementById('signup-fullname').value;
    const mobile = document.getElementById('signup-mobile').value;
    const email = document.getElementById('signup-email').value;
  
    // Simulate data saving
    if (fullname && mobile && email) {
      // Hide signup section
      document.getElementById('signup-section').classList.add('hidden');
  
      // Show success message
      document.getElementById('success-message').classList.remove('hidden');
    } else {
      alert('Please fill in all fields.');
    }
  }
  
  // Redirect to Login Page
  function goToLogin() {
    window.location.href = 'index.html';
  }
