const mongoose = require('mongoose');

const MContactSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  link: { type: String, required: true } // Add link field
});

module.exports = mongoose.model('MContact', MContactSchema);
