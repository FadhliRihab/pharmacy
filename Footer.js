import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import "../App.css"

const Footer = () => {
  return (
    <footer>
      <div className="contact-info">
        <h4>Contact Information</h4>
        <p>Email: contact@example.com</p>
        <p>Phone: 555-555-5555</p>
        <p>Address: 123 Example St, Example City</p>
      </div>
      <div className="social-icons">
        <h4>Follow Us</h4>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;