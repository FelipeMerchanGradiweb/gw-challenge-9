const axios = require('axios');

class OrdersService {
  async findFulfillmentOrders() {
    try {
      const quantity = 1;
      return quantity;
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = OrdersService;
