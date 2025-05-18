import React, { useEffect, useState } from 'react';
import Orders from './components/Orders';
import OrderList from './components/Order';
import Profile from "./components/Profile";
import AddressForm from './components/AddressForm';
import ProfileContainer from './ProfileContainer';
import { useNavigate, useParams } from 'react-router';
import OrderDetails from '../orders/OrderDetails';

const orders = [
  {
    id: 1,
    title: "Hachiko Scissor Nail Clipper",
    price: "₹265",
    status: "Cancelled",
    statusColor: "red",
    date: "May 04",
    reason: "As per your request, your item has been cancelled.",
    image:
      "https://rukminim2.flixcart.com/image/200/200/xif0q/pet-nail-clipper/m/2/z/best-quality-combo-of-2-dog-product-nail-claipper-hair-flea-comb-original-imagh4wzhypysthz.jpeg?q=90",
    rating: 3,
  },
];

const ProfileSection = () => {
  const { orderId, subMenu } = useParams()
  const [selectedTab, setSelectedTab] = useState('orders');
  const navigate = useNavigate();

  useEffect(() => {
    const expectedTabs = ["orders", "addresses", "profile-details"];
    if ((!orderId && !subMenu) || !expectedTabs.includes(subMenu)) {
      navigate('/profile/orders')
    }
    setSelectedTab(subMenu)
  }, [subMenu, orderId, navigate])


  return (
    <ProfileContainer
      selectedTab={selectedTab}
      children={
        orderId ? <OrderDetails /> : <>
          {selectedTab === 'orders' && (
            orders.length > 0 ? <OrderList orders={orders} /> : <Orders />
          )}
          {selectedTab === 'addresses' && <AddressForm />}
          {selectedTab === 'profile-details' && <Profile />}</>
      }
    />
  );
};

export default ProfileSection;

