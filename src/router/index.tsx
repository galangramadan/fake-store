import { Route, Routes } from "react-router-dom";
import Home from "../pages";

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RootRouter;
