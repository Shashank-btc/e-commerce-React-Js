// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        rate: {
            type: String, // Assuming rating rate is a number
            required: true,
        },
        count: {
            type: String, // Assuming rating count is a number
            required: true,
        }
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
