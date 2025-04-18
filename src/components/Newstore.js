import React from 'react';

const products = [
  {
    name: "GUBB Multifunctional Organizer Makeup Travel Bag - Pink",
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/65550f8a-f4c3-4d71-abd9-c1fde55b4619.jpg",
    quantity: "1 piece",
    price: "₹749",
    originalPrice: "₹1999"
  },
  {
    name: "Trajectory Travel Polyester Passport and Card Holder and Wallet Organiser Case",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/6c6767b1-8840-46ce-a95b-e755c559b109/Trajectory-Travel-Polyester-Passport-and-Card-Holder-and-Wallet-Organiser-Case.jpeg",
    quantity: "1 piece",
    price: "₹649",
    originalPrice: "₹1200"
  },
  {
    name: "AGARO 1200 Watts Professional Volumizer Hair Dryer,One Step Styler",
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/68f68874-2238-474a-9acc-d4d9a273a52a.jpg",
    quantity: "1 piece",
    price: "₹1899",
    originalPrice: "₹3999"
  },
  {
    name: "Bombay Shaving Company Power Styler OG Beard Trimmer For Men | 2X Fast Charging | USB Type C",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1000,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/2dc25cb8-67ec-498e-873e-a83d080455c6/Bombay-Shaving-Company-Power-Styler-OG-Beard-Trimmer-For-Men-2X-Fast-Charging-USB-Type-C.jpeg",
    quantity: "1 piece",
    price: "₹845",
    originalPrice: "₹1199" 
  },
  {
    name: "AGARO 2000 Watts Professional Hair Dryer with AC Motor, Concentrator, Diffuser,Comb,Hot and Cold Air",
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/77af7e13-0a1e-4011-9158-7cfb9714ce1d.jpg",
    quantity: "1 piece",
    price: "₹1599",
    originalPrice: "₹2595" 
  },
  {
    name: "Vega Trimmer For Men with 90 Mins Runtime Stainless Steel Blades, Black (Power Lite, VHTH-38)",
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/2a4a8090-16d6-440b-80f4-86a843fccea6.jpeg",
    quantity: "1 piece",
    price: "₹789",
    originalPrice: "₹1149" 
  },
  {
    name: "Ambrane 20W Dual Output Fast Charger/Adapter With Qc & Pd Technology For Iphone Android & Other Devices Multi-Layers Protection (Raap H11White)",
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/39c9678b-a8e1-4684-9869-ecb015896231.jpeg",
    quantity: "1 piece",
    price: "₹399",
    originalPrice: "₹1299" 
  },
  {
    name: "Duracell 20000 mAh Power Bank - 22.5 W | Fast Charging",
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-727-712,pr-true,f-auto,q-80/cms/product_variant/d01ed994-a2fe-4086-a250-bdbb08fdafc0.jpg",
    quantity: "1 piece",
    price: "₹2998",
    originalPrice: "₹3499" 
  },
  {
    name: "Vega Power Series P-1 Beard Trimmer For Men With 160 Mins Runtime & 40 Length (Green)",
    image: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/63c2e42f-8f46-431c-8d8b-9de68e0bef2e.jpeg",
    quantity: "1 piece",
    price: "₹898",
    originalPrice: "₹999" 
  },
  {
    name: "boAt 10000mAh Power Bank w/ 22.5W Fast Charging & Smart IC Protection - PB300 (Carbon Black)",
    image: "https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/5d6bdbf5-b964-4504-8604-138a0fd7b74b/boAt-10000mAh-Power-Bank-w-22-5W-Fast-Charging-Smart-IC-Protection-PB300-Carbon-Black-.jpeg",
    quantity: "1 piece",
    price: "₹1199",
    originalPrice: "₹2999" 
  },

];

function Newstore({ searchTerm }) {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>

      <section>
        <div className="slides4">
          <div className="slider4">
            {filteredProducts.map((product, index) => (
              <div className="slide4" key={index}>
                <img src={product.image} alt={product.name} />
                <h5 className="product-name">{product.name}</h5>
                <p className="ml4">{product.quantity}</p>
                <p className="price4">
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

export default Newstore;
