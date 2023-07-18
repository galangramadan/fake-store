import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <h1>Carousel</h1>
        <h1>Product Pilihan</h1>
        <h1>Product Terlaris</h1>
        <h1>Kategori Product</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;
