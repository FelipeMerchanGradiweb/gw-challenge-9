const express = require('express');
const OrdersService = require('../services/orders');

const router = express.Router();
const service = new OrdersService();

router.post('/', async (request, response) => {
  try {
    const body = request.body;
    const response = await service.init(body);
    response.status(200).send({
      response: response,
    });
  } catch (error) {
    response.json({
      message: error.message,
    });
  }
});

module.exports = router;
