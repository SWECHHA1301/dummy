import SimilarItem from "./components/ListItems/SimilarItem";
import { useState } from "react";
function ProductDetail() {
      const [searchTerm, setSearchTerm] = useState('');
return(

    <>
    <div className="Product">
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
       <div className="item"></div>
       <div className="item"></div>
       <div className="item"></div>
       <div className="item"></div>
       <div className="item"></div>
      </div>
      <div className="itemimage2"></div></div>
      <button className="AddtoCart">Add To Cart</button> </div>

      <div className="Detail">
        <div className="DetailSec1">
            <div style={{ display:'flex',
 justifyContent: 'space-between'}}>
            <h3>Vietnamese Cold Coffee</h3>
            <div className="print"></div>
           </div>

            <div className="Qty">Net Qty: <b>450 ml</b>
            <div className="Rate">4.4</div>(2.1k)</div>

            <div className="Price">
                <h3>189</h3>
                <p>56% Off</p>
                
            </div>
            
            <p className="mrp">MRP <b>₹439</b> (incl. of all taxes)</p>
            <div className="CouponOffer">
            <div style={{width:'30px',height:'30px',border:'1px solid black', borderRadius:'4px',margin:'15px 6px 0 8px'}}></div>
            <div>
                
                <p style={{fontSize:'12px',margin:'16px 0 0 0'}}>Get at 89 with coupon offers</p>
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
            <div style={{ width:'62%',height:'1px',backgroundColor:'#ebecef',margin:'28px 10px 0 10px'}}></div>
        </div>

        <div style={{display:'flex'}}>
            <div style={{ width: '32px',
    height: '32px',
    borderRadius: '4px',
    border: '1px solid rgb(218, 218, 218)',
    margin:'20px 0 0 25px'
    }}></div>
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
    }}></div>
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
    }}></div>
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
    }}></div>
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
    }}></div>
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
                <div style={{width:'50px',height:'50px'}}></div>
                <p style={{fontSize:'10px',textAlign:'center',margin:'15px 0 0 0 '}}>No Return or Exchange</p>
              </div>
              <div style={{width:'100px',height:'100px',backgroundColor:'#f9f9fd',borderRadius:'16px',margin:'0 0 0 12px'}}>
                <div style={{width:'50px',height:'50px'}}></div>
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
    </>
)

}

export default ProductDetail;