const Artist = require('../models/artist');

exports.post = (req, res) => {
  const artist = new Artist({
    name: req.body.name,
    genre: req.body.genre,
  });
  artist.save((err, artistCreated) => {
    res.status(201).json(artistCreated);
  });
};
