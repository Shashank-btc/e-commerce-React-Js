// routes/products.js

const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a specific product
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
});

// Create a product
router.post('/', async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category : req.body.category,
        image : req.body.image,
        isLiked : req.body.isLiked,
        // cart : req.cart.cart,
        rating: {count: req.body.rating.count, rate : req.body.rating.rate}

    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a product
router.patch('/:id', getProduct, async (req, res) => {
    if (req.body.title != null) {
        res.product.title = req.body.title;
    }

    if (req.body.price != null) {
        res.product.price = req.body.price;
    }

    if (req.body.description != null) {
        res.product.description = req.body.description;
    }
    if(req.body.isLiked != null){
        res.product.isLiked = req.body.isLiked;
    }

    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.patch('/:title', getProductByTitle, async(req, res) =>{
    if(req.body.isLiked != null){
        res.product.isLiked = req.body.isLiked;
    }
    try {
        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

// Delete a product
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.product.deleteOne();
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Middleware to get a specific product by ID
async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.product = product;
    next();
}


async function getProductByTitle(req, res, next) {
    let product;

    try {
        product = await Product.find(req.params.title);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.product = product;
    next();
}

module.exports = router;
