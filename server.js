const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// const htmlRoutes = require('./app/routing/htmlRoutes');
const apiRoutes = require('./app/routing/apiRoutes');

// app.use('/', htmlRoutes);
// app.use('/survey', htmlRoutes);
app.use('/api/friends', apiRoutes);


app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
