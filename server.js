const express = require('express');
const router = express.Router();
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Connect to Database

// Init Middleware
app.use(express.json({ extended: false })); // (Provides access to req.body)

// Define routes
app.use('/', require('./routes/coins'));
// app.get('/', async (req, res) => {
//   res.send('API Running');
// });
// app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
