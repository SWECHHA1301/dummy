import React, {useState} from 'react'
import MoreArrow from '../MoreArrow'
import './Details.css';
import CouponsPanel from '../CouponSlider/CouponPanel';

import { couponIcon } from '../../../assets/images/svg/icons';

export default function Detail() {
  const [showCoupons, setShowCoupons] = useState(false);
  return (

    <>
      <div className='card-container'>
        <div className='card'>
          <div>
            <div style={{ borderRadius: '1rem' }}>
              <div className='heading'>
                <h1>Vietnamese Cold Coffee</h1>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"
                    style={{
                      objectFit: 'contain',
                      overflow: 'hidden',
                      position: 'relative',
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                  ><path fill="#353840" d="M17.5 10c-.5 0-.833.333-.833.833v5c0 .5-.334.834-.834.834H4.167c-.5 0-.834-.334-.834-.834v-5c0-.5-.333-.833-.833-.833-.5 0-.833.333-.833.833v5c0 1.417 1.083 2.5 2.5 2.5h11.666c1.417 0 2.5-1.083 2.5-2.5v-5c0-.5-.333-.833-.833-.833ZM7.25 6.417 9.167 4.5v8c0 .5.333.833.833.833.5 0 .833-.333.833-.833v-8l1.917 1.917a.806.806 0 0 0 1.167 0 .806.806 0 0 0 0-1.167l-3.334-3.333c-.083-.084-.166-.167-.25-.167-.166-.083-.416-.083-.666 0-.084 0-.167.083-.25.167L6.083 5.25a.806.806 0 0 0 0 1.167.806.806 0 0 0 1.167 0Z" /
                    ></svg>
                  {/* <img src='copy.svg' alt='copy button'/> */}
                </button>
              </div>

              <div className='Rate'>
                <p>Net Qty: </p>
                <div className='sec'>

                  <div className='rt'>
                    <svg fill="none" height="12" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M6.08 9.211a.156.156 0 0 0-.157 0l-2.531 1.463a.486.486 0 0 1-.715-.54l.675-2.676a.156.156 0 0 0-.053-.16L1.118 5.53a.486.486 0 0 1 .269-.862l2.898-.22a.156.156 0 0 0 .132-.093l1.14-2.592a.486.486 0 0 1 .89 0l1.139 2.592a.156.156 0 0 0 .131.093l2.899.22a.486.486 0 0 1 .269.862L8.704 7.298a.156.156 0 0 0-.053.16l.674 2.677a.486.486 0 0 1-.714.54L6.08 9.21Z" fill="#fff"></path></svg>
                    <span >4.4</span>
                  </div>
                  <span style={{ fontSize: '14px' }}>(2.1k)</span>
                </div>
              </div>

              <div className='price'>
                <div className='price-sec'>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <p className='Price-no'>₹189</p>
                    <p className='Price-percent'> 56% Off</p></div>
                </div>
                <div style={{ color: '#757c8d', fontSize: '14px', marginTop: '5px' }}>MRP <b>₹529</b>(incl. of all taxes)</div>
              </div>


              <div className='Coupon-btn'>
                <button>
                  <svg fill="none" height="33" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M.5 8.2c0-1.9.001-3.275.142-4.323.139-1.034.406-1.675.883-2.153.478-.477 1.119-.744 2.153-.883C4.726.701 6.1.7 8 .7h16c1.9 0 3.274.001 4.323.142 1.033.14 1.674.406 2.152.883.477.478.744 1.119.883 2.153.14 1.048.142 2.422.142 4.322v16c0 1.9-.001 3.274-.142 4.323-.139 1.034-.406 1.675-.883 2.152-.478.477-1.119.744-2.152.883-1.049.141-2.423.142-4.323.142H8c-1.9 0-3.274 0-4.322-.142-1.034-.139-1.675-.405-2.153-.883-.477-.477-.744-1.119-.883-2.152C.502 27.474.5 26.099.5 24.199v-16Z" stroke="#F0F4F9"></path><path d="M25.073 14.208c-.354-.37-.72-.75-.857-1.085-.128-.306-.135-.815-.143-1.307-.014-.915-.029-1.952-.75-2.673-.72-.72-1.757-.736-2.672-.75-.493-.007-1-.015-1.307-.142-.334-.138-.716-.504-1.085-.857-.647-.622-1.382-1.326-2.36-1.326-.98 0-1.713.704-2.361 1.326-.37.353-.75.719-1.085.857-.305.127-.815.135-1.307.142-.915.014-1.952.03-2.673.75-.72.721-.73 1.758-.75 2.673-.007.492-.015 1-.142 1.307-.138.334-.504.715-.857 1.085-.622.647-1.326 1.382-1.326 2.36 0 .98.705 1.713 1.326 2.361.353.37.72.75.857 1.085.127.306.135.814.142 1.306.014.915.03 1.952.75 2.673.721.721 1.758.736 2.673.75.492.008 1 .015 1.307.143.334.138.715.503 1.085.857.647.621 1.382 1.325 2.36 1.325.98 0 1.713-.704 2.361-1.325.37-.354.75-.72 1.085-.857.306-.128.814-.135 1.307-.143.915-.014 1.951-.029 2.672-.75.721-.72.736-1.758.75-2.672.008-.493.015-1 .143-1.307.138-.334.503-.716.857-1.085.621-.648 1.325-1.382 1.325-2.36 0-.98-.704-1.713-1.325-2.361ZM23.99 17.89c-.45.469-.914.954-1.16 1.549-.237.572-.247 1.225-.257 1.858-.009.656-.02 1.344-.31 1.634-.292.29-.975.302-1.635.311-.633.01-1.286.02-1.858.256-.595.247-1.08.712-1.549 1.16-.468.45-.948.91-1.323.91s-.857-.462-1.322-.91c-.465-.446-.954-.913-1.55-1.16-.571-.236-1.224-.246-1.857-.256-.657-.009-1.344-.02-1.634-.31-.29-.293-.302-.975-.312-1.635-.009-.633-.02-1.286-.256-1.858-.246-.595-.711-1.08-1.16-1.549-.45-.469-.909-.948-.909-1.323s.462-.857.909-1.323c.447-.465.914-.953 1.16-1.548.237-.572.247-1.225.256-1.858.01-.657.02-1.344.312-1.634.291-.291.974-.302 1.634-.312.633-.009 1.286-.02 1.858-.256.595-.246 1.08-.711 1.549-1.16.468-.45.947-.909 1.322-.909.375 0 .858.462 1.323.909.465.447.954.914 1.549 1.16.572.237 1.225.247 1.858.256.656.01 1.344.02 1.634.312.29.291.302.974.311 1.634.01.633.02 1.286.256 1.858.247.595.712 1.08 1.161 1.549.45.468.908.947.908 1.322 0 .375-.46.857-.908 1.323Zm-8.842-4.323a2.25 2.25 0 1 0-4.499 0 2.25 2.25 0 0 0 4.5 0Zm-3 0a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0Zm6.75 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm0 3a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Zm1.281-6.969-7.5 7.5a.751.751 0 0 1-1.061-1.061l7.5-7.5a.751.751 0 0 1 1.061 1.061Z" fill="#5A6477"></path></svg>

                  <div className='offers'>
                    <p style={{ color: '#263045', margin: '0' }}>Get at <b>₹89 </b> with coupon offers</p>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'rgb(239, 67, 114)', margin: '0', fontSize: '12px' }}>View all offers</p>
                  </div>
                  <span style={{ position: 'absolute', right: '0.5rem' }}><MoreArrow /></span>
                </button>
              </div>
            </div>

          </div>


          <div style={{ marginTop: '1.25rem' }}>
            <div className='Coupon-And-Offers'>
              <div className='diff-title'>
                <h3>Coupon & Offers</h3>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#e5e7eb', marginTop: '5px' }}></div>
              </div>
              <div className='Coupon-button'>
                <button>
                  <div>
                    {couponIcon}
                  </div>
                  <p style={{ fontSize: '14px', color: '#262a33', fontWeight: '450', textAign: 'left', margin: '0' }}>₹100 FREE CASH on Zepto Cafe Items!</p>
                  <span style={{ display: 'block', verticalAlign: 'middle' }}><MoreArrow /></span>
                </button>

                <button>
                  <div className='img-contain'>
                    <img src='https://cdn.zeptonow.com/production/tr:w-64,ar-1968-1968,pr-true,f-auto,q-80/inventory/banner/e8ba8f4b-38cf-4100-9fa0-6c3e4eccf7a8.png'
                      alt='coupon image' />
                  </div>
                  <p style={{ fontSize: '14px', color: '#262a33', fontWeight: '450', textAign: 'left', margin: '0' }}>Get assured rewards with CRED</p>
                  <span style={{ display: 'block', verticalAlign: 'middle' }}><MoreArrow /></span>
                </button>

                <button>
                  <div className='img-contain'>
                    <img src='https://cdn.zeptonow.com/production/tr:w-64,ar-842-595,pr-true,f-auto,q-80/inventory/banner/c363f9b5-c88e-44a6-91f8-9aba7c338e48.png'
                      alt='coupon image' />
                  </div>
                  <p style={{ fontSize: '14px', color: '#262a33', fontWeight: '450', textAign: 'left', margin: '0' }}>Get flat ₹25 discount with BHIM App</p>
                  <span style={{ display: 'block', verticalAlign: 'middle' }}><MoreArrow /></span>
                </button>

                <button>
                  <div className='img-contain'>
                    <img src='https://cdn.zeptonow.com/production/tr:w-64,ar-400-400,pr-true,f-auto,q-80/app/bank-icons/v2/73bb8e2e-7204-4aed-bee0-842a3e0105ef.png'
                      alt='coupon image' />
                  </div>
                  <p style={{ fontSize: '14px', color: '#262a33', fontWeight: '450', textAign: 'left', margin: '0' }}>Get up to ₹25 cashback using Amazon Pay Balance</p>
                  <span style={{ display: 'block', verticalAlign: 'middle' }}><MoreArrow /></span>
                </button>

                <button>
                  <div className='img-contain'>
                    <img src='https://cdn.zeptonow.com/production/tr:w-64,ar-1000-1000,pr-true,f-auto,q-80/app/bank-icons/v2/a1688418-4528-491c-9636-10ac04ec15f5.png'
                      alt='coupon image' />
                  </div>
                  <p style={{ fontSize: '14px', color: '#262a33', fontWeight: '450', textAign: 'left', margin: '0' }}>Up to ₹100 instant cashback using MobiKwik wallet at Zepto</p>
                  <span style={{ display: 'block', verticalAlign: 'middle' }}><MoreArrow /></span>
                </button>

              <button className='ViewAll' onClick={() => setShowCoupons(true)}>
        <span>View all coupons</span>
      </button>

      {showCoupons && <CouponsPanel onClose={() => setShowCoupons(false)} />}
              </div>


            </div>
          </div>

          <div>
            <div className='seperation'></div>

            <div className='option'>
              <div>

                <div className='returnAndexchange'>
                  <p>No Return or Exchange</p>
                </div>
              </div>
              <div >
                <div className='returnAndexchange' >
                  <p>Fast Delivery</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div>
          <div style={{ marginTop: '1.5rem' }}>
            <div>
              <div className='Highlights'>
                <h3>Highlights</h3>
                <div style={{ marginTop: '1.25rem' }}>

                  <div style={{ gap: '1rem', flexDirection: 'column', display: 'flex', }}>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Brand</h3>
                      <p className='right'>Zepto Cafe</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Dietary Preference</h3>
                      <p className='right'>Veg</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Allergen Information</h3>
                      <p className='right'>Contains: Milk</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Protein</h3>
                      <p className='right'>2.5 g</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Disclaimer</h3>
                      <p className='right'>All nutritional information displayed is as per 100g/ml serve size. The beverage has been put into a larger cup to avoid spillage. Efforts are made to ensure accuracy, but product packaging may have additional or updated details. Please do not rely solely on the information provided and refer to the packaging for complete details</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Serving Temperature</h3>
                      <p className='right'>Served Cold</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Key Features</h3>
                      <p className='right'>Our bestseller Strong brewed coffee meets velvety condensed milk over ice refreshing rich and just the right kind of pickmeup</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Serving Size</h3>
                      <p className='right'>450 g</p>
                    </div>


                  </div>
                  <div>
                  </div>
                </div>

              </div>
            </div>




          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <div>
              <div className='Highlights'>
                <h3>Information</h3>
                <div style={{ marginTop: '1.25rem' }}>

                  <div style={{ gap: '1rem', flexDirection: 'column', display: 'flex', }}>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Nutrition Information</h3>
                      <p className='right'>Energy (kcal) 76.6, Protein (g) 2.5, Carbohydrate (g) 12.6, Sugar (g) 8.4, Sodium (mg) 28.9, Fat (g) 1.9</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Customer Care Details</h3>
                      <p className='right'>In case of any issue, contact us E-mail address: support@zeptonow.com</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Refund Policy</h3>
                      <p className='right'>Refunds/complaints window is 12 hrs</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Seller Name</h3>
                      <p className='right'>Drogheria Sellers Private Limited</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Seller Address</h3>
                      <p className='right'>Brigade IRV, 9th & 10th Floors, Nallurhalli, White Field, Bangalore, Banglore, Karnataka, India, 560066 For Support ReachOut : support+drogheria@zeptonow.com</p>
                    </div>

                    <div style={{ gap: '0.75rem', alignItems: 'flex-star', display: 'flex' }}>
                      <h3 className='left'>Seller License No.</h3>
                      <p className='right'>11522998001570</p>
                    </div>






                  </div>
                  <div>
                  </div>
                </div>

              </div>
            </div>




          </div>


        </div>
      </div>
    </>
  )
}