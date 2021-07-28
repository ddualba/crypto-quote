const express = require('express');
const app = express();
require('dotenv').config();
const path = require('path');

const PORT = process.env.PORT || 5000;

// Connect to Database - future feature

// Init Middleware
app.use(express.json({ extended: false })); // (Provides access to req.body)

// Define routes
app.use('/', require('./routes/coins'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
