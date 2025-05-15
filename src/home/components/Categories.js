import React from 'react'
import "./App.css";

function Categories() {
  return (
    <div>
      
      <section>
  <div className="categories">
    <div><h3>Categories</h3></div>
    <div>
    <table>
      <tbody>
        <tr>
          <td>Fruits & Vegetables</td>
        <td>Atta, Rice, Oil & Dals</td>
        <td>Masala & Dry Fruits</td>
        <td>Sweet Cravings</td>
        <td>Frozen Food & Ice Creams</td>
      </tr>
       

        <tr><td>Baby Food</td>
          <td>Dairy, Bread & Eggs</td>
          <td>Cold Drinks & Juices</td>
          <td>Munchies</td>
          <td>Meats, Fish & Eggs</td></tr>

          <tr><td>Breakfast & Sauces</td>
            <td> Tea, Coffee & More</td>
            <td>Biscuits</td>
            <td>Makeup & Beauty</td>
            <td>Bath & Body</td></tr>

        <tr><td>Cleaning Essentials</td>
          <td>Home Needs</td>
          <td>Electricals & Accessories</td>
          <td>Hygiene & Grooming</td>
          <td>Health & Baby Care</td></tr>

        <tr><td>Homegrown Brands</td>
          <td>Paan Corner</td></tr>
         

      </tbody>
    </table>
  </div>
  <hr className="separation" />
  </div>
</section>

    </div>
  );
}

export default Categories;
