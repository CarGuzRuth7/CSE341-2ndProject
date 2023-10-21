const routes = require('express').Router();
const controller = require('../controllers/artist');
const { validateArtist } = require('../validation/validateSchema');
const validateData = require('../validation/validation');

routes.get('/', controller.getAllArtists);
routes.get('/:name', controller.getSingleArtist);
routes.post('/', validateData(validateArtist), controller.postNewArtist);
routes.put('/:name', validateData(validateArtist), controller.updateArtist);
routes.delete('/:name', controller.deleteArtist);

module.exports = routes;
