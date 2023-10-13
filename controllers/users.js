const { ObjectId } = require('mongodb');
const db = require('../db/connection');

//GET REQUESTS
const getAllUsers = async (req, res) => {
  try {
    const data = await db.getDb().db('musicAPI').collection('users').find();

    data.toArray().then((data) => {
      res.send(data).status(200);
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getSingleUser = async (req, res) => {
  //get a single data from id
  try {
    const idParam = new ObjectId(req.params.id);
    const data = await db.getDb().db('musicAPI').collection('users').find({ _id: idParam });
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

module.exports = {
  getAllUsers,
  getSingleUser
};
