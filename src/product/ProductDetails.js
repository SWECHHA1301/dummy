import SimilarItem from "./Component/SimilarItem/SimilarItem";
import { useState } from "react";
function ProductDetail() {
      const [searchTerm, setSearchTerm] = useState('');

      const images = [
  'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c/Vietnamese-Cold-Coffee.jpeg',
  'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/323ec1fa-93f9-4ffd-a6b1-67f994cb5f3c/Vietnamese-Cold-Coffee.jpeg',
  'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/0cc10036-0713-49a3-9fc8-9799127309de/Vietnamese-Cold-Coffee.jpeg',
  'https://cdn.zeptonow.com/production/ik-seo/tr:w-1280,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/4a7259dd-8056-480e-8881-220fb2350b63/Vietnamese-Cold-Coffee.jpeg',
  'https://cdn.zeptonow.com/production/ik-seo/tr:w-1210,ar-1210-700,pr-true,f-auto,q-80/inventory/IMAGE/c55e1c9f-8d21-4153-bf29-46892d57c616-Screenshot_2022-08-26_at_15.35.02/Vietnamese-Cold-Coffee.png',
];

const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
return(

    <>
    <div className="Product">
      <div className="Product2">
      <div style={{display:'flex',}}>
        <div>
    <div className="Nav">
        <span><a href="https://www.zeptonow.com/">Home</a>
        <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: 'black',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg></span>
        <span><a href="|#">Tea&Coffee</a>
        <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: 'black', }}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg></span>
        <span><a>Vietnamese Cold Coffee</a>
        <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: 'black',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg></span>
    </div>
    <div className="imageDetail">
      <div className="itemimage1">
       <div className="item">
        <img src="https://cdn.zeptonow.com/production/ik-seo/tr:w-88,ar-5304-5304,pr-true,f-auto,q-80/cms/product_variant/9bc896d4-229d-45a4-8294-b36f97f5992c/Vietnamese-Cold-Coffee.jpeg" 
        alt="item1" />
       </div>
       <div className="item">
        <img src="https://cdn.zeptonow.com/production/ik-seo/tr:w-88,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/323ec1fa-93f9-4ffd-a6b1-67f994cb5f3c/Vietnamese-Cold-Coffee.jpeg"
        alt="item2"/>
       </div>
       <div className="item">
           <img src="https://cdn.zeptonow.com/production/ik-seo/tr:w-88,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/0cc10036-0713-49a3-9fc8-9799127309de/Vietnamese-Cold-Coffee.jpeg"
        alt="item3"/>
       </div>
       <div className="item">
           <img src="https://cdn.zeptonow.com/production/ik-seo/tr:w-88,ar-2400-2400,pr-true,f-auto,q-80/cms/product_variant/4a7259dd-8056-480e-8881-220fb2350b63/Vietnamese-Cold-Coffee.jpeg"
        alt="item4"/>
       </div>
       <div className="item">
           <img src="https://cdn.zeptonow.com/production/ik-seo/tr:w-1210,ar-1210-700,pr-true,f-auto,q-80/inventory/IMAGE/c55e1c9f-8d21-4153-bf29-46892d57c616-Screenshot_2022-08-26_at_15.35.02/Vietnamese-Cold-Coffee.png"
        alt="item5"/>
       </div>
      </div>
      
      <div className="itemimage2">
        <div style={{position: 'relative',
  display: 'inline-block',}}>
       <img src={images[currentIndex]} alt="slide"  />
       <div style={{position:'absolute',display:'flex',gap:'5px', bottom: '10px',
  left: '76%',}}>
      <button onClick={prevSlide}>⟨</button>
      <button onClick={nextSlide}>⟩</button></div></div></div>
      
     

      </div>
      <button className="AddtoCart">Add To Cart</button> </div>

      <div className="Detail">
        <div className="DetailSec1">
            <div style={{ display:'flex',
 justifyContent: 'space-between'}}>
            <h3>Vietnamese Cold Coffee</h3>
            <div className="print"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path fill="#353840" d="M17.5 10c-.5 0-.833.333-.833.833v5c0 .5-.334.834-.834.834H4.167c-.5 0-.834-.334-.834-.834v-5c0-.5-.333-.833-.833-.833-.5 0-.833.333-.833.833v5c0 1.417 1.083 2.5 2.5 2.5h11.666c1.417 0 2.5-1.083 2.5-2.5v-5c0-.5-.333-.833-.833-.833ZM7.25 6.417 9.167 4.5v8c0 .5.333.833.833.833.5 0 .833-.333.833-.833v-8l1.917 1.917a.806.806 0 0 0 1.167 0 .806.806 0 0 0 0-1.167l-3.334-3.333c-.083-.084-.166-.167-.25-.167-.166-.083-.416-.083-.666 0-.084 0-.167.083-.25.167L6.083 5.25a.806.806 0 0 0 0 1.167.806.806 0 0 0 1.167 0Z"/></svg>
            </div>
           </div>

            <div className="Qty">Net Qty: <b>450 ml</b>
            <div className="Rate"> <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 9.211a.156.156 0 0 0-.157 0l-2.531 1.463a.486.486 0 0 1-.715-.54l.675-2.676a.156.156 0 0 0-.053-.16L1.118 5.53a.486.486 0 0 1 .269-.862l2.898-.22a.156.156 0 0 0 .132-.093l1.14-2.592a.486.486 0 0 1 .89 0l1.139 2.592a.156.156 0 0 0 .131.093l2.899.22a.486.486 0 0 1 .269.862L8.704 7.298a.156.156 0 0 0-.053.16l.674 2.677a.486.486 0 0 1-.714.54L6.08 9.21Z" fill="#fff"></path></svg>
            4.4</div>(2.1k)</div>

            <div className="Price">
                <h3>189</h3>
                <p>56% Off</p>
                
            </div>
            
            <p className="mrp">MRP <b>₹439</b> (incl. of all taxes)</p>
            <div className="CouponOffer">
            <div style={{width:'30px',height:'30px',border:'1px solid #f3f5fa', borderRadius:'4px',margin:'15px 6px 0 8px'}}>
              <svg fill="none" height="33" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M.5 8.2c0-1.9.001-3.275.142-4.323.139-1.034.406-1.675.883-2.153.478-.477 1.119-.744 2.153-.883C4.726.701 6.1.7 8 .7h16c1.9 0 3.274.001 4.323.142 1.033.14 1.674.406 2.152.883.477.478.744 1.119.883 2.153.14 1.048.142 2.422.142 4.322v16c0 1.9-.001 3.274-.142 4.323-.139 1.034-.406 1.675-.883 2.152-.478.477-1.119.744-2.152.883-1.049.141-2.423.142-4.323.142H8c-1.9 0-3.274 0-4.322-.142-1.034-.139-1.675-.405-2.153-.883-.477-.477-.744-1.119-.883-2.152C.502 27.474.5 26.099.5 24.199v-16Z" stroke="#F0F4F9"></path><path d="M25.073 14.208c-.354-.37-.72-.75-.857-1.085-.128-.306-.135-.815-.143-1.307-.014-.915-.029-1.952-.75-2.673-.72-.72-1.757-.736-2.672-.75-.493-.007-1-.015-1.307-.142-.334-.138-.716-.504-1.085-.857-.647-.622-1.382-1.326-2.36-1.326-.98 0-1.713.704-2.361 1.326-.37.353-.75.719-1.085.857-.305.127-.815.135-1.307.142-.915.014-1.952.03-2.673.75-.72.721-.73 1.758-.75 2.673-.007.492-.015 1-.142 1.307-.138.334-.504.715-.857 1.085-.622.647-1.326 1.382-1.326 2.36 0 .98.705 1.713 1.326 2.361.353.37.72.75.857 1.085.127.306.135.814.142 1.306.014.915.03 1.952.75 2.673.721.721 1.758.736 2.673.75.492.008 1 .015 1.307.143.334.138.715.503 1.085.857.647.621 1.382 1.325 2.36 1.325.98 0 1.713-.704 2.361-1.325.37-.354.75-.72 1.085-.857.306-.128.814-.135 1.307-.143.915-.014 1.951-.029 2.672-.75.721-.72.736-1.758.75-2.672.008-.493.015-1 .143-1.307.138-.334.503-.716.857-1.085.621-.648 1.325-1.382 1.325-2.36 0-.98-.704-1.713-1.325-2.361ZM23.99 17.89c-.45.469-.914.954-1.16 1.549-.237.572-.247 1.225-.257 1.858-.009.656-.02 1.344-.31 1.634-.292.29-.975.302-1.635.311-.633.01-1.286.02-1.858.256-.595.247-1.08.712-1.549 1.16-.468.45-.948.91-1.323.91s-.857-.462-1.322-.91c-.465-.446-.954-.913-1.55-1.16-.571-.236-1.224-.246-1.857-.256-.657-.009-1.344-.02-1.634-.31-.29-.293-.302-.975-.312-1.635-.009-.633-.02-1.286-.256-1.858-.246-.595-.711-1.08-1.16-1.549-.45-.469-.909-.948-.909-1.323s.462-.857.909-1.323c.447-.465.914-.953 1.16-1.548.237-.572.247-1.225.256-1.858.01-.657.02-1.344.312-1.634.291-.291.974-.302 1.634-.312.633-.009 1.286-.02 1.858-.256.595-.246 1.08-.711 1.549-1.16.468-.45.947-.909 1.322-.909.375 0 .858.462 1.323.909.465.447.954.914 1.549 1.16.572.237 1.225.247 1.858.256.656.01 1.344.02 1.634.312.29.291.302.974.311 1.634.01.633.02 1.286.256 1.858.247.595.712 1.08 1.161 1.549.45.468.908.947.908 1.322 0 .375-.46.857-.908 1.323Zm-8.842-4.323a2.25 2.25 0 1 0-4.499 0 2.25 2.25 0 0 0 4.5 0Zm-3 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm6.75 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm1.281-6.969-7.5 7.5a.751.751 0 0 1-1.061-1.061l7.5-7.5a.751.751 0 0 1 1.061 1.061Z" fill="#5A6477"></path><svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 9.211a.156.156 0 0 0-.157 0l-2.531 1.463a.486.486 0 0 1-.715-.54l.675-2.676a.156.156 0 0 0-.053-.16L1.118 5.53a.486.486 0 0 1 .269-.862l2.898-.22a.156.156 0 0 0 .132-.093l1.14-2.592a.486.486 0 0 1 .89 0l1.139 2.592a.156.156 0 0 0 .131.093l2.899.22a.486.486 0 0 1 .269.862L8.704 7.298a.156.156 0 0 0-.053.16l.674 2.677a.486.486 0 0 1-.714.54L6.08 9.21Z" fill="#fff"></path></svg></svg>
            </div>
            <div>
                
                <p style={{fontSize:'12px',}}>Get at 89 with coupon offers</p>
                <p style={{fontSize:'12px', color:'#fa3778',fontWeight:'bold'}}>View all offers</p>
              
            </div>
            <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1.2rem', width: '1.2rem', color: '#FA3778', margin:'22px 0 0 220px',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>

          
            </div> 
            <div style={{display:'flex'}}>
            <p style={{color:'#5a6477',fontSize:'16px',fontWeight:'bold',margin:'20px 0 0 25px'}}>Coupon & Offers</p>
            <div style={{ width:'62%',height:'1px',backgroundColor:'#ebecef',margin:'28px 10px 0 10px'}}>
              
            </div>
        </div>

        <div style={{display:'flex'}}>
            <div style={{ width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid rgb(218, 218, 218)',
    margin:'20px 0 0 25px'
    }}> <svg fill="none" height="33" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M.5 8.2c0-1.9.001-3.275.142-4.323.139-1.034.406-1.675.883-2.153.478-.477 1.119-.744 2.153-.883C4.726.701 6.1.7 8 .7h16c1.9 0 3.274.001 4.323.142 1.033.14 1.674.406 2.152.883.477.478.744 1.119.883 2.153.14 1.048.142 2.422.142 4.322v16c0 1.9-.001 3.274-.142 4.323-.139 1.034-.406 1.675-.883 2.152-.478.477-1.119.744-2.152.883-1.049.141-2.423.142-4.323.142H8c-1.9 0-3.274 0-4.322-.142-1.034-.139-1.675-.405-2.153-.883-.477-.477-.744-1.119-.883-2.152C.502 27.474.5 26.099.5 24.199v-16Z" stroke="#F0F4F9"></path><path d="M25.073 14.208c-.354-.37-.72-.75-.857-1.085-.128-.306-.135-.815-.143-1.307-.014-.915-.029-1.952-.75-2.673-.72-.72-1.757-.736-2.672-.75-.493-.007-1-.015-1.307-.142-.334-.138-.716-.504-1.085-.857-.647-.622-1.382-1.326-2.36-1.326-.98 0-1.713.704-2.361 1.326-.37.353-.75.719-1.085.857-.305.127-.815.135-1.307.142-.915.014-1.952.03-2.673.75-.72.721-.73 1.758-.75 2.673-.007.492-.015 1-.142 1.307-.138.334-.504.715-.857 1.085-.622.647-1.326 1.382-1.326 2.36 0 .98.705 1.713 1.326 2.361.353.37.72.75.857 1.085.127.306.135.814.142 1.306.014.915.03 1.952.75 2.673.721.721 1.758.736 2.673.75.492.008 1 .015 1.307.143.334.138.715.503 1.085.857.647.621 1.382 1.325 2.36 1.325.98 0 1.713-.704 2.361-1.325.37-.354.75-.72 1.085-.857.306-.128.814-.135 1.307-.143.915-.014 1.951-.029 2.672-.75.721-.72.736-1.758.75-2.672.008-.493.015-1 .143-1.307.138-.334.503-.716.857-1.085.621-.648 1.325-1.382 1.325-2.36 0-.98-.704-1.713-1.325-2.361ZM23.99 17.89c-.45.469-.914.954-1.16 1.549-.237.572-.247 1.225-.257 1.858-.009.656-.02 1.344-.31 1.634-.292.29-.975.302-1.635.311-.633.01-1.286.02-1.858.256-.595.247-1.08.712-1.549 1.16-.468.45-.948.91-1.323.91s-.857-.462-1.322-.91c-.465-.446-.954-.913-1.55-1.16-.571-.236-1.224-.246-1.857-.256-.657-.009-1.344-.02-1.634-.31-.29-.293-.302-.975-.312-1.635-.009-.633-.02-1.286-.256-1.858-.246-.595-.711-1.08-1.16-1.549-.45-.469-.909-.948-.909-1.323s.462-.857.909-1.323c.447-.465.914-.953 1.16-1.548.237-.572.247-1.225.256-1.858.01-.657.02-1.344.312-1.634.291-.291.974-.302 1.634-.312.633-.009 1.286-.02 1.858-.256.595-.246 1.08-.711 1.549-1.16.468-.45.947-.909 1.322-.909.375 0 .858.462 1.323.909.465.447.954.914 1.549 1.16.572.237 1.225.247 1.858.256.656.01 1.344.02 1.634.312.29.291.302.974.311 1.634.01.633.02 1.286.256 1.858.247.595.712 1.08 1.161 1.549.45.468.908.947.908 1.322 0 .375-.46.857-.908 1.323Zm-8.842-4.323a2.25 2.25 0 1 0-4.499 0 2.25 2.25 0 0 0 4.5 0Zm-3 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm6.75 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm1.281-6.969-7.5 7.5a.751.751 0 0 1-1.061-1.061l7.5-7.5a.751.751 0 0 1 1.061 1.061Z" fill="#5A6477"></path><svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 9.211a.156.156 0 0 0-.157 0l-2.531 1.463a.486.486 0 0 1-.715-.54l.675-2.676a.156.156 0 0 0-.053-.16L1.118 5.53a.486.486 0 0 1 .269-.862l2.898-.22a.156.156 0 0 0 .132-.093l1.14-2.592a.486.486 0 0 1 .89 0l1.139 2.592a.156.156 0 0 0 .131.093l2.899.22a.486.486 0 0 1 .269.862L8.704 7.298a.156.156 0 0 0-.053.16l.674 2.677a.486.486 0 0 1-.714.54L6.08 9.21Z" fill="#fff"></path></svg></svg></div>
    <div style={{margin:'27px 0 0 5px',fontSize:'14px',color:'#262a33'}}>100 FREE CASH on Zepto Cafe Items!</div>
    <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: '#FA3778', margin:'27px 0 0 8px',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div style={{display:'flex'}}>
            <div style={{ width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid rgb(218, 218, 218)',
    margin:'12px 0 0 25px'
    }}>
      <img src="https://cdn.zeptonow.com/production/tr:w-64,ar-1968-1968,pr-true,f-auto,q-80/inventory/banner/e8ba8f4b-38cf-4100-9fa0-6c3e4eccf7a8.png"
         alt="" style={{width: '32px',
    height: '32px',
    borderRadius: '4px',}}/>
    </div>
    <div style={{margin:'20px 0 0 5px',fontSize:'14px',color:'#262a33'}}>Get assured rewards with CRED</div>
    <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: '#FA3778', margin:'20px 0 0 8px',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div style={{display:'flex'}}>
            <div style={{ width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid rgb(218, 218, 218)',
    margin:'12px 0 0 25px'
    }}>
      <img src="https://cdn.zeptonow.com/production/tr:w-64,ar-842-595,pr-true,f-auto,q-80/inventory/banner/c363f9b5-c88e-44a6-91f8-9aba7c338e48.png"
         alt="" style={{width: '32px',
    height: '32px',
    borderRadius: '4px',}}/>

    </div>
    <div style={{margin:'20px 0 0 5px',fontSize:'14px',color:'#262a33'}}>Get flat ₹25 discount with BHIM App</div>
    <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: '#FA3778', margin:'20px 0 0 8px',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div style={{display:'flex'}}>
            <div style={{ width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid rgb(218, 218, 218)',
    margin:'12px 0 0 25px'
    }}>
     <img src="https://cdn.zeptonow.com/production/tr:w-64,ar-400-400,pr-true,f-auto,q-80/app/bank-icons/v2/73bb8e2e-7204-4aed-bee0-842a3e0105ef.png"
         alt="" style={{width: '32px',
    height: '32px',
    borderRadius: '4px',}}/>

    </div>
    <div style={{margin:'20px 0 0 5px',fontSize:'14px',color:'#262a33'}}>Get up to ₹25 cashback using Amazon Pay Balance</div>
    <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: '#FA3778', margin:'20px 0 0 8px',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div style={{display:'flex'}}>
            <div style={{ width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid rgb(218, 218, 218)',
    margin:'12px 0 0 25px'
    }}>

       <img src="https://cdn.zeptonow.com/production/tr:w-64,ar-1080-594,pr-true,f-auto,q-80/app/bank-icons/v2/e954ea59-6734-4db3-8a24-29c3945fc445.png"
         alt="" style={{width: '32px',
    height: '32px',
    borderRadius: '4px',}}/>
    </div>
    <div style={{margin:'20px 0 0 5px',fontSize:'14px',color:'#262a33'}}>Get Up to ₹50 cashback on minimum transaction of ₹399</div>
    <svg
            fill="none"
            height="16"
            viewBox="0 0 17 16"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: '1rem', width: '1rem', color: '#FA3778', margin:'20px 0 0 8px',}}
          >
            <path
              d="M7 4.5L10.5 8L7 11.5"
              stroke="#FA3778"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
          <p style={{margin:'20px 0 0 25px'}}><a  href="#" style={{color:'#FA3778',textDecorationLine:'none',fontSize:'14px',fontWeight:'bold',letterSpacing:'1px'}}>
            View all coupons</a></p>
            
            <div style={{ width:'92%',height:'1px',backgroundColor:'#ebecef',margin:'20px 10px 0 20px'}}></div>
             
             <div style={{display:'flex',margin:'25px 0 0 25px'}}>
              
              <div style={{width:'100px',height:'100px',backgroundColor:'#f9f9fd',borderRadius:'16px'}}>
               
                <div style={{width:'50px',height:'50px'}}>

                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44"  fill="none" viewBox="0 0 44 44" style={{margin:'16px 0 0 27px'}}><path fill="#344054" fill-rule="evenodd" d="M28.691 6.093c-1.976-2.67-5.76-3.241-8.427-1.267a6.394 6.394 0 0 1-4.78 1.188 5.982 5.982 0 0 0-4.477 1.115 5.987 5.987 0 0 0-2.374 3.952A6.4 6.4 0 0 1 6.09 15.3a5.987 5.987 0 0 0-2.374 3.952 5.984 5.984 0 0 0 1.115 4.477l.001.001a6.405 6.405 0 0 1 1.188 4.78c-.486 3.282 1.786 6.357 5.066 6.851a6.4 6.4 0 0 1 4.22 2.542 6.02 6.02 0 0 0 4.853 2.437h.269l.003.003a5.962 5.962 0 0 0 3.303-1.172l.001-.001a6.443 6.443 0 0 1 4.777-1.188h.003a5.983 5.983 0 0 0 4.476-1.115 5.987 5.987 0 0 0 2.374-3.951 6.4 6.4 0 0 1 2.542-4.221 5.987 5.987 0 0 0 2.374-3.952 5.983 5.983 0 0 0-1.115-4.477h-.001a6.406 6.406 0 0 1-1.188-4.78c.486-3.283-1.786-6.358-5.066-6.852m-4.22-2.542a6.399 6.399 0 0 0 4.22 2.542ZM19.49 3.78c3.246-2.404 7.844-1.705 10.245 1.539h.001a5.099 5.099 0 0 0 3.368 2.03c3.992.6 6.75 4.338 6.16 8.328l-.001.001a5.105 5.105 0 0 0 .948 3.815 7.284 7.284 0 0 1 1.355 5.443 7.287 7.287 0 0 1-2.885 4.803l-.001.001a5.1 5.1 0 0 0-2.03 3.369 7.287 7.287 0 0 1-2.885 4.803 7.282 7.282 0 0 1-5.44 1.356 5.143 5.143 0 0 0-3.817.947 7.265 7.265 0 0 1-4.34 1.434h-.27l-.014-.014a7.316 7.316 0 0 1-5.622-2.959 5.099 5.099 0 0 0-3.369-2.03c-3.991-.6-6.75-4.338-6.159-8.327v-.002a5.105 5.105 0 0 0-.948-3.815 7.284 7.284 0 0 1-1.355-5.443 7.287 7.287 0 0 1 2.886-4.803 5.1 5.1 0 0 0 2.03-3.37 7.287 7.287 0 0 1 2.885-4.803 7.283 7.283 0 0 1 5.443-1.356m-7.687 6.256h.001l11.887-6.68m0 0-.386-.524Zm-.386-.524a5.095 5.095 0 0 1-3.815.948Z" clip-rule="evenodd"/><path fill="#757C8D" fill-rule="evenodd" d="M12.729 14.885a2.52 2.52 0 0 1 2.52-2.521h14.667a2.52 2.52 0 0 1 2.52 2.52v2.72a.687.687 0 1 1-1.374 0v-2.72c0-.632-.513-1.145-1.146-1.145H15.249c-.633 0-1.146.513-1.146 1.146v8.766a.687.687 0 1 1-1.374 0v-8.766Z" clip-rule="evenodd"/><path fill="#757C8D" fill-rule="evenodd" d="M32.435 29.218a2.52 2.52 0 0 1-2.52 2.52h-2.436a.687.687 0 1 1 0-1.374h2.436c.633 0 1.146-.513 1.146-1.146V17.85a.688.688 0 0 1 1.374 0v11.367Z" clip-rule="evenodd"/><path fill="#757C8D" d="M23.578 18.016V13.7h5.5v4.316a.55.55 0 0 1-.716.524l-1.868-.592a.55.55 0 0 0-.332 0l-1.868.592a.55.55 0 0 1-.716-.524Z"/><path fill="#344054" fill-rule="evenodd" d="M18.622 26.668c-1.591-.58-3.374-.32-5.477.895a.618.618 0 1 1-.619-1.07c2.3-1.328 4.472-1.733 6.52-.987 2.017.736 3.771 2.541 5.368 5.307a.618.618 0 1 1-1.07.618c-1.537-2.66-3.103-4.172-4.722-4.763Z" clip-rule="evenodd"/><path fill="#344054" fill-rule="evenodd" d="M18.675 27.097c-1.607-.39-3.446.056-5.613 1.307a.618.618 0 0 1-.618-1.07c2.29-1.324 4.471-1.937 6.523-1.439 2.06.501 3.825 2.081 5.377 4.769a.618.618 0 0 1-1.071.618c-1.465-2.537-2.998-3.796-4.598-4.185Z" clip-rule="evenodd"/><path fill="#344054" fill-rule="evenodd" d="M18.854 27.284c-1.535-.304-3.31.227-5.505 1.495a.618.618 0 1 1-.619-1.072c2.268-1.309 4.377-2.03 6.364-1.636 2.013.399 3.717 1.9 5.266 4.583a.618.618 0 0 1-1.071.618c-1.467-2.54-2.924-3.688-4.435-3.988Z" clip-rule="evenodd"/><path fill="#344054" fill-rule="evenodd" d="M19.193 27.738c-1.41-.11-3.058.626-5.31 1.926a.618.618 0 1 1-.618-1.07c2.208-1.276 4.178-2.234 6.024-2.09 1.933.152 3.526 1.473 5.072 4.15a.618.618 0 0 1-1.071.619c-1.471-2.548-2.773-3.432-4.097-3.535Z" clip-rule="evenodd"/><path fill="#344054" d="m10.385 29.749 3.622.914a.082.082 0 0 0 .092-.121l-1.331-2.305-1.331-2.306a.082.082 0 0 0-.15.02l-1.02 3.593a.165.165 0 0 0 .118.205Z"/><path fill="#344054" fill-rule="evenodd" d="m11.535 27.339-.546 1.925 1.94.49-1.394-2.415Zm-.844-1.557a.7.7 0 0 1 1.281-.16l2.662 4.61a.7.7 0 0 1-.778 1.03l-3.622-.914a.783.783 0 0 1-.562-.973l1.019-3.593ZM31.721 38.289 9.933 7.126l1.065-.745 21.788 31.163-1.065.745Z" clip-rule="evenodd"/></svg>
                </div>
              
                <p style={{fontSize:'10px',textAlign:'center',margin:'15px 0 0 0 '}}>No Return or Exchange</p>
             
              </div>
              
              <div style={{width:'100px',height:'100px',backgroundColor:'#f9f9fd',borderRadius:'16px',margin:'0 0 0 12px'}}>
               
                <div style={{width:'50px',height:'50px'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" fill="none" viewBox="0 0 44 44" style={{margin:'16px 0 0 27px'}}><g clip-path="url(#clip0_2041_168781)" ><path fill="#344054" fill-rule="evenodd" d="M28.669 6.11c-1.967-2.657-5.734-3.226-8.387-1.261h-.002a6.423 6.423 0 0 1-4.8 1.193 5.955 5.955 0 0 0-4.456 1.11 5.958 5.958 0 0 0-2.362 3.933 6.429 6.429 0 0 1-2.554 4.24 5.958 5.958 0 0 0-2.362 3.932 5.956 5.956 0 0 0 1.11 4.456 6.434 6.434 0 0 1 1.194 4.802c-.484 3.267 1.777 6.327 5.042 6.819a6.428 6.428 0 0 1 4.24 2.553 5.992 5.992 0 0 0 4.828 2.426h.281l.003.002a5.934 5.934 0 0 0 3.275-1.166v-.001a6.472 6.472 0 0 1 4.798-1.194h.004a5.954 5.954 0 0 0 4.455-1.109 5.959 5.959 0 0 0 2.363-3.933 6.428 6.428 0 0 1 2.552-4.24h.001l.403.546-.404-.545a5.96 5.96 0 0 0 2.363-3.933 5.955 5.955 0 0 0-1.11-4.456 6.434 6.434 0 0 1-1.193-4.802l.67.1-.67-.1c.483-3.267-1.778-6.327-5.043-6.819a6.427 6.427 0 0 1-4.24-2.554Zm-9.195-2.352c3.259-2.413 7.875-1.712 10.286 1.545.811 1.1 2.001 1.816 3.35 2.018 4.007.603 6.776 4.355 6.183 8.36v.002a5.076 5.076 0 0 0 .943 3.795 7.313 7.313 0 0 1 1.36 5.463 7.316 7.316 0 0 1-2.897 4.822v.001c-1.1.81-1.816 2-2.018 3.35a7.316 7.316 0 0 1-2.897 4.822 7.311 7.311 0 0 1-5.462 1.361 5.114 5.114 0 0 0-3.797.943 7.293 7.293 0 0 1-4.356 1.439h-.281l-.015-.015a7.344 7.344 0 0 1-5.633-2.97 5.07 5.07 0 0 0-3.35-2.018c-4.007-.603-6.776-4.355-6.183-8.36v-.002a5.077 5.077 0 0 0-.942-3.794 7.312 7.312 0 0 1-1.36-5.464A7.316 7.316 0 0 1 5.3 14.234h.001c1.1-.812 1.815-2.002 2.018-3.35a7.316 7.316 0 0 1 2.896-4.823A7.311 7.311 0 0 1 15.68 4.7m3.794-.942.404.545Zm.404.545-.403-.546Zm-.403-.546a5.067 5.067 0 0 1-3.795.943Z" clip-rule="evenodd"/><path fill="#757C8D" fill-rule="evenodd" d="M24.435 10.533v2.016a1.135 1.135 0 0 1-2.27 0v-2.016h2.27Z" clip-rule="evenodd"/><path fill="#757C8D" fill-rule="evenodd" d="M25.647 9.848a.685.685 0 0 0-.685-.685h-3.324a.685.685 0 1 0 0 1.37h3.324a.685.685 0 0 0 .685-.685Z" clip-rule="evenodd"/><path fill="#344054" fill-rule="evenodd" d="M10.893 20.033c0-.377.305-.683.683-.683h5.875a.683.683 0 0 1 0 1.366h-5.875a.683.683 0 0 1-.684-.683Zm-2.5 3.3c0-.377.305-.683.683-.683H21.15a.683.683 0 0 1 0 1.367H9.076a.683.683 0 0 1-.684-.683ZM13.192 26.431c0-.377.306-.683.683-.683h2.775a.683.683 0 0 1 0 1.366h-2.775a.683.683 0 0 1-.683-.683Zm-3.1 0c0-.377.306-.683.683-.683h.775a.683.683 0 0 1 0 1.367h-.775a.683.683 0 0 1-.683-.683Z" clip-rule="evenodd"/><path fill="#344054" d="M22.065 18.628h3.486c.055 0 .091.058.067.107l-1.977 3.587a.074.074 0 0 0 .066.107l2.103.297c.068 0 .1.083.05.128l-4.4 4.752a.074.074 0 0 1-.05.02h.012a.074.074 0 0 1-.069-.103l1.402-3.054a.074.074 0 0 0-.05-.1c-.011-.003-.024-.004-.035-.009l-2.263-.875c-.011-.004-.023-.005-.035-.008a.074.074 0 0 1-.05-.1l.005-.014 1.67-4.689a.057.057 0 0 1 .006-.013.074.074 0 0 1 .062-.033Z"/><path fill="#344054" fill-rule="evenodd" d="M21.586 18.385a.574.574 0 0 1 .479-.257h3.486c.427 0 .704.449.514.83l-.005.01-1.68 3.05 1.479.21c.481.037.705.63.36.976l-4.406 4.757-.016.014a.574.574 0 0 1-.375.15h-.012a.574.574 0 0 1-.52-.792l.004-.01 1.215-2.644-1.853-.716-.007-.002a.574.574 0 0 1-.39-.776h.001l1.666-4.678a.56.56 0 0 1 .06-.122Zm1.348 6.893 2.01-2.17-1.286-.181a.574.574 0 0 1-.464-.828l.004-.01 1.632-2.961h-2.464l-1.433 4.024 1.888.73.007.002c.327.084.527.441.39.774l-.004.01-.28.61Zm-2.15-1.71-.002.003Zm-.002.003v-.002Zm0-.002.001-.001Z" clip-rule="evenodd"/><path fill="#757C8D" fill-rule="evenodd" d="M23.128 13.683a9.483 9.483 0 0 0-7.684 3.915.683.683 0 0 1-1.105-.804 10.85 10.85 0 0 1 8.79-4.477c6 0 10.863 4.864 10.863 10.864 0 6-4.864 10.864-10.864 10.864a10.85 10.85 0 0 1-8.789-4.477.683.683 0 0 1 1.105-.804 9.497 9.497 0 1 0 7.684-15.08Z" clip-rule="evenodd"/></g><defs><clipPath id="clip0_2041_168781"><path fill="#fff" d="M0 0h44v44H0z"/></clipPath></defs></svg>
                </div>
               
                <p style={{fontSize:'10px',textAlign:'center',margin:'15px 0 0 0 '}}>Fast Delivery</p>
              
              </div>
            
             </div>

        </div>

        <div className="DetailSec2">
          <h4>Highlights</h4>
         <table>
         <tr>
            <td>Brand</td>
            <td>Zepto Cafe</td>
          </tr>

          <tr>
            <td>Product Type</td>
            <td>Cold Coffee-Coffee</td>
          </tr>
          <tr>
            <td>Key Features</td>
            <td>Our bestseller Strong brewed coffee meets velvety condensed milk over ice refreshing rich and just the right kind of pickmeup</td>
          </tr>
          <tr>
            <td>Ingredients</td>
            <td>Coffee, Sweetened Condensed Milk, and Ice</td>
          </tr>
          <tr>
            <td>Allergen Information</td>
            <td>Contains: Milk</td>
          </tr>
          <tr>
            <td>Nutrition Information</td>
            <td>Energy (kcal) 76.6, Protein (g) 2.5, Carbohydrate (g) 12.6, Sugar (g) 8.4, Sodium (mg) 28.9, Fat (g) 1.9</td>
          </tr>
          <tr>
            <td>Dietary Preference</td>
            <td>Veg</td>
          </tr>
          <tr>
            <td>Serving Size</td>
            <td>450 g</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>450 ml</td>
          </tr>
         </table>
        </div>

            <div className="DetailSec2">
          <h4>Information</h4>
         <table>
         <tr>
            <td>Disclaimer</td>
            <td>Efforts are made to ensure accuracy, but product packaging may have additional or updated details.. Please do not rely solely on the information provided and refer to the packaging for complete details. Nutritional information is provided per 100g/ml.</td>
          </tr>

          <tr>
            <td>Customer Care Details</td>
            <td>In case of any issue, contact us E-mail address: support@zeptonow.com</td>
          </tr>
          <tr>
            <td>Refund Policy</td>
            <td>Refunds/complaints window is 12 hrs</td>
          </tr>
          <tr>
            <td>Seller Name</td>
            <td>Drogheria Sellers Private Limited</td>
          </tr>
          <tr>
            <td>Seller Address</td>
            <td>Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com</td>
          </tr>
          <tr>
            <td>Seller License No.</td>
            <td>11522998001570</td>
          </tr>
         
     </table>
        </div>
  
    </div></div>

  <div><SimilarItem searchTerm={searchTerm} title={'Similar Product'}/></div>
   <div><SimilarItem searchTerm={searchTerm} title={'You might also like'}/></div>
   </div>
   
</div>

    </>
)

}

export default ProductDetail;