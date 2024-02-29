
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const adminSchema = new mongoose.Schema({
    _id: {
      type: String,
      default: uuidv4,
    },
    nom: String,
    prenom: String,
    role: {
      type: String,
      enum: ['Super Admin', 'Personnel'],
    },
    n_contact: {
      type: String,
      match: /^0[0-9]{8}$/, // Regex for a number starting with 0 and containing 9 digits
    },
    served_by: {
      type: String,
      ref: 'Admin', // Reference to another Admin by _id
    },
  });
  
  const Admin = mongoose.model('Admin', adminSchema);
  
  module.exports = Admin;
  