import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import NotFound from "../pages/notFound";
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Product from "../pages/product";
import Unauthorized from "../pages/unauthorized";
import PrivateRoute from "./privateRoute";
import ProtectedRoute from "./protectedRoute";
import Layout from "../pages/layout";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRouter;
