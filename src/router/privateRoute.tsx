import { Navigate, Outlet } from "react-router-dom";
import authorized from "../utils/auth.helper";

const PrivateRoute = () => {
  if (authorized()) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  return <Navigate to="/401" />;
};

export default PrivateRoute;
