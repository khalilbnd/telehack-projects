const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Wilaya = require('../model/Wilaya');
const Commune = require('../model/Commune');
const Subscription = require('../model/Subscription');
const Client = require('../model/Client');
const User = require('../model/User');
const Admin = require('../model/Admin');
const Demande = require('../model/Demande');

require('dotenv').config();

// Define your models (Wilaya, Daira, Commune, Subscription, Client, User, Admin, Demande)

// Connection options (customize as needed)
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// MongoDB connection URI (replace 'your_database_uri' with the actual URI)
const mongoURI = process.env.DATABASE_URI;

// Connect to the MongoDB database
mongoose.connect(mongoURI, dbOptions);

// Define connection events
const db = mongoose.connection;

db.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Export models for use in other parts of your application
module.exports = db;
