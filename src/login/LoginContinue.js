import React, { useState } from 'react';
import OTPInput from './OTPInput'; 
import './LoginContinue.css'; // Import your CSS file

const LoginContinue = () => {
  const [otp, setOtp] = useState('');
  // const [phone, setPhone] = useState('');
  return (
    <div className="login-container">
      <div className="login-left">
        <i></i>
        <p className='verify'>OTP Verification</p>
        <p className='sended'>OTP has been sent to +91{}</p>
        {/* <LoginForm  value={phone} onChange={setPhone}/> */}
        <form >
        <OTPInput separator={<span>-</span>} value={otp} onChange={setOtp} length={5} />
      
        </form>
      </div>
      <div className="login-right">
       
       
        <img src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.67.1/tr:w-100,ar-100-100,pr-true,f-auto,q-80//images/get-the-app/get-the-app-phone.png" alt="Zepto app" />
        <h3 className='upper'>Order faster & easier everytime</h3>
        <p className='lower'>with the Zepto App</p>
        <div class="app-links">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />

       </div>
      </div>
    </div>
  );
};


export default LoginContinue;