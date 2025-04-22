import React, { useState } from 'react'

const LoginContinue = () => {
  const [otp, setOtp] = useState('');

  return (
    <div className="login-container">
      <div className="login-left">
        <i></i>
        <p>OTP Verification</p>
        <p>OTP has been sent to +91{}</p>
        <form >
        <otp separator={<span>-</span>} value={otp} onChange={setOtp} length={5} />
        <span>Entered value: {otp}</span>
        </form>
      </div>
      <div className="login-right">
       
       
        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.67.1/tr:w-100,ar-100-100,pr-true,f-auto,q-80//images/get-the-app/get-the-app-phone.png" alt="Zepto app" />
        <h3 className='upper'>Order faster & easier everytime</h3>
        <p className='lower'>with the Zepto App</p>
        <div className="app-links">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Available_on_the_App_Store_%28black%29_PNG.png" alt="App Store" />
        </div>
      </div>
    </div>
  );
};


export default LoginContinue