import axios from "axios";
import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";

const {
  CUSTOMER_REGISTER,
  CUSTOMER_PROFILE,
  CUSTOMER_CART,
  CUSTOMER_CART_ITEM,
  ADMIN_CUSTOMERS,
  ADMIN_CUSTOMER_BY_ID
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

  static async deleteCartItem(id) {
    const response = await authenticatedApi.delete(CUSTOMER_CART_ITEM(id));
    return response.data.message;
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
}

export default CustomerSourceAPI;
