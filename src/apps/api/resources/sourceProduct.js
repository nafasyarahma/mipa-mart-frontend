import axios from "axios";
import API_ENDPOINT from "../global/api-endpoint";

const { PRODUCTS } = API_ENDPOINT

class ProductSourceAPI {
  static async getAllProducts() {
    const response = await axios.get(PRODUCTS)
    return response.data.data
  }
}

export default ProductSourceAPI