const express = require('express');
const Education = require('../models/education.model');
const router = express.Router();

// Get all Education
router.get('/', async (req, res) => {
    try {
        const educations = await Education.find();
        res.json(educations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
        // Add new Education
        router.post('/', async (req, res) => {
            try {
                const newEducation = new Education(req.body);
                await newEducation.save();
                res.json(newEducation);
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        });

  // Update an Education by ID
router.put('/:id', async (req, res) => {
    
    try {
      const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedEducation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Delete an Education by ID
  router.delete('/:id', async (req, res) => {
    
    try {
      await Education.findByIdAndDelete(req.params.id);
      res.json({ message: 'Education deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  

  

        module.exports = router;
