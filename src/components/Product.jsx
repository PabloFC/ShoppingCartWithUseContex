const Product = ({ product }) => {
  return (
    <div>
      <div className="card">
        <img src={product.thumbnail} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <h5>{product.price}</h5>
          <button className="btn btn-primary">Add To cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
