const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

app.post('/submit-form', (req, res) => {
  const { username, email, password, confirmPassword, age } = req.body;
  let errors = [];

  // Validate username
  if (username.length < 3 || username.length > 20) {
    errors.push('Username must be between 3 and 20 characters.');
  }

  // Validate email
  if (!email.includes('@')) {
    errors.push('Please enter a valid email address.');
  }

  // Validate password
  if (password.length < 6) {
    errors.push('Password must be at least 6 characters.');
  }

  // Validate confirm password
  if (password !== confirmPassword) {
    errors.push('Passwords do not match.');
  }

  // Validate age
  if (age < 18 || age > 120) {
    errors.push('Age must be between 18 and 120.');
  }

  if (errors.length > 0) {
    res.status(400).json({ errors });
  } else {
    res.status(200).json({ message: 'Form submitted successfully!' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
