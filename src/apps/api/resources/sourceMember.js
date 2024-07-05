import axios from "axios";
import API_ENDPOINT from "../global/api-endpoint";
import authenticatedApi from "../packages/interceptors";

const {
  MEMBER_REGISTER,
  MEMBER_PROFILE,
  MEMBER_ORDERS,
  MEMBER_ORDER_HISTORY,
  MEMBER_ORDER_BY_ID,
  MEMBER_ORDER_STATUS,
  MEMBER_PAYMENT_STATUS,
  ADMIN_MEMBERS,
  ADMIN_MEMBER_BY_ID,
  ADMIN_MEMBER_STATUS,
  MEMBER_FORGOT_PASSWORD,
  MEMBER_RESET_PASSWORD,
} = API_ENDPOINT;

class MemberSourceAPI {
  static async postMember(data) {
    const response = await axios.post(MEMBER_REGISTER, data);
    return response.data.message;
  }

  static async getMemberProfile() {
    const response = await authenticatedApi.get(MEMBER_PROFILE);
    return response.data.data;
  }

  static async putMemberProfile(data) {
    const response = await authenticatedApi.put(MEMBER_PROFILE, data);
    return response.data.message;
  }

  static async getMemberOrders() {
    const response = await authenticatedApi.get(MEMBER_ORDERS);
    return response.data.data;
  }

  static async getMemberOrderById(id) {
    const response = await authenticatedApi.get(MEMBER_ORDER_BY_ID(id));
    return response.data.data;
  }

  static async getMemberHistoryOrders() {
    const response = await authenticatedApi.get(MEMBER_ORDER_HISTORY);
    return response.data.data;
  }

  static async putOrderStatusById(id, data) {
    const response = await authenticatedApi.put(MEMBER_ORDER_STATUS(id), data);
    return response.data.message;
  }

  static async putPaymentStatusById(id, data) {
    const response = await authenticatedApi.put(MEMBER_PAYMENT_STATUS(id), data);
    return response.data.message;
  }

  // admin
  static async getAllMembers() {
    const response = await authenticatedApi.get(ADMIN_MEMBERS);
    return response.data.data;
  }

  static async getMemberById(id) {
    const response = await authenticatedApi.get(ADMIN_MEMBER_BY_ID(id));
    return response.data.data;
  }

  static async putMemberById(id, data) {
    const response = await authenticatedApi.put(ADMIN_MEMBER_BY_ID(id), data);
    return response.data.message;
  }

  static async putMemberStatusById(id, data) {
    const response = await authenticatedApi.put(ADMIN_MEMBER_STATUS(id), data);
    return response.data.message;
  }

  static async deleteMemberById(id) {
    const response = await authenticatedApi.delete(ADMIN_MEMBER_BY_ID(id));
    return response.data.message;
  }

  // common
  static async sendEmailForgotPassword(data) {
    const response = await axios.post(MEMBER_FORGOT_PASSWORD, data);
    return response.data.message;
  }

  static async resetPassword(token, data) {
    const response = await axios.post(MEMBER_RESET_PASSWORD(token), data);
    return response.data.message;
  }
}

export default MemberSourceAPI;
