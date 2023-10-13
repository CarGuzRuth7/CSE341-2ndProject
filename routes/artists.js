const routes = require('express').Router();
const controller = require('../controllers/artist');

routes.get('/', controller.getAllArtists);
routes.get('/:id', controller.getSingleArtist);

module.exports = routes;