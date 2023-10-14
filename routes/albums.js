const routes = require('express').Router();
const controller = require('../controllers/album');

routes.get('/', controller.getAllAlbums);
routes.get('/:id', controller.getSingleAlbum);
routes.post('/', controller.postNewAlbum);

module.exports = routes;
