import React, { useState } from 'react';

const LoginForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Phone:', phone);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src="/images/zepto.png" alt="Zepto" />
        <p>Groceries delivered in 10 minutes</p>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            placeholder="+91 Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Continue</button>
          <p className="terms">
            By continuing, you agree to our <br />
            <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>

      <div className="login-right">
        <img
          src="https://cdn.zeptonow.com/web-static-assets-prod/artifacts/12.67.1/tr:w-100,ar-100-100,pr-true,f-auto,q-80//images/get-the-app/get-the-app-phone.png"
          alt="Zepto app"
        />
        <p  style={{ color: '#4C1577' }}>Order faster & easier every time</p>
        <p style={{color:'grey'}}>with the Zepto App</p>
        <div className="app-links">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/29/Available_on_the_App_Store_%28black%29_PNG.png"
            alt="App Store"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;