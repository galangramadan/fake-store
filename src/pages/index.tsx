import BestSellingProducts from "../components/organisms/BestSellingProducts";
import Carousel from "../components/organisms/Carousel";
import ProductCategories from "../components/organisms/ProductCategories";
import SelectedProducts from "../components/organisms/SelectedProducts";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Carousel />
      <SelectedProducts />
      <BestSellingProducts />
      <ProductCategories />
    </div>
  );
};

export default Home;
