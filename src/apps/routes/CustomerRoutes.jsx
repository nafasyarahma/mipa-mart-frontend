import { Route } from "react-router-dom";
import { Fragment } from "react";
import PrivateRoute from "./utils/PrivateRoute";
import {
  CartPage,
  CheckoutPage,
  OrderDetailCustomer,
  EditProfileCustomer,
  OrderListCustomer,
} from "../pages";

const useCustomerRoutes = () => {
  return (
    <Fragment>
      <Route
        path="/customer/cart"
        element={
          <PrivateRoute role="customer" redirectPath="/login">
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/customer/checkout"
        element={
          <PrivateRoute role="customer" redirectPath="/forbidden">
            <CheckoutPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/customer/orders"
        element={
          <PrivateRoute role="customer" redirectPath="/forbidden">
            <OrderListCustomer />
          </PrivateRoute>
        }
      />
      <Route
        path="/customer/order/:id/detail"
        element={
          <PrivateRoute role="customer" redirectPath="/forbidden">
            <OrderDetailCustomer />
          </PrivateRoute>
        }
      />
      <Route
        path="/customer/profile/edit"
        element={
          <PrivateRoute role="customer" redirectPath="/forbidden">
            <EditProfileCustomer />
          </PrivateRoute>
        }
      />
    </Fragment>
  );
};

export default useCustomerRoutes;
