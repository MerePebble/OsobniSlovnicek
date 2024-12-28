const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/categories');
const wordRoutes = require('./routes/words');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Use routes
app.use('/api/categories', categoryRoutes);
app.use('/api/words', wordRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
