const express = require('express');
const friends = require('../data/friends');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/api/friends', (req, res) => {
    res.json(friends);
});

module.exports = app;