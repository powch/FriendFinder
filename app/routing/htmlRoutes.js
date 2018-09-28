const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/pages/survey.html'));
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/../public/pages/home.html'));
});

module.exports = router;