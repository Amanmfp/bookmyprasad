import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import facebook_icon from '../Assets/facebook_icon.jpg'
import { Link } from 'react-router-dom'
 
const Footer = () => {
  return (
    <div className="footer">
      <Link style={{ textDecoration: "none" }} to="/Services">
        <div className="footer-logo">
          <img src={footer_logo} alt="" />
          <p>BookMyPrasad</p>
        </div>
      </Link>
      <ul className="footer-links">
        <a href="https://navyasoftwaresolutions.com/" target="#">
          <li>Company</li>
        </a>
        <li>
          <Link style={{ textDecoration: "none" }} to="/productpage">
            Products
          </Link>
        </li>
        <li><Link style={{ textDecoration: "none" }} to="/About">About</Link></li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/Contact">
            Help
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/Contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <a
            href="https://instagram.com/bookmyprasad?igshid=NzZlODBkYWE4Ng=="
            target="#"
          >
            <img src={instagram_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://pin.it/4nMRMF1" target="#">
            <img src={pinterest_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://www.facebook.com/people/BookMy-Prasad/pfbid02tSZc1zURY5kWMYbfSTRA9wcUucLSLUM15sSq8CTp4jNNcXcBRP1kTwhDNC8QZCA7l/?mibextid=ZbWKwL"
            target="#"
          >
            <img src={facebook_icon} alt="" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a
            href="https://api.whatsapp.com/send?phone=916207429257"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp_icon} alt="" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer
