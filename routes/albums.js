const routes = require('express').Router();
const controller = require('../controllers/album');

routes.get('/', controller.getAllAlbums);
routes.get('/:id', controller.getSingleAlbum);

module.exports = routes;