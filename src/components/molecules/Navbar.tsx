import { BsCart2 } from "react-icons/bs";
import { NavMenuLogin, NavMenuRegister } from "../atoms/NavMenu";
const Navbar = () => {
  return (
    <div className="flex items-center py-2">
      <ul className="flex items-center gap-3">
        <li className="text-xl px-2">
          <BsCart2 />
        </li>
        <li>
          <NavMenuLogin />
        </li>
        <li>
          <NavMenuRegister />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
