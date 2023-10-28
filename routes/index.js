const routes = require('express').Router();
const { auth, requiresAuth } = require('express-openid-connect');

require('dotenv').config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
routes.use(auth(config));

routes.get('/', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out. -> /login <- Log in to see the API'
  );
});

routes.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});
routes.get('/logout', (req, res) => {
  req.oidc.logout();
  res.redirect('/');
});

routes.use('/', requiresAuth(), require('./swagger'));

routes.use('/albums', requiresAuth(), require('./albums'));
routes.use('/artists', requiresAuth(), require('./artists'));
routes.use('/users', requiresAuth(), require('./users'));

module.exports = routes;
