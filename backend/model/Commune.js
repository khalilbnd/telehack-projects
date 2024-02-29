const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const communeSchema = new mongoose.Schema({
  
    _id: {
        type: String,
        default: uuidv4,
      },
  postcode: String,
  name: String,
  wilaya_id: {
    type: mongoose.Schema.Types.String,
    ref: 'Wilaya',
  },
  ar_name: String,
  longitude: String,
  latitude: String,
  // other fields for Commune
});

const Commune = mongoose.model('Commune', communeSchema);

module.exports = Commune;
