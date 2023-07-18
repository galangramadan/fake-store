import { Link } from "react-router-dom";

const CardProduct = () => {
  return (
    <div className="flex flex-col w-48 h-80 border-b border-gray-300 shadow">
      <Link to={`/product`}>
        <img
          src="/images/carousel1.jpg"
          alt="product"
          className="rounded-t-lg h-48 w-full object-cover"
        />
      </Link>
      <div>
        <h5 className="">Name</h5>
        <span className="font-semibold">$ harga</span>
      </div>
      <div>
        <span>rating </span>
        <span>|</span>
        <span> reviews</span>
        <p>test</p>
      </div>
    </div>
  );
};

export default CardProduct;
