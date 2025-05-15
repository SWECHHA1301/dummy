import React, { useState } from 'react';
import './Cart.css';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Cart = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Amul Masti Dahi Pouch',
      image: 'https://cdn.zeptonow.com/production/tr:w-100,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/c54acebc-d816-419a-b652-37477e3187e7.jpeg',
      quantity: 1,
      price: 28,
      originalPrice: 35,
      weight: '400 g',
    },
    { 
      id: 2,  
      name: "Dal Makhani",
      quantity: 1,
      weight: "250g",
      price: 179,
      originalPrice: 219,
      img: 'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-4754-4754,pr-true,f-auto,q-80/cms/product_variant/d5088166-2bfb-4472-8929-ac8e85cb9004/Dal-Makhani-Rice.jpeg'
    }
  ]);

  const handleQuantityChange = (id, type) => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === id) {
          const updatedQty = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: updatedQty > 0 ? updatedQty : 1 };
        }
        return item;
      })
    );
  };

  return (
    <div className="cart-container">
      <div className="cart-content">

        <p className="cart-header">
        <FiShoppingCart style={{ color: 'green', marginRight: '8px' }} />
         Shop for ₹71 more to <span className="green">save ₹25</span> on delivery fee
        </p>

        <div className="out-of-stock">
          <p className="stock-alert">1 item is out of stock</p>
          <div className="stock-item">
            <img src="https://cdn.zeptonow.com/production/tr:w-100,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c.jpeg" alt="Out of Stock" />
            <div>
              <p>Vietnamese Cold Coffee</p>
              <small>450 ml • 1 unit</small>
            </div>
          </div>
        </div>

        <div className="delivery-info">
         <p className="delivery-time">
           <img
             src="https://cdn.zeptonow.com/production/tr:w-100,ar-36…-auto,q-80/app/images/eta_normal_darkstore_v1.png"
             alt="Delivery"
           />
           Delivery in 9 mins
         </p>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <p>{item.name}</p>
                <small>{item.weight}</small>
                <div className="price-qty">
                 <span>₹{item.price * item.quantity}</span>
                 <small className="original-price">₹{item.originalPrice * item.quantity}</small>
                  <div className="qty-controls">
                    <button onClick={() => handleQuantityChange(item.id, 'dec')}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, 'inc')}>+</button>
                  </div>
                </div>
              </div>
              </div>
          ))}
          <div className="more-items">
          <p>Missed something?</p>
          <button className="add-more">+ Add More Items</button>
        </div>
        </div>


        <div className="pass-offer">
          <p className="pass-heading">Save more with <span className="pass-label">pass</span></p>
    
          <hr />
      
          <p className="pass-info"><img src='https://cdn.zeptonow.com/production//app/svg/NonMemberFD.svg'
          className='pass-icon' /> Free delivery above <b>₹99</b></p>
        </div>


         <div className="cash-option">
          <input type="checkbox" />
          <span>Apply ₹50 Free Cash</span>
        </div>


        <div className="cart-footer">

  <div className="to-pay-drawer">
  <div className="drawer-header" onClick={() => setShowDrawer(!showDrawer)}>
    <div>
      <p className="pay-title">To Pay</p>
      <small>Incl. all taxes and charges</small>
    </div>
    <div className="drawer-price">
      <p><del> ₹{cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0)}</del>
       ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
      <span className="green-text">SAVINGS ₹{cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity - (item.price * item.quantity), 0)}</span>
    </div>
    <span className={`arrow ${showDrawer ? 'open' : ''}`}>▾</span>
  </div>

  {showDrawer && (
    <div className="drawer-body">
      <h4>📄 Bill Summary</h4>
      <div className="summary-row">
        <span>Item Total & GST</span>
        <span> ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
      </div>
      <div className="summary-row">
        <span>Delivery Fee</span>
        <span><del>₹25</del> ₹0</span>
      </div>
      <div className="summary-row">
        <span>Handling Charge</span>
        <span><del>₹21.99</del> ₹11.99</span>
      </div>
      <hr />
      <div className="summary-row bold">
        <span>To Pay</span>
        <span><del> ₹{cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity, 0)}</del>
        ₹{cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
      </div>
      <span className="green-text">SAVINGS ₹{cartItems.reduce((acc, item) => acc + item.originalPrice * item.quantity - (item.price * item.quantity), 0)}</span>
    </div>
  )}
</div>
</div>

      </div>

      <div className="add-address">
       
        <button>Add Address to proceed</button>
      </div>
    </div>
  );
};

export default Cart;
