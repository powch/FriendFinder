const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/app/public')));

const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

app.get('/survey', htmlRoutes);
app.get('/api/friends', apiRoutes);
app.post('/api/friends', apiRoutes);
app.get('/*', htmlRoutes);


app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));