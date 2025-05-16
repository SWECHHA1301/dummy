import React from 'react';
import "./app.css";

const products = [
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1200-1200,pr-true,f-auto,q-80/inventory/product/f2efcf91-26c3-44bd-81ca-b793d214b532-/tmp/20230508-0747251.jpeg",
    name: "Portronics Power Plate Extension Board - Over Voltage Protection | 8 Sockets | 3 Mtr",
    qty: "1 piece",
    price: "₹749",
    original: "₹1999"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/inventory/product/c0b348d8-9b48-4878-ac72-914ebb1e11a6-/tmp/20230918-1639481.jpeg",
    name: "Lifelong Llm270 Head and Body Massager - Full Body Pain Relief |  Deep Tissue Massager",
    qty: "1 piece",
    price: "₹650",
    original: "₹2300"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/5f7450f8-9059-4677-9b07-ae52d8e78f9a.jpeg",
    name: "Portronics Konnect B+ POR 1392 8 Pin USB Cable - Black | Nylon Braided",
    qty: "1 piece",
    price: "₹199",
    original: "₹699"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/9bbb0597-3140-45df-aa35-688dd59e831a.jpeg",
    name: "Portronics Konnect B Type C Cable - Black | Supports up to 65W Fast Charging | Compatible with USB Type C Devices",
    qty: "1 piece",
    price: "₹185",
    original: "₹599"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/440d84da-5133-4930-93b6-8076ed6924ff.jpeg",
    name: "Portronics C-Konnect 3-In-1 USB Type C Adapter - White | Type-C + USB + HDMI",
    qty: "1 piece",
    price: "₹899",
    original: "₹2499"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/a9d6c7fe-65c6-44e7-98c1-fc1ac41fa29a.jpeg",
    name: "Portronics Konnect A Trio 3-In-1 USB Cable - Black | Braided and High-Speed | Fast Charging",
    qty: "1 piece",
    price: "₹299",
    original: "₹899"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/03127f7b-ff2c-4d06-9dc4-974133a72fdf.jpeg",
    name: "Portronics Konnect B Micro USB Cable - Black | Braided &  Tangle-Free | Fast Charging",
    qty: "1 piece",
    price: "₹108",
    original: "₹499"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/f279c1c7-a764-4889-9012-728a4ef3f3f6.jpeg",
    name: "Lifelong Llm09 Mini Head And Body Massager, Beige And Brown",
    qty: "1 piece",
    price: "₹398",
    original: "₹1350"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1500-1500,pr-true,f-auto,q-80/cms/product_variant/0431f9e4-b3f7-489b-a3bc-fe7a99a2a260.jpg",
    name: "Duracell Type-C To Type- C Quick Sync & Charge Cable - Black | Fast Charging",
    qty: "1 piece",
    price: "₹398",
    original: "₹1499"
  },
  {
    img: "https://cdn.zeptonow.com/production/tr:w-350,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/9b46a2ae-be71-42d1-95f2-ad71f5e32de7.jpeg",
    name: "Nu Republic Usb Type C Cable 1 M Blaze Supersonic 65W Type-C To Type-C Fast Charge Cable",
    qty: "1 piece",
    price: "₹199",
    original: "₹1299"
  }
];

const Elevate = ({ searchTerm }) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section>
        <div className="Elevate">
          <h4>Elevate Yourself</h4>
          <button>
            <p>See All</p>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 17 16"
              width="17"
              xmlns="http://www.w3.org/2000/svg"
              style={{ height: "1rem", width: "1rem", color: "rgb(250, 55, 120)" }}
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
        <div className="slides1">
          <div className="slider1">
            {filteredProducts.map((product, index) => (
              <div className="slide1" key={index}>
                <img src={product.img} alt="product" />
                <h5 className="product-name">{product.name}</h5>
                <p className="ml1">{product.qty}</p>
                <p className="price1">
                  {product.price} <del>{product.original}</del>
                </p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elevate;
