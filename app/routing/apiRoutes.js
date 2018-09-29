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
    const newFriendScores = newFriend.scores;
    
    let chosenFriend;
    let totalDifference = 41;

    friendArray.forEach(friend => {
        const scores = friend.scores;
        let currentDifference = 0;

        scores.forEach((score, idx) => currentDifference += Math.abs(score - newFriendScores[idx]));

        if (currentDifference < totalDifference) {
            totalDifference = currentDifference;
            chosenFriend = friend;
        }
    });

    friendArray.push(newFriend);
    res.json(chosenFriend);
});

module.exports = router;