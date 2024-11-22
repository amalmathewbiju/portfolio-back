const express = require('express');
const MContact = require('../models/mcontact.module');
const router = express.Router();

// Get all Contacts
router.get('/', async (req, res) => {
    try {
        const mcontacts = await MContact.find();
        res.json(mcontacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new Contact
router.post('/', async (req, res) => {
    try {
        const newMContact = new MContact(req.body);
        await newMContact.save();
        res.json(newMContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Contact
router.put('/:id', async (req, res) => {
    try {
        const updatedMContact = await MContact.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedMContact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete Contact
router.delete('/:id', async (req, res) => {
    try {
        await MContact.findByIdAndDelete(req.params.id);
        res.json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
