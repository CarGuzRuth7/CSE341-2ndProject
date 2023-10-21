const routes = require('express').Router();
const controller = require('../controllers/artist');
const { validateArtist } = require('../validation/validateSchema');
const validateData = require('../validation/validation');

routes.get('/', controller.getAllArtists);
routes.get('/:id', controller.getSingleArtist);
routes.post('/', validateData(validateArtist), controller.postNewArtist);
routes.put('/:id', validateData(validateArtist), controller.updateArtist);
routes.delete('/:id', controller.deleteArtist);

module.exports = routes;
