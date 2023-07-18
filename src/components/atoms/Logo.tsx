import { Link } from "react-router-dom";
import { MdStoreMallDirectory } from "react-icons/md";

type Props = {
  fontUp: number;
};

const Logo = (props: Props) => {
  const { fontUp } = props;

  return (
    <Link to="/">
      <div
        className={`flex items-end -ml-1 text-${3 + fontUp}xl text-green-600`}
      >
        <MdStoreMallDirectory />
        <span className={`text-${3 + fontUp}xl font-semibold`}>fakepedia</span>
      </div>
    </Link>
  );
};

export default Logo;
