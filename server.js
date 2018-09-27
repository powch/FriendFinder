const express = require('express');
const bodyParser = require('body-parser');
const getAPI = require('./app/routing/apiRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/friends', getAPI);

app.listen(PORT, () => console.log("App listening on PORT " + PORT));