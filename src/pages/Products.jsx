import { useState } from "react";
import data from "../../data.json";
import Product from "../components/Product";
const Products = () => {
  const [products, setProducts] = useState(data.products);
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((pro) => (
          <Product key={pro.id} product={pro} />
        ))}
      </div>
    </div>
  );
};

export default Products;
