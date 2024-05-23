import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";

const {
  MEMBER_DELIVERY_METHODS,
  MEMBER_DELIVERY_METHOD_BY_ID,
} = API_ENDPOINT;

class DeliveryMethodSourceAPI {
  static async postDeliveryMethod(data) {
    const response = await authenticatedApi.post(MEMBER_DELIVERY_METHODS, data);
    return response.data.message;
  }

  static async getMemberDeliveryMethods() {
    const response = await authenticatedApi.get(MEMBER_DELIVERY_METHODS);
    return response.data.data;
  }

  static async putDeliveryMethodById(id) {
    const response = await authenticatedApi.put(MEMBER_DELIVERY_METHOD_BY_ID(id));
    return response.data.message;
  }

  static async deleteDeliveryMethodById(id) {
    const response = await authenticatedApi.delete(MEMBER_DELIVERY_METHOD_BY_ID(id));
    return response.data.message;
  }
}

export default DeliveryMethodSourceAPI;