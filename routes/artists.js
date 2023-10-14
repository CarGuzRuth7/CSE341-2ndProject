const routes = require('express').Router();
const controller = require('../controllers/artist');

routes.get('/', controller.getAllArtists);
routes.get('/:id', controller.getSingleArtist);
routes.post('/', controller.postNewArtist);

module.exports = routes;
