import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";

const Header = () => {
  return (
    <div className="fixed w-screen flex justify-between py-4 px-10 bg-white z-50">
      <Logo fontUp={0} />
      <Navbar />
    </div>
  );
};

export default Header;
