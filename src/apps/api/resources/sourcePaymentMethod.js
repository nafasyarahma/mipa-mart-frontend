import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";

const {
  MEMBER_PAYMENT_METHODS,
  MEMBER_PAYMENT_METHOD_BY_ID,
} = API_ENDPOINT;

class PaymentMethodSourceAPI {
  static async postPaymentMethod(data) {
    const response = await authenticatedApi.post(MEMBER_PAYMENT_METHODS, data);
    return response.data.message;
  }

  static async getMemberPaymentMethods() {
    const response = await authenticatedApi.get(MEMBER_PAYMENT_METHODS);
    return response.data.data;
  }

  static async putPaymentMethodById(id) {
    const response = await authenticatedApi.put(MEMBER_PAYMENT_METHOD_BY_ID(id));
    return response.data.message;
  }

  static async deletePaymentMethodById(id) {
    const response = await authenticatedApi.delete(MEMBER_PAYMENT_METHOD_BY_ID(id));
    return response.data.message;
  }
}

export default PaymentMethodSourceAPI;