import React from "react";
import "./OrderDetails.css";

const OrderDetails = () => {
  return (
    <div className="order-details-wrapper">
      <div className="order-section order-left">
        <div className="product-info">
          <h3>Hachiko Scissor Nail Clipper</h3>
          <p className="product-sub">Red, Black</p>
          <p className="seller">Seller: VsINFOTECH</p>
          <h4 className="price">₹265</h4>

          <div className="order-status">
            <span className="status-icon">🟢</span>
            Order Confirmed, May 04
          </div>

          <p className="cancel-note">
            Your order was cancelled as per your request.
          </p>

          <div className="chat-option">share all updates<img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMkE1NUU1IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA0MS4xICgzNTM3NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+QjU4M0YwQTMtQUZDQS00OURFLUE4RTEtQzU4MzU4NkJCMDMwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBza2V0Y2h0b29sLiBBbmQgSSBqdXN0IGFkZGVkIGEgd2hvbGUgYnVuY2ggb2YgZXh0cmEgZHVtbXkgY29kZSB0byB0ZXN0IHRoaXMhPC9kZXNjPgogICAgPHBhdGggZD0iTTguNTkgMTYuMzRsNC41OC00LjU5LTQuNTgtNC41OUwxMCA1Ljc1bDYgNi02IDZ6Ii8+CiAgICA8cGF0aCBkPSJNMC0uMjVoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+" />
          </div>

          <div className="chat-with-us">
  <img
    src="https://img.icons8.com/ios-filled/20/000000/chat.png"
    alt="chat icon"
  />
  <span>Chat with us</span>
</div>


        </div>

        <div className="product-image">
          <img
            src="https://rukminim1.flixcart.com/image/100/80/xif0q/pet-nail-clipper/m/2/z/best-quality-combo-of-2-dog-product-nail-claipper-hair-flea-comb-original-imagh4wzhypysthz.jpeg?q=100"
            alt="Product"
          />
        </div>
      </div>

      <div className="order-section order-right">
        <div className="shipping-details">
          <h4>Shipping details</h4>
          <p><strong>Swechha Sharma</strong></p>
          <p>Near Jyoti Kirana, Mahavir Compound</p>
          <p>Sadar Bazar, Jabalpur</p>
          <p>Madhya Pradesh - 482001</p>
        </div>

        <div className="price-details">
          <h4>Price Details</h4>
          <div className="price-item">
            <span>List price</span>
            <span>₹599</span>
          </div>
          <div className="price-item">
            <span>Selling price</span>
            <span>₹255</span>
          </div>
          <div className="price-item">
            <span>Handling Fee</span>
            <span>₹7</span>
          </div>
          <div className="price-item">
            <span>Platform Fee</span>
            <span>₹3</span>
          </div>
          <div className="total-amount">
            <strong>Total Amount</strong>
            <strong>₹265</strong>
          </div>
         
        </div>
         <p className="cod-note">• Cash On Delivery: ₹265.0</p>
      </div>
    </div>
  );
};

export default OrderDetails






