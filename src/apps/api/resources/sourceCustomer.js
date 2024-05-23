import axios from "axios";
import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";

const {
  CUSTOMER_REGISTER,
  CUSTOMER_PROFILE,
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

  static async putCustomerProfile() {
    const response = await authenticatedApi.put(CUSTOMER_PROFILE);
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

  static async putCustomerById(id) {
    const response = await authenticatedApi.put(ADMIN_CUSTOMER_BY_ID(id));
    return response.data.message;
  }

  static async deleteCustomerById(id) {
    const response = await authenticatedApi.delete(ADMIN_CUSTOMER_BY_ID(id));
    return response.data.message;
  }
}

export default CustomerSourceAPI;
