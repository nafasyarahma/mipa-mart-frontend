import axios from "axios";
import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";

const { 
  PRODUCTS,
  PRODUCT_BY_ID,
  MEMBER_PRODUCTS,
  MEMBER_PRODUCT_BY_ID,
  MEMBER_PRODUCT_STATUS,
} = API_ENDPOINT

class ProductSourceAPI {
  // public
  static async getAllProducts(name='', category='') {
    const response = await axios.get(PRODUCTS, {
      params: { name, category }
    })
    return response.data.data;
  }

  static async getProductById(id) {
    const response = await axios.get(PRODUCT_BY_ID(id))
    return response.data.data;
  }

  // member
  static async postProduct(data) {
    const response = await authenticatedApi.post(MEMBER_PRODUCTS, data)
    return response.data.message;
  }

  static async getMemberProducts() {
    const response = await authenticatedApi.get(MEMBER_PRODUCTS)
    return response.data.data;
  }

  static async putProductById(id, data) {
    const response = await authenticatedApi.put(MEMBER_PRODUCT_BY_ID(id), data)
    return response.data.message;
  }

  static async putProductStatusById(id, data) {
    const response = await authenticatedApi.put(MEMBER_PRODUCT_STATUS(id), data)
    return response.data.message;
  }

  static async deleteProductById(id) {
    const response = await authenticatedApi.delete(MEMBER_PRODUCT_BY_ID(id))
    return response.data.message;
  }

  // customer
  static async addProductReview(productId, data) {
    const response = await authenticatedApi.post(`${PRODUCTS}/${productId}/reviews`, data);
    return response.data.message;
  }

  static async getProductReview(productId) {
    const response = await axios.get(`${PRODUCTS}/${productId}/reviews`);
    return response.data.data;
  }
}

export default ProductSourceAPI