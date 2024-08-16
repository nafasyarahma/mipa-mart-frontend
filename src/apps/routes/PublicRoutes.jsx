import { Fragment } from "react";

import { Route } from "react-router-dom";
import {
  CatalogPage,
  DetailProduct,
  LoginPage,
  RegisterMemberPage,
  RegisterCustomerPage,
  ChooseRoleRegister,
  ChooseRoleForgotPassword,
  ForgotPasswordMember,
  ForgotPasswordCustomer,
  ResetPasswordMember,
  ResetPasswordCustomer,
  ForbiddenPage,
  NotFoundPage,
  CheckEmailCallOut,
} from "../pages";

const usePublicRoutes = () => {
  return (
    <Fragment>
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/" element={<CatalogPage />} />
      <Route path="/product/:id/detail" element={<DetailProduct />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forbidden" element={<ForbiddenPage />} />
      <Route path="/not-found" element={<NotFoundPage />} />
      <Route path="/member/register" element={<RegisterMemberPage />} />
      <Route path="/customer/register" element={<RegisterCustomerPage />} />
      <Route path="/register/choose-role" element={<ChooseRoleRegister />} />
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
      <Route
        path="/member/reset-password/:token"
        element={<ResetPasswordMember />}
      />
      <Route
        path="/customer/reset-password/:token"
        element={<ResetPasswordCustomer />}
      />
      <Route path="/check-your-email" element={<CheckEmailCallOut />} />
    </Fragment>
  );
};

export default usePublicRoutes;
