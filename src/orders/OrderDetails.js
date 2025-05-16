import React from "react";
import { CheckCircle, ClipboardCopy } from "lucide-react";

const OrderDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-sm text-black">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-between items-center">
        <div>
          <p className="font-semibold">Order #DEFEAATDO42347</p>
          <p className="text-xs text-gray-500">3 items</p>
        </div>
        <button className="text-sm text-purple-600 border px-3 py-1 rounded-full">Help</button>
      </div>

      {/* Status */}
      <div className="bg-white p-4 flex items-center space-x-2 border-b">
        <CheckCircle className="text-green-500" size={24} />
        <p className="font-semibold text-lg">Delivered</p>
      </div>

      {/* Shipment Items */}
      <div className="bg-white p-4">
        <p className="font-semibold mb-3">3 items in Shipment 1</p>

        {/* Item 1 */}
        <div className="flex justify-between items-start mb-4">
          <img
            src="https://cdn.zeptonow.com/production/tr:w-100,ar-1200-1200,pr-true,f-auto,q-80/cms/product_variant/af9cd97a-f820-487d-a47c-4f568c3f647f.jpeg"
            alt="Headphones"
            className="w-14 h-14 rounded-lg border"
          />
          <div className="ml-3 flex-1">
            <p className="font-semibold text-sm">
              boAt Rockerz 425 On Ear BT Headphones 25H Playtime, BEAST mode and BTv5.2 (Active Black)
            </p>
            <p className="text-xs text-gray-500">1 pc · 1 unit</p>
          </div>
          <div className="text-right text-sm font-semibold">
            ₹1219 <br />
            <span className="line-through text-xs text-gray-400">₹2999</span>
          </div>
        </div>
      </div>

      {/* Bill Summary */}
      <div className="bg-white mt-3 p-4 border-t">
        <p className="font-bold mb-3">🧾 Bill Summary</p>

        <div className="flex justify-between text-sm mb-1">
          <p className="text-gray-600">Item Total & GST</p>
          <p><s className="text-gray-400">₹2999.98</s> ₹1299.98</p>
        </div>
        <div className="flex justify-between text-sm mb-1">
          <p>🪙 Extra Discount With Pass</p>
          <p className="text-green-600">-₹30</p>
        </div>
        <div className="flex justify-between text-sm mb-3 font-semibold">
          <p>🛒 Item total With Pass & GST</p>
          <p>₹1269.98</p>
        </div>

        <div className="flex justify-between text-sm text-green-600 mb-1">
          <p>Discount (ELECTRICAL50)</p>
          <p>-₹50</p>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <p>Handling Charge</p>
          <p>₹5.49</p>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <p>Rain Fee</p>
          <p>₹0</p>
        </div>
        <div className="flex justify-between text-sm text-gray-700 mb-1">
          <p>🚚 Delivery Fee: Free with Pass</p>
          <p className="text-green-600">₹0</p>
        </div>
        <div className="flex justify-between text-sm text-gray-700">
          <p>Zepto Pass Membership</p>
          <p>₹1</p>
        </div>

        {/* Total Bill */}
        <div className="border-t mt-4 pt-3">
          <div className="flex justify-between text-base font-bold">
            <p>Total Bill</p>
            <p>
              <s className="text-sm text-gray-400">₹3368.98</s>{" "}
              <span className="text-black">₹1226.47</span>
            </p>
          </div>
          <p className="text-xs text-green-600 font-semibold mt-1">
            SAVED ₹2142.51
          </p>
        </div>

        {/* Download Invoice Button */}
        <div className="mt-4">
          <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md text-sm font-medium">
            Download Invoice / Credit Note
          </button>
        </div>
      </div>

      {/* Order Details */}
      <div className="bg-white mt-3 p-4">
        <p className="font-bold mb-3">Order Details</p>

        <div className="mb-2">
          <p className="text-gray-500 text-xs">Order ID</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-medium">#DEFEAATDO42347</p>
            <ClipboardCopy className="w-4 h-4 text-gray-400 cursor-pointer" />
          </div>
        </div>

        <div className="mb-2">
          <p className="text-gray-500 text-xs">Delivery Address</p>
          <p className="text-sm font-medium">E14, Regency Intercity</p>
        </div>

        <div className="mb-2">
          <p className="text-gray-500 text-xs">Order Placed</p>
          <p className="text-sm font-medium">12th Aug 2024, 08:14 pm</p>
        </div>

        <div>
          <p className="text-gray-500 text-xs">Order Arrived</p>
          <p className="text-sm font-medium">12th Aug 2024, 08:32 pm</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;







