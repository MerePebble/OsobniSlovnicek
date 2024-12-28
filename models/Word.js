const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    word: { type: String, required: true },
    translation: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }
});

module.exports = mongoose.model('Word', wordSchema);
