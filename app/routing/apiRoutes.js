const express = require('express');
const bodyParser = require('body-parser');
const friendArray = require('../data/friends');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get('/api/friends', (req, res) => {
    return res.json(friendArray);
});

router.post('/api/friends', (req, res) => {
    const newFriend = req.body;
    console.log(newFriend);
    friendArray.push(newFriend);
    res.json(newFriend);
});

module.exports = router;