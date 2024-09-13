import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          {cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Cart;
