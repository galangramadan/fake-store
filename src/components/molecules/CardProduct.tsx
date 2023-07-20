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
    <Link to={`/product/${id}`}>
      <div className="flex flex-col w-48 h-80 hover:scale-105 duration-300">
        <img
          src={image}
          alt={title}
          className="rounded-t-lg h-48 w-full object-cover"
        />

        <div>
          <h5 className="">{title}</h5>
          <span className="font-semibold">$ {price}</span>
        </div>
        <div className="w-full flex-none text-sm font-medium">
          Rating {rate}/5 ({count})
        </div>
      </div>
    </Link>
  );
};

export default CardProduct;
