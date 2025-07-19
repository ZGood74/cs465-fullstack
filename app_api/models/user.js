const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

/**
 * User schema for storing account information securely.
 * Fields:
 * - email: Unique email for login
 * - name: User’s display name
 * - hash: Hashed password
 * - salt: Salt used in hashing
 */
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  hash: String,
  salt: String
});

/**
 * Sets a secure hashed password for the user.
 * @param {string} password - The plain-text password to be hashed.
 */
userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
};

/**
 * Validates a user's password against stored hash.
 * @param {string} password - The password attempt.
 * @returns {boolean} - Whether the password is valid.
 */
userSchema.methods.validPassword = function(password) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
    .toString('hex');
  return this.hash === hash;
};

/**
 * Generates a JSON Web Token for authenticated sessions.
 * @returns {string} - A signed JWT token.
 */
userSchema.methods.generateJWT = function() {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1h'
    }
  );
};

// Register the User model with Mongoose
const User = mongoose.model('users', userSchema);
module.exports = User;
