const express = require('express');
const bodyParser = require('body-parser');
const ArtistController = require('./controllers/Artist');

const app = express();
app.use(bodyParser.json());

app.post('/artists', ArtistController.post);
app.get('/artists', ArtistController.list);
app.get('/artists/:artistId', ArtistController.get);
app.patch('/artists/:artistId', ArtistController.patch);

module.exports = app;
