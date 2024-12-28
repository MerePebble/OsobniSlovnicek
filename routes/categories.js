const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../dataService'); // Import data service

// Create a new category
router.post('/', (req, res) => {
    const { name } = req.body;
    const data = readData(); // Read current data
    const newCategory = { id: Date.now().toString(), name, timeAdded: new Date() };
    data.categories.push(newCategory); // Add new category
    writeData(data); // Write updated data
    res.status(201).json(newCategory); // Respond with the new category
});

// Get all categories
router.get('/', (req, res) => {
    const data = readData(); // Read current data
    res.json(data.categories); // Respond with categories
});

module.exports = router;
