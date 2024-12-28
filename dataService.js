const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, 'data.json');

// Read data from JSON file
const readData = () => {
    if (!fs.existsSync(dataFilePath)) {
        return { categories: [], words: [] };
    }
    const data = fs.readFileSync(dataFilePath);
    return JSON.parse(data);
};

// Write data to JSON file
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

module.exports = { readData, writeData }; 