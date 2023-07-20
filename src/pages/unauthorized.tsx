import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div>
      <h1>Unauthorized</h1>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Unauthorized;
