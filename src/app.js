const express = require('express');
const bodyParser = require('body-parser');
const ArtistController = require('./controllers/Artist');

const app = express();
app.use(bodyParser.json());

app.post('/artists', ArtistController.post);

module.exports = app;
