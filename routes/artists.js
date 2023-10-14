const routes = require('express').Router();
const controller = require('../controllers/artist');

routes.get('/', controller.getAllArtists);
routes.get('/:id', controller.getSingleArtist);
routes.post('/', controller.postNewArtist);
routes.put('/:id', controller.updateArtist);
routes.delete('/:id', controller.deleteArtist);

module.exports = routes;
