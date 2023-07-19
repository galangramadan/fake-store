import { Link } from "react-router-dom";

type Props = {
  id: number;
  image: string;
  title: string;
  price: number;
  rate: number;
  count: number;
};

const CardProduct = (props: Props) => {
  const { id, image, title, price, rate, count } = props;

  return (
    <div className="flex flex-col w-48 h-80 border-b border-gray-300 shadow">
      <Link to={`/product/${id}`}>
        <img
          src={image}
          alt={title}
          className="rounded-t-lg h-48 w-full object-cover"
        />
      </Link>
      <div>
        <h5 className="">{title}</h5>
        <span className="font-semibold">$ {price}</span>
      </div>
      <div>
        <span>{rate}</span>
        <span>|</span>
        <span>{count}</span>
      </div>
    </div>
  );
};

export default CardProduct;
