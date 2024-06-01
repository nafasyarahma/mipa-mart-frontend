import { Route } from "react-router-dom";
import { Fragment } from "react";
// import PrivateRoute from "./utils/PrivateRoute";
import {
  CartPage,
  CheckoutPage,
  OrderPageCustomer,
  OrderDetailCustomer,
  EditProfileCustomer,
} from "../pages"

const useCustomerRoutes = () => {
  return (
    <Fragment>
      <Route path="/customer/cart" element={<CartPage />} />
      <Route path="/customer/checkout" element={<CheckoutPage />} />
      <Route path="/customer/order" element={<OrderPageCustomer />} />
      <Route path="/customer/order/detail" element={<OrderDetailCustomer />} />
      <Route path="/customer/profile/edit" element={<EditProfileCustomer />} />
    </Fragment>
  );
};

export default useCustomerRoutes
