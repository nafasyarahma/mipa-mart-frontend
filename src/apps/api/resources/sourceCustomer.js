import axios from "axios";
import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";
import CONFIG from "../global/config";

const { BASE_URL } = CONFIG

const {
  CUSTOMER_REGISTER,
  CUSTOMER_PROFILE,
  CUSTOMER_CART,
  CUSTOMER_CART_BY_ID,
  CUSTOMER_CART_ITEM,
  CUSTOMER_ORDER,
  CUSTOMER_ORDER_BY_ID,
  CUSTOMER_ORDER_HISTORY,
  ADMIN_CUSTOMERS,
  ADMIN_CUSTOMER_BY_ID,
  CUSTOMER_FORGOT_PASSWORD,
  CUSTOMER_RESET_PASSWORD,
} = API_ENDPOINT;

class CustomerSourceAPI {
  static async postCustomer(data) {
    const response = await axios.post(CUSTOMER_REGISTER, data);
    return response.data.message;
  }

  static async getCustomerProfile() {
    const response = await authenticatedApi.get(CUSTOMER_PROFILE);
    return response.data.data;
  }

  static async putCustomerProfile(data) {
    const response = await authenticatedApi.put(CUSTOMER_PROFILE, data);
    return response.data.message;
  }

   // Commerce
   static async addToCart(data) {
    const response = await authenticatedApi.post(CUSTOMER_CART, data);
    return response.data.message;
  }

  static async getCart() {
    const response = await authenticatedApi.get(CUSTOMER_CART);
    return response.data.data;
  }

  static async getCartById(id) {
    const response = await authenticatedApi.get(CUSTOMER_CART_BY_ID(id));
    return response.data.data;
  }

  static async changeQuantity(id, data) {
    const response = await authenticatedApi.put(CUSTOMER_CART_ITEM(id), data);
    return response.data.message;
  }

  static async getSellerPaymentMethods(cartId) {
    const response = await authenticatedApi.get(`${BASE_URL}/customer/order/payment-methods/${cartId}`);
    return response.data.data;
  }

  static async getSellerDeliveryMethods(cartId) {
    const response = await authenticatedApi.get(`${BASE_URL}/customer/order/delivery-methods/${cartId}`);
    return response.data.data;
  }

  static async deleteCartItem(id) {
    const response = await authenticatedApi.delete(CUSTOMER_CART_ITEM(id));
    return response.data.message;
  }

  static async postOrder(cartId, data) {
    const response = await authenticatedApi.post(`${CUSTOMER_ORDER}/${cartId}`, data);
    return response.data.message;
  }

  static async getOrdersCustomer() {
    const response = await authenticatedApi.get(CUSTOMER_ORDER);
    return response.data.data;
  }

  static async getOrderById(id) {
    const response = await authenticatedApi.get(CUSTOMER_ORDER_BY_ID(id));
    return response.data.data;
  }

  static async completeOrder(id) {
    const response = await authenticatedApi.put(`${CUSTOMER_ORDER_BY_ID(id)}/complete`);
    return response.data.message;
  }

  static async cancelOrder(id) {
    const response = await authenticatedApi.put(`${CUSTOMER_ORDER_BY_ID(id)}/cancel`);
    return response.data.message;
  }

  static async getHistoryOrder() {
    const response = await authenticatedApi.get(CUSTOMER_ORDER_HISTORY);
    return response.data.data;
  }

  static async getOrderReviewsHistory(orderId) {
    const response = await authenticatedApi.get(`${CUSTOMER_ORDER_BY_ID(orderId)}/review/history`);
    return response.data.data;
  }

  // admin
  static async getAllCustomers() {
    const response = await authenticatedApi.get(ADMIN_CUSTOMERS);
    return response.data.data;
  }

  static async getCustomerById(id) {
    const response = await authenticatedApi.get(ADMIN_CUSTOMER_BY_ID(id));
    return response.data.data;
  }

  static async putCustomerById(id, data) {
    const response = await authenticatedApi.put(ADMIN_CUSTOMER_BY_ID(id), data);
    return response.data.message;
  }

  static async deleteCustomerById(id) {
    const response = await authenticatedApi.delete(ADMIN_CUSTOMER_BY_ID(id));
    return response.data.message;
  }

  //common
  static async sendEmailForgotPassword(data) {
    const response = await axios.post(CUSTOMER_FORGOT_PASSWORD, data);
    return response.data.message;
  }

  static async resetPassword(token, data) {
    const response = await axios.post(CUSTOMER_RESET_PASSWORD(token), data);
    return response.data.message;
  }
}

export default CustomerSourceAPI;
