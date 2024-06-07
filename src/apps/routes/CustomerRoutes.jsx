import { Route } from "react-router-dom";
import { Fragment } from "react";
// import PrivateRoute from "./utils/PrivateRoute";
import {
  CartPage,
  CheckoutPage,
  OrderDetailCustomer,
  EditProfileCustomer,

  OrderListCustomer,
} from "../pages"

const useCustomerRoutes = () => {
  return (
    <Fragment>
      <Route path="/customer/cart" element={<CartPage />} />
      <Route path="/customer/checkout" element={<CheckoutPage />} />
      <Route path="/customer/orders" element={<OrderListCustomer />} />
      <Route path="/customer/order/:id/detail" element={<OrderDetailCustomer />} />
      <Route path="/customer/profile/edit" element={<EditProfileCustomer />} />
    </Fragment>
  );
};

export default useCustomerRoutes
