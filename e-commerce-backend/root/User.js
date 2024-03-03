const express = require('express');
const router = express.Router();
const UserPojo = require('../models/Userpojo');



router.get('/', async (req, res) => {
    try {
        const user = await UserPojo.find();
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const user = new UserPojo({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userId : req.body.userId,
        wallet : req.body.wallet,

    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a user
router.delete('/:userId', getUser, async (req, res) => {
    try {
        await res.user.deleteOne();
        res.json({ message: 'user deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a User
router.patch('/:userId', getUserId, async (req, res) => {
    if (req.body.wallet != null) {
        res.user.wallet = req.body.wallet;
    }
    try{
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch(error){
        res.status(400).json({ message: error.message });
    }
});

async function getUser(req, res, next) {
    let user;
    try {
        user = await UserPojo.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.user = user;
    next();
}
async function getUserId(req, res, next) {
    let user;
    try {
        user = await UserPojo.findOne({userId : req.params.userId});
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.user = user;
    next();
}

router.get('/:userId', getUserId, (req, res) => {
    res.json(res.user);
});

module.exports = router;