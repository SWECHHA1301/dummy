import React from 'react'
import './Pop.css'
export default function PopUp() {
  return (
    <>
    <div className='PopNav'>
      <div style={{display:'flex'}}>
       <div className='ItemImg'><img src='https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c/Vietnamese-Cold-Coffee.jpeg' alt='coffee'/></div>
       <div style={{margin:'0 0 0 10px'}}><p className='ProductName'>Vietnamese Cold Coffee</p>
              <p className="price">
                ₹239 <del>₹ 319</del>
              </p></div>
      </div>
      <div>
        <button className="AddtoCart">Add To Cart</button> 
      </div>
    </div></>
  )
}