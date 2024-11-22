const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
    company: String,
    role: String,
    duration: String,
    description: String
});

module.exports = mongoose.model('Experience', ExperienceSchema);
