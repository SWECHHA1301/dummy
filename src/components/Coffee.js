import React from 'react';

const coffeeItems = [
  {
    name: "Vietnamese Cold Coffee",
    volume: "450ml",
    price: 239,
    originalPrice: 319,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/13aecc48-e0ff-48d1-9d7e-808acceab24e.jpeg"
  },
  {
    name: "Spanish Coffee",
    volume: "350ml",
    price: 219,
    originalPrice: 269,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-4615-4615,pr-true,f-auto,q-80/cms/product_variant/3d3c7b5f-5c45-477d-9706-0ef2cf64d7e0.jpeg"
  },
  {
    name: "Americano",
    volume: "250ml",
    price: 179,
    originalPrice: 239,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-4615-4615,pr-true,f-auto,q-80/cms/product_variant/d102ddef-501c-42e4-83ce-8a3d6c972558.jpeg"
  },
  {
    name: "Filter Coffee",
    volume: "250ml",
    price: 159,
    originalPrice: 204,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-5198-5198,pr-true,f-auto,q-80/cms/product_variant/92790524-02e7-4ca3-8aee-122d2ddc655e.jpeg"
  },
  {
    name: "Classic Cold Coffee",
    volume: "350ml",
    price: 209,
    originalPrice: 269,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/18d502d4-00ba-4533-99e3-ae817db3f361.jpeg"
  },
  {
    name: "Iced Americano",
    volume: "450ml",
    price: 179,
    originalPrice: 239,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/4e44890d-d561-4972-b190-45b0324acce8.jpeg"
  },
  {
    name: "Hazelnut Cappuccino",
    volume: "250ml",
    price: 209,
    originalPrice: 269,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-4523-4523,pr-true,f-auto,q-80/cms/product_variant/4141ea67-1e91-4b53-99f7-ed0dcea226e9.jpeg"
  },
  {
    name: "Cappuccino",
    volume: "250ml",
    price: 199,
    originalPrice: 244,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/27b6109e-514e-44d0-8245-ada18e023441.jpeg"
  },
  {
    name: "Latte",
    volume: "250ml",
    price: 180,
    originalPrice: 244,
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-4523-4523,pr-true,f-auto,q-80/cms/product_variant/4141ea67-1e91-4b53-99f7-ed0dcea226e9.jpeg"
  },
];

const Coffee = ({ searchTerm }) => {
  const filtered = coffeeItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <div className="Coff">
        <h4>Coffee Lovers</h4>
        <button>
          <p>See All</p>
          <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: '#FA3778' }}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      <div className="slides">
        <div className="slider">
          {filtered.map((item, index) => (
            <div className="slide" key={index}>
              <img src={item.image} alt={item.name} />
              <h5>{item.name}</h5>
              <p className="ml">{item.volume}</p>
              <p className="price">
                ₹{item.price} <del>₹{item.originalPrice}</del>
              </p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coffee;

