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

exports.list = (req, res) => {
  Artist.find({}, (err, artists) => {
    res.json(artists);
  });
};

exports.get = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (err) {
      res.status(404).json({ error: 'The artist could not be found.' });
    }
    res.json(artist);
  });
};

exports.patch = (req, res) => {
  Artist.findById(req.params.artistId, (err, artist) => {
    if (err) {
      res.status(404).json({ error: 'The artist could not be found.' });
    } else {
      artist.set({
        name: req.body.name,
        genre: req.body.genre,
      });

      artist.save((updateError, updateArtist) => {
        if (updateError) {
          res.json({ error: 'Error artist not updated.' });
        }
        res.status(200).json(updateArtist);
      });
    }
  });
};
