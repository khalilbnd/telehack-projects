const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const demandeSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  n_client: {
    type: mongoose.Schema.Types.String,
    ref: 'Client',
  },
  type: {
    type: String,
    enum: ['Reclamation', 'Augmentation de Debit', 'Demande Installation', 'Annulation de forfait'],
  },
  status: {
    type: String,
    enum: ['En attente', 'Approuve', 'Refus'],
  },
  note: {
    type: String,
    default: null,
  },
});

const Demande = mongoose.model('Demande', demandeSchema);

module.exports = Demande;
