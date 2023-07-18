import { Route, Routes } from "react-router-dom";
import Home from "../pages";
import NotFound from "../pages/notFound";
import Register from "../pages/register";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRouter;
