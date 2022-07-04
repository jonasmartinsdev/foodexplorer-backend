const { Router } = require('express');
const platesRoutes = require('./plates.routes');
const sessionsRoutes = require('./sessions.routes');
const usersRoutes = require('./users.routes');

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/plates', platesRoutes);
routes.use('/sessions', sessionsRoutes);
module.exports = routes;
