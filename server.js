const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
console.log('MongoDB URI:', process.env.MONGODB_URI);
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit if DB connection fails
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
app.use('/experiences', experienceRoutes);
app.use('/educations', educationRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});