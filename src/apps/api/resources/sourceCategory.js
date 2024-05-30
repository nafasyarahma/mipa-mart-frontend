import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";
import axios from "axios";

const {
  CATEGORIES,
  CATEGORY_BY_ID,
  ADMIN_CATEGORIES,
  ADMIN_CATEGORY_BY_ID,
} = API_ENDPOINT

class CategorySourceAPI {
  static async postCategory(data) {
    const response = await authenticatedApi.post(ADMIN_CATEGORIES, data);
    return response.data.message;
  }

  static async getAllCategories() {
    const response = await axios.get(CATEGORIES);
    return response.data.data;
  }

  static async getCategoryById(id) {
    const response = await axios.get(CATEGORY_BY_ID(id));
    return response.data.data;
  }

  static async putCategoryById(id, data) {
    const response = await authenticatedApi.put(ADMIN_CATEGORY_BY_ID(id), data);
    return response.data.message;
  }

  static async deleteCategoryById(id) {
    const response = await authenticatedApi.delete(ADMIN_CATEGORY_BY_ID(id));
    return response.data.message;
  }
}

export default CategorySourceAPI;