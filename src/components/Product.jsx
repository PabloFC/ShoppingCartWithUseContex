const Product = ({ product }) => {
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
            <button className="btn btn-primary">Add To cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
