const express = require('express');
const Experience = require('../models/experience.model');
const router = express.Router();

// Get all Experience
router.get('/', async (req, res) => {
    try {
        const experience = await Experience.find();
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
        // Add new Experience
        router.post('/', async (req, res) => {
            try {
                const newExperience = new Experience(req.body);
                await newExperience.save();
                res.json(newExperience);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });

  // Update an experience by ID
router.put('/:id', async (req, res) => {
    console.log("Update request received for ID:", req.params.id); // Debugging log
    try {
      const updatedExperience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedExperience);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Delete an experience by ID
  router.delete('/:id', async (req, res) => {
    console.log("Delete request received for ID:", req.params.id); // Debugging log
    try {
      await Experience.findByIdAndDelete(req.params.id);
      res.json({ message: 'Experience deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  

        module.exports = router;
