import { Navigate, Outlet } from "react-router-dom";
import authorized from "../utils/auth.helper";

const ProtectedRoute = () => {
  if (!authorized()) {
    return (
      <div>
        <h1>Protected Route</h1>
        <Outlet />
      </div>
    );
  }
  return <Navigate to="/" />;
};

export default ProtectedRoute;
