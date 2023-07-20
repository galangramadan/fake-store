import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Halaman tidak ditemukan</p>
      <p>
        Kembali ke{" "}
        <Link to="/" className="text-green-600 font-semibold">
          Halaman Utama
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
