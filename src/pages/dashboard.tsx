import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import useGetUserDetails from "../hooks/useGetUserDetails";

const Dashboard = () => {
  const userDetails = useGetUserDetails();

  return (
    <>
      <Header />
      <div className="container mx-auto pt-20">
        <h1 className="text-3xl font-bold text-center">Dashboard</h1>
        {/* <p>Nama :{userDetails.name.firstname} </p> */}
        {Object.keys(userDetails).length > 0 && (
          <div>
            <p>
              Nama : {userDetails.name.firstname} {userDetails.name.lastname}
            </p>
            <p>Email : {userDetails.email}</p>
            <p>No. Telepon : {userDetails.phone}</p>
            <p>
              Alamat : {userDetails.address.number} {userDetails.address.street}{" "}
              street, {userDetails.address.city} city.
            </p>
            <p>Kode Pos : {userDetails.address.zipcode}</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
