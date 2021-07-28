const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to Database - future feature

// Init Middleware
app.use(express.json({ extended: false })); // (Provides access to req.body)

// Define routes
app.use('/', require('./routes/coins'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
