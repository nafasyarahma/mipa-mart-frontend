import { Route } from "react-router-dom";
import { Fragment } from "react";
import PrivateRoute from "./utils/PrivateRoute";
import {
  MemberDashboard,
  ManagementProducts,
  ManagementPaymentMethods,
  ManagementDeliveryMethods,
  ManagementOrders,
  AddPaymentMethod,
  AddDeliveryMethod,
  EditDeliveryMethod,
  AddProduct,
  EditProduct,
  EditProfileMember,
  OrderDetailMember,
} from "../pages";

const useMemberRoutes = () => {
  return (
    <Fragment>
      <Route
        path="/member/dashboard"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <MemberDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/payment-methods"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <ManagementPaymentMethods />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/products"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <ManagementProducts />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/product/add"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <AddProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/product/:id/edit"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <EditProduct />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/payment-method/add"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <AddPaymentMethod />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/delivery-methods"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <ManagementDeliveryMethods />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/delivery-method/add"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <AddDeliveryMethod />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/delivery-method/:id/edit"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <EditDeliveryMethod />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/orders"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <ManagementOrders />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/order/:id/detail"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <OrderDetailMember />
          </PrivateRoute>
        }
      />
      <Route
        path="/member/profil/edit"
        element={
          <PrivateRoute role="member" redirectPath="/forbidden">
            <EditProfileMember />
          </PrivateRoute>
        }
      />
    </Fragment>
  );
};

export default useMemberRoutes;
