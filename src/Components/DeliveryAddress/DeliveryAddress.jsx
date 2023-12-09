import React from 'react'
import './DeliveryAddress.css'

const DeliveryAddress = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Your Address</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Your Address" />
          <input type="text" placeholder="Your State" />
          <input type="number" placeholder="PIN CODE" />
          <input type="number" placeholder="Phone Number" />
        </div>
        <button>BOOK NOW</button>
      </div>
    </div>
  );
}

export default DeliveryAddress
