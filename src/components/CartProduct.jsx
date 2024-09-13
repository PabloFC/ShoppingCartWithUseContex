const CartProduct = ({ product }) => {
  return (
    <div className="d-flex border mt-4">
      <img src={product.thumbnail} className="w-25 h-25" alt="" />
      <div className="detail ms-4 py-5">
        <h4>{product.title}</h4>
        <h4>{product.price}</h4>
        <div className="buttons mb-2">
          <button className="rounded-circle px-2">
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button className="rounded-circle px-2">
            <b>+</b>
          </button>
        </div>
        <button className="btn btn-danger">Remove</button>
      </div>
    </div>
  );
};

export default CartProduct;
