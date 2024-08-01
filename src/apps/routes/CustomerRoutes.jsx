import { Route } from "react-router-dom";
import { Fragment } from "react";
import PrivateRoute from "./utils/PrivateRoute";
import {
  DetailProduct,
  CartPage,
  CheckoutPage,
  OrderDetailCustomer,
  EditProfileCustomer,
  OrderListCustomer,
  OrderHistoryCustomer,
  OrderReview,
  ReviewHistoryPage,
} from "../pages";

const useCustomerRoutes = () => {
  return (
    <Fragment>
      <Route
        path="/product/:id/detail"
        element={
          <PrivateRoute role="customer" redirectPath="/login">
            <DetailProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/customer/cart"
        element={
          <PrivateRoute role="customer" redirectPath="/login">
            <CartPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/customer/checkout/:cartId"
        element={
          <PrivateRoute role="customer" redirectPath="/login">
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
        path="/customer/orders/history"
        element={
          <PrivateRoute role="customer" redirectPath="/forbidden">
            <OrderHistoryCustomer />
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
        path="/customer/order/:orderId/review"
        element={
          <PrivateRoute role="customer" redirectPath="/forbidden">
            <OrderReview />
          </PrivateRoute>
        }
      />
      <Route
        path="/customer/order/:orderId/review/history"
        element={
          <PrivateRoute role="customer" redirectPath="/forbidden">
            <ReviewHistoryPage />
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
