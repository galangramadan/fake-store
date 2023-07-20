import { Navigate, Outlet } from "react-router-dom";
import authorized from "../utils/auth.helper";

const ProtectedRoute = () => {
  if (!authorized()) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
