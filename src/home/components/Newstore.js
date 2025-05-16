import React from "react";
import "./App.css";
import { products } from "../../mockData/Data";
import { Link } from "react-router";

function Newstore({ searchTerm }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section>
        <div className="slides4">
          <div className="slider4">
            {filteredProducts.map((product, index) => (
              <Link
                to={`/product/${product.id}`}
                className="slide4"
                key={index}
              >
                <img src={product.image} alt={product.name} />
                <h5 className="product-name">{product.name}</h5>
                <p className="ml4">{product.quantity}</p>
                <p className="price4">
                  {product.price} <del>{product.originalPrice}</del>
                </p>
                <button>Add to Cart</button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Newstore;
