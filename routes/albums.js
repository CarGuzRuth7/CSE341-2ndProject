const routes = require('express').Router();
const controller = require('../controllers/album');
const { validateAlbum } = require('../validation/validateSchema');
const validateData = require('../validation/validation');

routes.get('/', controller.getAllAlbums);
routes.get('/:id', controller.getSingleAlbum);
routes.post('/', validateData(validateAlbum), controller.postNewAlbum);
routes.put('/:id', validateData(validateAlbum), controller.updateAlbum);
routes.delete('/:id', controller.deleteAlbum);

module.exports = routes;
