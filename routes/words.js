const express = require('express');
const router = express.Router();
const { readData, writeData } = require('../dataService'); // Import data service

// Create a new word
router.post('/', (req, res) => {
    const { word, translation, categoryId, isMemorized = false } = req.body; // Default to false if not provided
    const data = readData(); // Read current data
    const newWord = {
        id: Date.now().toString(),
        word,
        translation,
        categoryId,
        isMemorized,
        timeAdded: new Date() // Add the current date and time
    };
    data.words.push(newWord); // Add new word
    writeData(data); // Write updated data
    res.status(201).json(newWord); // Respond with the new word
});

// Get all words by category
router.get('/:categoryId', (req, res) => {
    const { categoryId } = req.params;
    const data = readData(); // Read current data
    const wordsInCategory = data.words.filter(word => word.categoryId === categoryId); // Filter words by category
    res.json(wordsInCategory); // Respond with filtered words
});

// Update memorization status
router.put('/:id/memorized', (req, res) => {
    const { id } = req.params;
    const { isMemorized } = req.body; // Expecting a boolean value
    const data = readData(); // Read current data
    const word = data.words.find(word => word.id === id); // Find the word by ID

    if (word) {
        word.isMemorized = isMemorized; // Update the memorization status
        writeData(data); // Write updated data
        res.json(word); // Respond with the updated word
    } else {
        res.status(404).json({ message: 'Word not found' }); // Handle not found case
    }
});

module.exports = router;
