const CartProduct = ({ product }) => {
  return (
    <div className="d-flex">
      <img src={product.thumbnail} alt="" />
      <div className="detail">
        <h4>{product.title}</h4>
        <h4>{product.price}</h4>
      </div>
    </div>
  );
};

export default CartProduct;
