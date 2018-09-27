const express = require('express');
const path = require('path');
const router = express.Router();

router.use((req, res, next) => {
    console.log(req.url);
    if (req.url === '/survey') {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    } else {
        res.sendFile(path.join(__dirname, '/../public/home.html'));
    }
});

module.exports = router;