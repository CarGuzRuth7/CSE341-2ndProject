const routes = require('express').Router();

routes.use('/', require('./swagger'));

routes.use('/albums', require('./albums'));
routes.use('/artists', require('./artists'));
routes.use('/users', require('./users'));

module.exports = routes;
