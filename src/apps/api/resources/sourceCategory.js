import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";

const {
  ADMIN_CATEGORIES,
  ADMIN_CATEGORY_BY_ID,
} = API_ENDPOINT

class CategorySourceAPI {
  static async postCategory(data) {
    const response = await authenticatedApi.post(ADMIN_CATEGORIES, data);
    return response.data.message;
  }

  static async getAllCategories() {
    const response = await authenticatedApi.get(ADMIN_CATEGORIES);
    return response.data.data;
  }

  static async putCategoryById(id) {
    const response = await authenticatedApi.put(ADMIN_CATEGORY_BY_ID(id));
    return response.data.message;
  }

  static async deleteCategoryById(id) {
    const response = await authenticatedApi.delete(ADMIN_CATEGORY_BY_ID(id));
    return response.data.message;
  }
}

export default CategorySourceAPI;