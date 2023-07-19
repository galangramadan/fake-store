import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import NotFound from "../pages/notFound";
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Product from "../pages/product";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRouter;
