import { useState } from "react";
import data from "../../data.json";
import Product from "../components/Product";
const Products = () => {
  const [products, setProducts] = useState(data.products);
  return (
    <div>
      {products.map((product) => {
        <Product product={product} />;
      })}
    </div>
  );
};

export default Products;
