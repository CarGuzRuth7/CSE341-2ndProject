const { ObjectId } = require('mongodb');
const db = require('../db/connection');

//GET REQUESTS
const getAllArtists = async (req, res) => {
  try {
    const data = await db.getDb().db('musicAPI').collection('artist').find();

    data.toArray().then((data) => {
      res.send(data).status(200);
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getSingleArtist = async (req, res) => {
  //get a single data from id
  try {
    const idParam = new ObjectId(req.params.id);
    const data = await db.getDb().db('musicAPI').collection('artist').find({ _id: idParam });
    data.toArray().then((data) => {
      if (data == '') {
        res.status(404).send(data.error || idParam + ' Artist Not Found');
      } else {
        res.send(data).status(200);
      }
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
//POST REQUEST
const postNewArtist = async (req, res) => {
  const artist = {
    name: req.body.name,
    age: req.body.age,
    typeOfVoice: req.body.typeOfVoice,
    band: req.body.band,
    genre: req.body.genre,
    death: req.body.death
  };

  const createArtist = await db.getDb().db('musicAPI').collection('artist').insertOne(artist);

  if (createArtist.acknowledged) {
    res.status(201).json(createArtist);
  } else {
    console.log('Error');
    res.status(500).send(createArtist.error || 'Could not create artist');
  }
};

//UPDATE request
const updateArtist = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const artist = {
    name: req.body.name,
    age: req.body.age,
    typeOfVoice: req.body.typeOfVoice,
    band: req.body.band,
    genre: req.body.genre,
    death: req.body.death
  };
  const updateArtist = await db
    .getDb()
    .db('musicAPI')
    .collection('artist')
    .updateOne({ _id: id }, { $set: artist });

  if (updateArtist.modifiedCount > 0) {
    res.status(204).send(updateArtist);
  } else {
    res.status(500).send(updateArtist.error || 'Could not update artist or does not exist');
  }
};

//DELETE request
const deleteArtist = async (req, res) => {
  const id = new ObjectId(req.params.id);
  const deleteArtist = await db.getDb().db('musicAPI').collection('artist').deleteOne({ _id: id });

  if (deleteArtist.deletedCount > 0) {
    res.status(200).send(deleteArtist);
  } else {
    res.status(500).send(deleteArtist.error || 'Could not delete artist or does not exist');
  }
};

module.exports = {
  getAllArtists,
  getSingleArtist,
  postNewArtist,
  updateArtist,
  deleteArtist
};
