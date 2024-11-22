const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
  link: { type: String, required: true } // Add link field
});

module.exports = mongoose.model('Contact', ContactSchema);
