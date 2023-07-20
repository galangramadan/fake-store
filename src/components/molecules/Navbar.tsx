import { BsCart2 } from "react-icons/bs";
import { NavMenuLogin, NavMenuRegister } from "../atoms/NavMenu";
import authorized, { logout } from "../../utils/auth.helper";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center py-2">
      <ul className="flex items-center gap-3">
        <li className="text-xl px-2">
          <BsCart2 />
        </li>
        {authorized() ? (
          <>
            <div className="font-semibold text-green-600 flex gap-2">
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={() => logout()} className="text-red-500">
                Logout
              </button>
            </div>
            <img src="/images/avatar.png" alt="avatar" className="w-8 pr-2" />
          </>
        ) : (
          <>
            <li>
              <NavMenuLogin />
            </li>
            <li>
              <NavMenuRegister />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
