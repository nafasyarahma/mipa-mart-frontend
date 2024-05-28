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
} from "../pages"

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

      <Route path="/admin/categories" element={<ManagementCategories />} />
      <Route path="/admin/category/add" element={<AddCategory />} />
      <Route path="/admin/category/edit" element={<EditCategory />} />
      <Route path="/admin/members" element={<ManagementMembers />} />
      <Route path="/admin/member/edit" element={<EditMember />} />
      <Route path="/admin/customers" element={<ManagementCustomers />} />
      <Route path="/admin/customer/edit" element={<EditCustomer />} />
    </Fragment>
  );
};

export default useAdminRoutes
