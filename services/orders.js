const axios = require('axios');
const boom = require('@hapi/boom');

class OrdersService {
  constructor() {
    this.customer = null;
    this.sendEmail = false;
  }

  async init({ customer }) {
    this.customer = customer;
    this.checkCustomerAccount();
    if (this.sendEmail) {
      const response = await this.sendInvitationEmail();
      return response;
    }
    throw boom.conflict('The user has an active account');
  }

  checkCustomerAccount() {
    if (this.customer.state === 'disabled' && this.customer.state !== 'invited') {
      this.sendEmail = true;
    }
  }

  async sendInvitationEmail() {
    try {
      const response = await axios({
        method: 'post',
        url: `https://felipe-store-2-0.myshopify.com/admin/api/2021-10/customers/${this.customer.id}/send_invite.json`,
        headers: {
          'X-Shopify-Access-Token': process.env.ACCESS_TOKEN,
        }
      });
      return response;
    } catch (error) {
      throw new Error();
    }
  }
}

module.exports = OrdersService;
