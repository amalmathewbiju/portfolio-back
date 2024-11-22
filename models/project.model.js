const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    name: String,
    description: String,
    title: String,
    link: String
});

module.exports = mongoose.model('Project', ProjectSchema);
