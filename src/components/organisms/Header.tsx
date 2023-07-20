import Logo from "../atoms/Logo";
import Navbar from "../molecules/Navbar";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="fixed w-screen flex justify-between items-center py-4 px-10 bg-white z-50">
      <Logo fontUp={0} />
      <div className="flex relative justify-between items-center w-full gap-2 pl-2">
        <div className="absolute top-2 left-4">
          <BsSearch />
        </div>
        <input
          type="text"
          className="w-full h-8 pl-8 p-2 border border-gray-300 rounded-md"
          placeholder="Cari produk"
        />
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
