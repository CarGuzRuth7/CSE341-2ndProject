const routes = require('express').Router();
const controller = require('../controllers/album');

routes.get('/', controller.getAllAlbums);
routes.get('/:id', controller.getSingleAlbum);
routes.post('/', controller.postNewAlbum);
routes.put('/:id', controller.updateAlbum);
routes.delete('/:id', controller.deleteAlbum);

module.exports = routes;
