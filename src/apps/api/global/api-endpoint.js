import CONFIG from "./config";

const { BASE_URL } = CONFIG

const API_ENDPOINT = {
  // Authentications
  AUTHENTICATIONS: `${BASE_URL}/authentications`,

  // Categories
  ADMIN_CATEGORIES: `${BASE_URL}/admin/categories`,
  ADMIN_CATEGORY_BY_ID: (id) => `${BASE_URL}/admin/categories/${id}`,

  // Members
  MEMBER_REGISTER: `${BASE_URL}/member/register`,
  MEMBER_PROFILE: `${BASE_URL}/member/profile`,
  MEMBER_EMAIL_VERIFICATION: `${BASE_URL}/member/email-verification`,
  MEMBER_VERIFY_EMAIL: (token) => `${BASE_URL}/member/verify-email/${token}`,
  MEMBER_FORGOT_PASSWORD: `${BASE_URL}/member/forgot-password`,
  MEMBER_RESET_PASSWORD: (token) => `${BASE_URL}/member/reset-email/${token}`,
  ADMIN_MEMBERS: `${BASE_URL}/admin/members`,
  ADMIN_MEMBER_BY_ID: (id) => `${BASE_URL}/admin/members/${id}`,
  ADMIN_MEMBER_STATUS: (id) => `${BASE_URL}/admin/members/${id}/status`,

  // Customers
  CUSTOMER_REGISTER: `${BASE_URL}/customer/register`,
  CUSTOMER_PROFILE: `${BASE_URL}/customer/profile`,
  CUSTOMER_EMAIL_VERIFICATION: `${BASE_URL}/customer/email-verification`,
  CUSTOMER_VERIFY_EMAIL: (token) => `${BASE_URL}/customer/verify-email/${token}`,
  CUSTOMER_FORGOT_PASSWORD: `${BASE_URL}/customer/forgot-password`,
  CUSTOMER_RESET_PASSWORD: (token) => `${BASE_URL}/customer/reset-email/${token}`,
  ADMIN_CUSTOMERS: `${BASE_URL}/admin/customers`,
  ADMIN_CUSTOMER_BY_ID: (id) => `${BASE_URL}/admin/customers/${id}`,

  // Payment Methods
  MEMBER_PAYMENT_METHODS: `${BASE_URL}/member/payment-methods`,
  MEMBER_PAYMENT_METHOD_BY_ID: (id) => `${BASE_URL}/member/payment-methods/${id}`,

  // Delivery Methods
  MEMBER_DELIVERY_METHODS: `${BASE_URL}/member/delivery-methods`,
  MEMBER_DELIVERY_METHOD_BY_ID: (id) => `${BASE_URL}/member/delivery-methods/${id}`,

  // Products
  PRODUCTS: `${BASE_URL}/products`,
  PRODUCT_BY_ID: (id) => `${BASE_URL}/products/${id}`,
  MEMBER_PRODUCTS: `${BASE_URL}/member/products`,
  MEMBER_PRODUCT_BY_ID: (id) => `${BASE_URL}/member/products/${id}`,
}

export default API_ENDPOINT