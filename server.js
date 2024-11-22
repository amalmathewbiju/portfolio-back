const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
const mongoURI = 'mongodb://localhost:27017/portfolioDB';  // Replace with your MongoDB URI
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected successfully');
}).catch(err => {
  console.log('MongoDB connection error:', err);
});

// Import Routes
const profileRoutes = require('./routes/profile.routes');
const projectRoutes = require('./routes/project.routes');
const contactRoutes = require('./routes/contact.routes');
const mcontactRoutes  = require('./routes/mcontact.routes');
const experienceRoutes = require('./routes/experience.routes');
const educationRoutes = require('./routes/education.routes');

// Use Routes
app.use('/profile', profileRoutes);
app.use('/projects', projectRoutes);
app.use('/contacts', contactRoutes);
app.use('/mcontacts', mcontactRoutes);
app.use('/experience', experienceRoutes);
app.use('/education', educationRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});