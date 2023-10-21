const routes = require('express').Router();
const controller = require('../controllers/users');
const { validateUser } = require('../validation/validateSchema');
const validateData = require('../validation/validation');

routes.get('/', controller.getAllUsers);
routes.get('/:id', controller.getSingleUser);
routes.post('/', validateData(validateUser), controller.postNewUser);
routes.put('/:id', validateData(validateUser), controller.updateUser);
routes.delete('/:id', controller.deleteUser);

module.exports = routes;
