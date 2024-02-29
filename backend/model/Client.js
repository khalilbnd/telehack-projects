
const mongoose = require('mongoose');

const RandomNClient = () => Math.floor(Math.random() * 10000000) + 1000000
function getNextMonth(date) {
    const currentMonth = date.getMonth();
    date.setMonth(currentMonth + 1);
    return date;
  }
const clientSchema = new mongoose.Schema({
    _id: {
      type: String,
      default: RandomNClient,
    },
    name: String,
    surname: String,
    wilaya: {
      type: String,
      ref: 'Wilaya',
    },
    
    commune: {
      type: String,
      ref: 'Commune',
    },
    n_telephone: {
      type: String,
      unique: true,
      match: /^0[0-9]{8}$/, // Regex for a number starting with 0 and containing 9 digits
    },
    adresse: String,
    subscription_pack: {
      type: String,
      ref: 'Subscription',
    },
    subscription_expire: {
        type: Date,
        default: new Date(),
    },
    subscription_started: {
        type: Date,
        default: getNextMonth(new Date()),
    },
  });


  const Client = mongoose.model('Client', clientSchema);
module.exports = Client;