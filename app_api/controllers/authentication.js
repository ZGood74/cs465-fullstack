const mongoose = require('mongoose');
const passport = require('passport');
const User = mongoose.model('users');

/**
 * POST: /api/register
 * Description: Register a new user and return JWT token
 */
const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'All fields are required: name, email, and password.' });
  }

  const user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.setPassword(req.body.password);

  try {
    await user.save();
    const token = user.generateJWT();
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({
      message: 'Registration failed',
      error: err.message
    });
  }
};

/**
 * POST: /api/login
 * Description: Authenticate user using Passport and return JWT
 */
const login = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Both email and password are required.' });
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: 'Authentication error', error: err.message });
    }

    if (user) {
      const token = user.generateJWT();
      return res.status(200).json({ token });
    } else {
      return res.status(401).json({
        message: 'Invalid credentials',
        details: info
      });
    }
  })(req, res);
};

module.exports = {
  register,
  login
};
