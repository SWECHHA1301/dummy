import React from "react";
import "./Order.css";
import { FaStar, FaRegStar } from 'react-icons/fa';

const orders = [
  {
    id: 1,
    title: "Hachiko Scissor Nail Clipper",
    price: "₹265",
    status: "Cancelled",
    statusColor: "red",
    date: "May 04",
    reason: "As per your request, your item has been cancelled.",
    image: "https://rukminim2.flixcart.com/image/200/200/xif0q/pet-nail-clipper/m/2/z/best-quality-combo-of-2-dog-product-nail-claipper-hair-flea-comb-original-imagh4wzhypysthz.jpeg?q=90",
    rating: 3,
  },
  {
    id: 2,
    title: "VBEAUTI Boyfriend Women Blue Jeans",
    price: "₹838",
    status: "Refund Completed",
    statusColor: "orange",
    reason: "You returned this order because you did not like the fit.",
    refundNote:
      "The money was sent to your STATE BANK OF INDIA Account ending with ********033 on May 06 11:18 PM. For any questions, please contact your bank with reference number 512423855654.",
    refundId: "12303431438106732421",
    image: "https://rukminim2.flixcart.com/image/200/200/xif0q/jean/i/a/a/44-1205-new-vbeauti-original-imah9mdxuyykznus.jpeg?q=90",
    rating: 4,
  },
  {
    id: 3,
    title: "DENIM DIVA Women Cargos",
    price: "₹654",
    status: "Refund Completed",
    statusColor: "orange",
    reason: "You returned this order because you don't want the item anymore.",
    refundNote:
      "The money was sent to your STATE BANK OF INDIA Account ending with ********033 on Apr 30 12:14 PM. For any questions, please contact your bank with reference number 511912951512.",
    refundId: "1210342707736000635",
    image: "https://rukminim2.flixcart.com/image/200/200/xif0q/jean/h/u/p/28-6pkt-grey-a-nucouths-original-imahfvfuyzxxdwdf.jpeg?q=90",
    rating: 5,
  },
  {
    id: 4,
    title: "TUSI Casual Solid Women White, Black Top",
    price: "₹202",
    status: "Delivered on Apr 30",
    statusColor: "green",
    reason: "Your item has been delivered.",
    image: "https://rukminim1.flixcart.com/image/100/80/xif0q/top/0/m/l/xl-1-tusi-tank-top-pink-tusi-original-imagudrjzrpk9tyt.jpeg?q=100",
    rating: 5,
  },
];

const Order = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="order-container">
       <div class="search-order">
  <input type="text" placeholder="Search for products, brands and more" />
  <button><i class="fa fa-search"></i>Search Orders</button>
</div>
      <h1><b>Your Orders</b></h1>
      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-main">
            {/* LEFT SIDE */}
          <div className="order-left">
  <img src={order.image} alt={order.title} />
  <div className="order-info">
    <div className="order-title">{order.title}</div>
    <div className="order-price">{order.price}</div>
    <div className="star-rating">
      {[...Array(5)].map((_, index) =>
        index < order.rating ? (
          <FaStar key={index} className="star filled" />
        ) : (
          <FaRegStar key={index} className="star" />
        )
      )}
    </div>
  </div>
</div>

            {/* RIGHT SIDE */}
            <div className="order-right">
              <div className="order-status">
                <span
                  className="status-dot"
                  style={{ backgroundColor: order.statusColor }}
                ></span>
                <strong>{order.status}</strong>
                {order.date && <span> on <strong>{order.date}</strong></span>}
              </div>
              <p className="order-reason">{order.reason}</p>
              <br />
              <hr />
              {order.refundNote && (
                <div className="refund-box">
                  <p className="refund-title">
                    Refund Completed{" "}
                    <small>(Refund ID: {order.refundId})</small>
                  </p>
                  <ul>
                    <li>{order.refundNote}</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Order;

