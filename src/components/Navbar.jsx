import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between bg-secondary py-3 px-5 text-white">
      <Link to="/" className="navbar-brand fs-4 fw-bolder">
        Shop
      </Link>
      <Link to="/cart" className="navbar-link fs-5 text-white">
        <BsCart />0
      </Link>
    </div>
  );
};

export default Navbar;
