import { BrowserRouter, Route, Routes } from "react-router-dom";
import RequireAuth from "./utils/RequireAuth";
import useAdminRoutes from "./AdminRoutes";
import useMemberRoutes from "./MemberRoutes";
import useCustomerRoutes from "./CustomerRoutes";
import usePublicRoutes from "./PublicRoutes";

const Routers = () => {
  const adminRoutes = useAdminRoutes();
  const memberRoutes = useMemberRoutes();
  const customerRoutes = useCustomerRoutes();
  const publicRoutes = usePublicRoutes();

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        {publicRoutes}

        {/* Parent Routes Auth Requerement */}
        <Route element={<RequireAuth redirectPath="/login" />}>
          {/* Private Route Admin */}
          {adminRoutes}

          {/* Private Routes Member */}
          {memberRoutes}

          {/* Private Routes Customer */}
          {customerRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
