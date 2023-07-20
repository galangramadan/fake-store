import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import useGetUserDetails from "../hooks/useGetUserDetails";

const Dashboard = () => {
  const userDetails = useGetUserDetails();

  return (
    <>
      <Header />
      <div className="container mx-auto pt-28">
        <h1 className="text-3xl font-bold text-center">Dashboard</h1>
        <div className="flex text-lg pt-10">
          <div className="font-medium">
            <p>Nama</p>
            <p>Email</p>
            <p>No. Telepon</p>
            <p>Alamat</p>
            <p>Kode Pos</p>
          </div>
          {Object.keys(userDetails).length > 0 && (
            <div className="pl-2">
              <p>
                : {userDetails.name.firstname} {userDetails.name.lastname}
              </p>
              <p>: {userDetails.email}</p>
              <p>: {userDetails.phone}</p>
              <p>
                : {userDetails.address.number} {userDetails.address.street}{" "}
                street, {userDetails.address.city} city.
              </p>
              <p>: {userDetails.address.zipcode}</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
