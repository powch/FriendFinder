const express = require('express');
const friendArray = require('../data/friends');
const router = express.Router();

router.use('/api/friends', (req, res, next) => {
    res.json(friendArray);
});

module.exports = router;
