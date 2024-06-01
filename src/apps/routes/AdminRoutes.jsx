import { Route } from "react-router-dom";
import { Fragment } from "react";
import PrivateRoute from "./utils/PrivateRoute";
import {
  AdminDashboard,
  ManagementCategories,
  ManagementMembers,
  ManagementCustomers,
  AddCategory,
  EditCategory,
  EditMember,
  EditCustomer,
} from "../pages";

const useAdminRoutes = () => {
  return (
    <Fragment>
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/categories"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <ManagementCategories />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/category/add"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <AddCategory />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/category/:id/edit"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <EditCategory />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/members"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <ManagementMembers />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/member/:id/edit"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <EditMember />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/customers"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <ManagementCustomers />
          </PrivateRoute>
        }
      />

      <Route
        path="/admin/customer/:id/edit"
        element={
          <PrivateRoute role="admin" redirectPath="/forbidden">
            <EditCustomer />
          </PrivateRoute>
        }
      />
    </Fragment>
  );
};

export default useAdminRoutes;
