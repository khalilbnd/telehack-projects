const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    _id: {
      type: String,
      default: uuidv4,
    },
    n_client: {
      type: String,
      ref: 'Client',
    },
    n_phone: {
      type: String,
      match: /^0[0-9]{8}$/, // Regex for a number starting with 0 and containing 9 digits
    },
    password: String,
    email: {
      type: String,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, // Regex for email validation
    },
  });

module.exports = mongoose.model('User', userSchema);