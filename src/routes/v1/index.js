const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const boardRoute = require('./board.route');
const listRoute = require('./list.route');
const taskRoute = require('./task.route');


const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  // route for board creation
  {
    path: '/board',
    route: boardRoute,
  },
  // this is the route for the list creation
  {
    path: '/list',
    route: taskRoute,
  },
  // this is the route for the task
  {
    path: '/task',
    route: listRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
