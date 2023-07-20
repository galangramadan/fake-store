import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p>Anda harus login terlebih dahulu</p>
      <p>
        Kembali ke{" "}
        <Link to="/" className="text-green-600 font-semibold">
          Halaman Utama
        </Link>
      </p>
    </div>
  );
};

export default Unauthorized;
