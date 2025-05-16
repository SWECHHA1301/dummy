import React from "react";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/order-details");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h2 className="text-xl font-semibold mb-4 px-2">Orders</h2>

      <div
        className="bg-white rounded-2xl shadow-sm p-4 flex items-start justify-between cursor-pointer"
        onClick={handleOrderClick}
      >
        {/* Left section */}
        <div>
          <div className="flex space-x-2 mb-2">
            <img
              src="https://cdn.zeptonow.com/production/tr:w-100,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/af9cd97a-f820-487d-a47c-4f568c3f647f.jpeg"
              alt="Product"
              className="w-14 h-14 object-cover rounded-xl border"
            />
          </div>
          <div>
            <p className="font-semibold text-sm">
              Order delivered <span className="text-green-600">✔</span>
            </p>
            <p className="text-xs text-gray-500">
              Placed at 12th Aug 2024, 08:14 pm
            </p>
          </div>
        </div>

        <div className="text-right font-semibold text-black whitespace-nowrap">
          ₹1226.47 <span className="text-gray-400 ml-1">›</span>
        </div>
      </div>
    </div>
  );
};

export default Order;


