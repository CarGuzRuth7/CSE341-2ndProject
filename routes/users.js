const routes = require('express').Router();
const controller = require('../controllers/users');

routes.get('/', controller.getAllUsers);
routes.get('/:id', controller.getSingleUser);

module.exports = routes;