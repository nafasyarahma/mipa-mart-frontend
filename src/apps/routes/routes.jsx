import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/RequireAuth";
import PrivateRoute from "./utils/PrivateRoute";
import {
  // common
  CatalogPage,
  LoginPage,

  // member
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
  OrderDetailMember,

  // admin
  AdminDashboard,
  ManagementCategories,
  ManagementMembers,
  ManagementCustomers,
  AddCategory,
  EditCategory,
  EditMember,
  EditProfileMember,
  EditCustomer,
  RegisterMemberPage,
  RegisterCustomerPage,
  ChooseRoleRegister,
  ChooseRoleForgotPassword,
  ForgotPasswordMember,
  ForgotPasswordCustomer,
  ResetPasswordPage,

  // customer
  CartPage,
  DetailProduct,
  CheckoutPage,
  OrderPageCustomer,
  OrderDetailCustomer,
  EditProfileCustomer,

  // Common
  ForbiddenPage,
  NotFoundPage,
} from "../pages";


const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<CatalogPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forbidden" element={<ForbiddenPage />} />
        <Route path="/not-found" element={<NotFoundPage />} />
        <Route path="/member/register" element={<RegisterMemberPage />} />

        {/* Parent Routes Auth Requerement */}
        <Route element={<RequireAuth redirectPath="/login" />}>

          {/* Private Routes Member */}
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

          <Route path="/customer/register" element={<RegisterCustomerPage />} />
          <Route
            path="/register/choose-role"
            element={<ChooseRoleRegister />}
          />
          <Route
            path="/forgot-password/choose-role"
            element={<ChooseRoleForgotPassword />}
          />
          <Route
            path="/member/forgot-password"
            element={<ForgotPasswordMember />}
          />
          <Route
            path="/customer/forgot-password"
            element={<ForgotPasswordCustomer />}
          />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          <Route path="/member/products" element={<ManagementProducts />} />
          <Route path="/member/product/add" element={<AddProduct />} />
          <Route path="/member/product/edit" element={<EditProduct />} />

          <Route
            path="/member/payment-method/add"
            element={<AddPaymentMethod />}
          />
          <Route
            path="/member/delivery-methods"
            element={<ManagementDeliveryMethods />}
          />
          <Route
            path="/member/delivery-method/add"
            element={<AddDeliveryMethod />}
          />
          <Route
            path="/member/delivery-method/:id/edit"
            element={<EditDeliveryMethod />}
          />
          <Route path="/member/orders" element={<ManagementOrders />} />
          <Route path="/member/order/detail" element={<OrderDetailMember />} />
          <Route path="/member/profil/edit" element={<EditProfileMember />} />

          <Route path="/customer/cart" element={<CartPage />} />
          <Route path="/customer/checkout" element={<CheckoutPage />} />
          <Route path="/customer/order" element={<OrderPageCustomer />} />
          <Route
            path="/customer/order/detail"
            element={<OrderDetailCustomer />}
          />
          <Route path="/detail" element={<DetailProduct />} />
          <Route
            path="/customer/profile/edit"
            element={<EditProfileCustomer />}
          />
          
          {/* Private Route Admin */}
          <Route 
            path="/admin/dashboard" 
            element={
              <PrivateRoute
                role="admin"
                redirectPath="/forbidden"
              >
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
