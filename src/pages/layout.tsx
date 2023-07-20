import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
