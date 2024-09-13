import { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img
            src={product.thumbnail}
            className="card-img-top h-75"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
            <h5>{product.price}</h5>
            <button
              className="btn btn-primary
            "
              onClick={() => dispatch({ type: "Add", product: product })}
            >
              Add To cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
