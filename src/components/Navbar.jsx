import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../Features/ContextProvider";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="d-flex justify-content-between bg-secondary py-3 px-5 text-white">
      <Link to="/" className="navbar-brand fs-4 fw-bolder">
        Shop
      </Link>
      {cart.length > 0 ? (
        <Link to="/cart" className="navbar-link fs-5 text-white">
          <BsCart />
          <span>{cart.length}</span>
        </Link>
      ) : (
        <div className="navbar-link fs-5 text-white">
          <BsCart />
        </div>
      )}
    </div>
  );
};

export default Navbar;
