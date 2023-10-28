const routes = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

//require authentication to visit the API
routes.use('/', require('./auth'));

//routes requires a log in session to see it
routes.use('/', requiresAuth(), require('./swagger'));

routes.use('/albums', requiresAuth(), require('./albums'));
routes.use('/artists', requiresAuth(), require('./artists'));
routes.use('/users', requiresAuth(), require('./users'));

module.exports = routes;
