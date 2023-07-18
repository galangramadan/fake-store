import { Link } from "react-router-dom";

export const NavMenuLogin = () => {
  return (
    <Link to="/login">
      <div className="flex justify-center items-center w-20 border border-green-600 rounded-md">
        <span className="text-green-600 p-1 text-sm font-bold">Masuk</span>
      </div>
    </Link>
  );
};

export const NavMenuRegister = () => {
  return (
    <Link to="/register">
      <div className="flex justify-center items-center w-20 bg-green-600 border border-green-600 rounded-md">
        <span className="text-white p-1 text-sm font-bold">Daftar</span>
      </div>
    </Link>
  );
};
