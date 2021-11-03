const express = require('express');
const OrdersService = require('../services/orders');

const router = express.Router();
const service = new OrdersService();

router.get('/', async (request, response) => {
  try {
    const ordersQuantity = await service.findFulfillmentOrders();
    response.send({
      orders: ordersQuantity,
    });
  } catch (error) {
    response.json({
      message: error.message,
    })
  }
});

module.exports = router;
