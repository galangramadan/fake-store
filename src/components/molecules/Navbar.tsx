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
            <div>
              <Link to="/dashboard">Dashboard</Link>
              <button onClick={() => logout()}>Logout</button>
            </div>
            <button>
              <img src="/images/avatar.png" alt="avatar" className="w-8" />
            </button>
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
