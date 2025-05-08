export function ProductDetails() {
    
return(

    <>
    <div className="Product">
        <div>
    <div className="Nav">
        <span><a href="https://www.zeptonow.com/">Home</a></span>
        <span><a href="|#">Tea&Coffee</a></span>
        <span><a>Vietnamese Cold Coffee</a></span>
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

            <div style={{color:"#797c8d", margin: '10px 0 0 20px',fontSize:'14px', letterSpacing:'1px',display:"flex"}}>Net Qty: <b>450 ml</b>
            <div style={{width:'60px',height:'25px',backgroundColor:'#046d45',
                color:'white',fontWeight:'bold',borderRadius:"6px", padding:"5px 0 0 25px",margin:'0 5px',
            }}>4.4</div>(2.1k)</div>

            <div style={{display:'flex',alignItems:'center'}}>
                <h3 style={{margin:'10px 0 0 20px',fontSize:'25px'}}>189</h3>
                <p style={{color:'#046d45', margin:'12px 0 0 6px',fontSize:'15px',fontWeight:'bold'}}>56% Off</p>
                
            </div>

            <p style={{color:"#797c8d", margin:'5px 0 0 25px',fontSize:'14px'}}>MRP <b>₹439</b> (incl. of all taxes)</p>
            <div style={{ width:'450px',height:'60px',backgroundColor:'#f9f9fd',margin:'20px 0 0 25px',borderRadius:'6px', border:'1px solid #f0f4f9',display:'flex'}}>
            <div style={{width:'50px',height:'50px'}}></div>
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
            <p style={{color:'#5a6477',fontSize:'16px',fontWeight:'bold',margin:'20px 0 0 25px'}}>Coupon & Offers</p>
            <hr style={{ width:'70%',backgroundColor:''}}/>
        </div>
    </div>
</div>
    </>
)

}