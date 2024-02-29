const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const wilayaSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
      },
  code: String,
  name: String,
  ar_name: String,
  longitude: String,
  latitude: String,
});

const Wilaya = mongoose.model('Wilaya', wilayaSchema);

module.exports = Wilaya;