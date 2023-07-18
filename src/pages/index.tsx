import BestSellingProducts from "../components/organisms/BestSellingProducts";
import Carousel from "../components/organisms/Carousel";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import ProductCategories from "../components/organisms/ProductCategories";
import SelectedProducts from "../components/organisms/SelectedProducts";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <Carousel />
        <SelectedProducts />
        <BestSellingProducts />
        <ProductCategories />
      </div>
      <Footer />
    </>
  );
};

export default Home;
