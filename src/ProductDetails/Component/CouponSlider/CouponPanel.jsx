import React, { useState } from 'react';
import './couponPanel.css';

const offers = [
  {
    title: '₹100 FREE CASH on Zepto Cafe Items!',
    details: [
      'Get 70% OFF UPTO ₹100 Free Cash on Cafe Items',
      'Coupon is applicable on all Zepto Cafe Items!',
    ],
    minOrder: 1,
  },
  {
    title: 'Get assured rewards with CRED',
    details: [''],
    minOrder: 1,
  },
  {
    title: 'Get flat ₹25 discount with BHIM App',
    details: [
      'Get ₹25 Instant Discount on transactions above ₹349 with BHIM App',
      '- Offer applicable once per user',
      '- Instant ₹25 OFF',
      '- Valid only on Payments made by BHIM App',
      '- Offer valid from 1st May - 31st May 2025',
      '- Other T&C may apply',
    ],
    minOrder: 349,
  },
  {
    title: 'Get up to ₹25 cashback using Amazon Pay Balance',
    details: [
      'Get up to ₹25 cashback with Amazon Pay Balance on orders above ₹399',
      '- Valid only for users who have linked their Amazon account and made a payment using Amazon Pay Balance',
      '- Valid for India Mobile Verified Users only on Zepto orders of min. value ₹399',
      '- The cashback will only be issued once the customer scratches the issued card on Amazon Pay',
      '- The Scratch card is available until end of the month',
      '- The cashback will be credited as Amazon Pay balance within 24 hours',
      '- This offer is valid 1 time(s) per user',
    ],
    minOrder: 399,
  },
  {
    title: 'Assured ₹10 – ₹300 Cashback on using Paytm UPI',
    details: [
      'Get an assured cashback of up to ₹300 using Paytm UPI',
      '- Valid Once per user only on payments via Paytm UPI',
      '- Valid on a minimum order value of 399',
      '- Scratch cards expire 2 days after issuance',
      '- Cashback credited within 30 days on Paytm App after redemption',
      '- Other T&C may apply',
    ],
    minOrder: 399,
  },
];

export default function CouponsPanel({ onClose }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className='Main-Panel'>
      <div className="coupon-panel">
        <div className="header-con">
          <div className="heading-panel">
            <h3>Coupons & Offers</h3>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
        </div>

        <div className='Coupon-container'>
          {offers.map((offer, index) => (
            <div key={index} className="offer-box">
              <div className="offers-content">
                <p>{offer.title}</p>
                {expanded[index] && offer.details.length > 0 && (
                  <ul className="details-list">
                    {offer.details.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className='seperate-line'></div>

              <div className='View'>
                <div className="offers-actions">
                  {offer.details.length > 0 && (
                    <button
                      className="view-more"
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? 'View Less' : 'View More'}
                    </button>
                  )}
                  <span className="min-orders">
                    Min Order Required: ₹{offer.minOrder}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
