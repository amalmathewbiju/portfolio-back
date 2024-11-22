const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    place: String,
    course: String,
    duration: String,
    description: String
});

module.exports = mongoose.model('Education', EducationSchema);
