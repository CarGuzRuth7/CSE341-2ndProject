const routes = require('express').Router();
const { auth, requiresAuth } = require('express-openid-connect');

require('dotenv').config();
//calls enviroment variables
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
    req.oidc.isAuthenticated()
      ? '<h2>😃 Logged in.</h2> <br>Add -> /logout <- to Log Out session. <br> <h4>Paths:<h4> <b>/api-docs</b><br> <b>/profile</b><br> <b>/albums</b><br> <b>/artists</b><br> <b>/users</b><br>'
      : '<h2>👋 Logged out.</h2> <br>Add -> /login <- to Log In and see the Music API.'
  );
});

//give the user information
routes.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

//logs out the user
routes.get('/logout', (req, res) => {
  req.oidc.logout();
  res.redirect('/');
});

module.exports = routes;
