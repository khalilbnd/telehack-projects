
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');


const subscriptionSchema = new mongoose.Schema({
    _id: {
      type: String,
      default: uuidv4,
    },
    type: {
      type: String,
      enum: ['Fibre', '4G', 'ADSL'],
    },
    title: String,
    price: Number,
    advantage: [String],
  });

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
