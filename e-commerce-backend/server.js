// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/e-commerce', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Routes
const productsRouter = require('./root/products');
const Cart = require('./root/Cart');
const Like = require('./root/Like');
app.use('/products', productsRouter);
app.use('/cart', Cart);
app.use('/like', Like);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
