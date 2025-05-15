import React, { useState } from 'react';
import './App.css';

const productsData = [
  {
    name: 'Portronics 1.5M Cord Length HDMI Cable(Black)',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/2ad2221e-463e-4d26-a3ba-68d97a2b5c9f.jpg',
    quantity: '1 piece',
    price: '₹199',
    originalPrice: '₹499',
  },
  {
    name: 'Duracell 20000 mAh Power Bank - 22.5 W | Fast Charging',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-727-712,pr-true,f-auto,q-80/cms/product_variant/d01ed994-a2fe-4086-a250-bdbb08fdafc0.jpg',
    quantity: '1 piece',
    price: '₹2998',
    originalPrice: '₹3499',
  },
  {
    name: 'Ambrane 20000mAh Powerbank, 22.5W Fast Charging, Triple Output + Type C Cable (Stylo 20, Black)',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-4167-4167,pr-true,f-auto,q-80/cms/product_variant/cc42ce5b-2d50-48fe-8d3f-c105c28b66e7.jpeg',
    quantity: '1 piece',
    price: '₹1346',
    originalPrice: '₹2699',
  },
  {
    name: 'Portronics Konnect A Trio 3-In-1 USB Cable - Black | Braided and High-Speed | Fast Chargingv',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/a9d6c7fe-65c6-44e7-98c1-fc1ac41fa29a.jpeg',
    quantity: '1 piece',
    price: '₹299',
    originalPrice: '₹899',
  },
  {
    name: 'Portronics Konnect B Type C Cable - Black | Supports up to 65W Fast Charging | Compatible with USB Type C Devices',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/9bbb0597-3140-45df-aa35-688dd59e831a.jpeg',
    quantity: '1 piece',
    price: '₹139',
    originalPrice: '₹599',
  },
  {
    name: 'Duracell Type-C To Type- C Quick Sync & Charge Cable - Black | Fast Charging',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/440d84da-5133-4930-93b6-8076ed6924ff.jpeg',
    quantity: '1 piece',
    price: '₹398',
    originalPrice: '₹1499',
  },
  {
    name: 'Portronics C-Konnect 3-In-1 USB Type C Adapter - White | Type-C + USB + HDMI',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/03127f7b-ff2c-4d06-9dc4-974133a72fdf.jpeg',
    quantity: '1 piece',
    price: '₹899',
    originalPrice: '₹2499',
  },
  {
    name: 'Portronics Konnect B Micro USB Cable - Black | Braided & Tangle-Free | Fast Charging',
    img: 'https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/5f7450f8-9059-4677-9b07-ae52d8e78f9a.jpeg',
    quantity: '1 piece',
    price: '₹99',
    originalPrice: '₹99',
  },
];

function HomeCom() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = productsData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section>
        <div className="home">
          <h4>Get Your Home Needs</h4>
          <button>
            <p>See All</p>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 17 16"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                height: '1rem',
                width: '1rem',
                color: 'rgb(250, 55, 120)',
              }}
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
      </section>

      <section>
       
        <div className="slides2">
          <div className="slider2">
            {filteredProducts.map((product, index) => (
              <div className="slide2" key={index}>
                <img src={product.img} alt={product.name} />
                <h5 className="product-name">{product.name}</h5>
                <p className="ml2">{product.quantity}</p>
                <p className="price2">
                  {product.price} <del>{product.originalPrice}</del>
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

export default HomeCom;