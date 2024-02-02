const express = require('express');
const router = express.Router();
const LikeOrCartPojo = require('../models/LikePojo');


router.get('/', async (req, res) => {
    try {
        const products = await LikeOrCartPojo.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const product = new LikeOrCartPojo({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category : req.body.category,
        image : req.body.image,
        rating: {count: req.body.rating.count, rate : req.body.rating.rate}

    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a product
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.likeOrCart.deleteOne();
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

async function getProduct(req, res, next) {
    let likeOrCart;
    try {
        likeOrCart = await LikeOrCartPojo.findById(req.params.id);
        if (likeOrCart == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.likeOrCart = likeOrCart;
    next();
}

module.exports = router;