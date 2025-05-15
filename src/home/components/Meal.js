import React from 'react';
import "./App.css";

function Meal({ searchTerm }) {
  const products = [
    {
      name: "Chole Khulche",
      quantity: "450g",
      price: "₹229",
      originalPrice: "₹299",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/da3bf048-ddb0-461f-9ab2-b267475da0d7.jpeg"
    },
    {
      name: "Dal Makhani",
      quantity: "250g",
      price: "₹179",
      originalPrice: "₹219",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-3396-3396,pr-true,f-auto,q-80/cms/product_variant/f5d5ad7d-f9a4-4765-9e20-79f1c557c567.jpeg"
    },
    {
      name: "Wheat Chapati-Pack of 3",
      quantity: "pack of 3",
      price: "₹74",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-4487-4487,pr-true,f-auto,q-80/cms/product_variant/0320dafe-0820-44c7-a59a-7aef807c3af1.jpeg"
    },
    {
      name: "Paneer Tikka Masala",
      quantity: "250g",
      price: "₹219",
      originalPrice: "₹254",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-3669-3669,pr-true,f-auto,q-80/cms/product_variant/668eaf44-3f3b-4ec3-a855-238a19a2f79e.jpeg"
    },
    {
      name: "Rajma Masala",
      quantity: "250g",
      price: "₹179",
      originalPrice: "₹219",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1058-1058,pr-true,f-auto,q-80/cms/product_variant/02842483-d837-4562-8b6d-6a312f4b8e97.jpeg"
    },
    {
      name: "Butter Chicken",
      quantity: "261g",
      price: "₹239",
      originalPrice: "₹319",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-3670-3670,pr-true,f-auto,q-80/cms/product_variant/d042d1ce-33d9-43d5-8d0e-db255ad56526.jpeg"
    },
    {
      name: "Chole",
      quantity: "250g",
      price: "₹179",
      originalPrice: "₹219",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1058-1058,pr-true,f-auto,q-80/cms/product_variant/a9e16c85-de62-4714-ac98-d98507aec9c2.jpeg"
    },
    {
      name: "Tawa Plain Paratha-Pack of 2",
      quantity: "2 piece",
      price: "₹179",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-4579-4579,pr-true,f-auto,q-80/cms/product_variant/c64cab0a-4c25-40d3-87ea-964fb8533920.jpeg"
    },
    {
      name: "Aloo Pyaz kulcha",
      quantity: "2 Kulchas",
      price: "₹185",
      originalPrice: "₹256",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-5198-5198,pr-true,f-auto,q-80/cms/product_variant/b9ca1227-3726-4c10-9b21-486af6078d17.jpeg"
    },
    {
      name: "Malai Chicken Tikka",
      quantity: "6 piece",
      price: "₹314",
      originalPrice: "₹334",
      img: "https://cdn.zeptonow.com/production/tr:w-350,ar-3842-3842,pr-true,f-auto,q-80/cms/product_variant/59ec5fca-0645-4960-871b-de0d683152ac.jpeg"
    }
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section>
        <div className="Meal">
          <h4>Wholesome Meals</h4>
          <button>
            <p>See All</p>
            <svg fill="none" height="16" width="17" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" style={{ height: "1rem", width: "1rem", color: "rgb(250, 55, 120)" }}>
              <path d="M7 4.5L10.5 8L7 11.5" stroke="#FA3778" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </section>

      <section>
        <div className="slides3">
          <div className="slider3">
            {filteredProducts.map((product, index) => (
              <div className="slide3" key={index}>
                <img src={product.img} alt={product.name} />
                <h5 className='product-name'>{product.name}</h5>
                <p className="ml3">{product.quantity}</p>
                <p className="price3">
                  {product.price}{" "}
                  {product.originalPrice && <del>{product.originalPrice}</del>}
                </p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Meal;
