document.getElementById('registrationForm').addEventListener('submit', function(event) {
    let isValid = true;
  
    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
  
    // Validate username
    const username = document.getElementById('username').value;
    if (username.length < 3 || username.length > 20) {
      document.getElementById('usernameError').textContent = 'Username must be between 3 and 20 characters.';
      isValid = false;
    }
  
    // Validate email
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }
  
    // Validate password
    const password = document.getElementById('password').value;
    if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
      isValid = false;
    }
  
    // Validate confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
      isValid = false;
    }
  
    // Validate age
    const age = document.getElementById('age').value;
    if (age < 18 || age > 120) {
      document.getElementById('ageError').textContent = 'Age must be between 18 and 120.';
      isValid = false;
    }
  
    if (!isValid) {
      event.preventDefault();
    }
  });
  