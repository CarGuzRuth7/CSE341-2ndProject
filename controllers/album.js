const { ObjectId } = require('mongodb');
const db = require('../db/connection');

//GET REQUESTS
const getAllAlbums = async (req, res) => {
  try {
    const data = await db.getDb().db('musicAPI').collection('albums').find();

    data.toArray().then((data) => {
      res.send(data).status(200);
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getSingleAlbum = async (req, res) => {
  //get a single data from id
  try {
    const idParam = new ObjectId(req.params.id);
    const data = await db.getDb().db('musicAPI').collection('albums').find({ _id: idParam });
    data.toArray().then((data) => {
      if (data == '') {
        res.status(404).send(data.error || idParam + ' Album Not Found');
      } else {
        res.send(data).status(200);
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

//POST REQUEST
const postNewAlbum = async (req, res) => {
  const album = {
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
    artist: req.body.artist,
    totalSongs: req.body.totalSongs,
    duration: req.body.duration
  };

  const createAlbum = await db.getDb().db('musicAPI').collection('albums').insertOne(album);

  if (createAlbum.acknowledged) {
    res.status(201).json(createAlbum);
  } else {
    console.log('Error');
    res.status(500).send(createAlbum.error || 'Could not create album');
  }
};

//UPDATE request
const updateAlbum = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const album = {
    title: req.body.title,
    year: req.body.year,
    genre: req.body.genre,
    artist: req.body.artist,
    totalSongs: req.body.totalSongs,
    duration: req.body.duration
  };

  const updateAlbum = await db
    .getDb()
    .db('musicAPI')
    .collection('albums')
    .updateOne({ _id: id }, { $set: album });

  if (updateAlbum.modifiedCount > 0) {
    res.status(204).send(updateAlbum);
  } else {
    res.status(500).send(updateAlbum.error || 'Could not update album or does not exist');
  }
};

//DELETE request
const deleteAlbum = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const deleteALbum = await db.getDb().db('musicAPI').collection('albums').deleteOne({ _id: id });

  if (deleteALbum.deletedCount > 0) {
    res.status(200).send(deleteALbum);
  } else {
    res.status(500).send(deleteALbum.error || 'Could not delete album or does not exist');
  }
};

module.exports = {
  getAllAlbums,
  getSingleAlbum,
  postNewAlbum,
  updateAlbum,
  deleteAlbum
};
