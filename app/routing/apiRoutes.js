const express = require('express');
const friendArray = require('../data/friends');
const router = express.Router();

router.get('/api/friends', (req, res) => {
    return res.json(friendArray);
});

module.exports = router;