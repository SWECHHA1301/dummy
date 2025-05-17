import React from 'react'
import './imageDetail.css';


import { useState } from "react";

export default function ImageDetails() {

     const images = [
      'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c/Vietnamese-Cold-Coffee.jpeg',
      'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/323ec1fa-93f9-4ffd-a6b1-67f994cb5f3c/Vietnamese-Cold-Coffee.jpeg',
      'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/0cc10036-0713-49a3-9fc8-9799127309de/Vietnamese-Cold-Coffee.jpeg',
      'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/4a7259dd-8056-480e-8881-220fb2350b63/Vietnamese-Cold-Coffee.jpeg',
      // 'https://cdn.zeptonow.com/production/ik-seo/tr:w-1210,ar-1210-700,pr-true,f-auto,q-80/inventory/IMAGE/c55e1c9f-8d21-4153-bf29-46892d57c616-Screenshot_2022-08-26_at_15.35.02/Vietnamese-Cold-Coffee.png',
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
      const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      };
    
      const nextSlide = () => {
        // setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
         setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
      };
  return (
    <>
    <div className='image-collection'>
            <div className="imageDetail">
            <div className="itemimage1">
           {images.map((img, i) => (

                    <div
                      onClick={() => {
                        setCurrentIndex(i);
                      }}
                      key={i}
                        className={`item ${
                        currentIndex === i ? "selectedItem" : ""
                      }`} >
        <img src={img} alt="slide"  />
       </div>

         ))}
         </div>
       
       
      
      <div className="itemimage2">
    
       <div className='itemimageOne'>
       <img src={images[currentIndex]} alt="slide"/>
        <div  className='Image-btn'>
      <button onClick={prevSlide}>⟨</button>
      <button onClick={nextSlide}>⟩</button>
      </div>
      </div>
      </div>

       
      
      </div>
<div style={{ marginLeft: '68px'}}>
      <div className='cart-btn'> <button className="AddtoCart">Add To Cart</button></div></div>
</div>

    
    </>
  )
}
