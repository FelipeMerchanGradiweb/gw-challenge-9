const express = require('express');

const ordersRouter = require('./orders.js');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/orders', ordersRouter);
}

module.exports = routerApi;
