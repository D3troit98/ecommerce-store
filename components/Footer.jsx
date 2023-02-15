import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import {BsArrowUpLeftCircleFill} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className='footer-links'>
        <div className="column">
        <h3>Detroit Headphones</h3>
        <p>
          Mavigadget is a product discovery platform, a place where you can discover, explore and share unique hand-picked amazing products from all over the world. Connect to the coolest producers, brands, startups and inventors out there.
        </p>
        <div style={{display:'flex',gap:"5px",alignItems:"center",marginTop:"10px"}}>
        <BsArrowUpLeftCircleFill />
        <p>
          4610 N Clark Ave #1039 Chicago, IL, USA
        </p>
        </div>
      
      </div>

      <div className="column">
        <h3>INFORMATION</h3>
        <ul>
          <li>About us</li>
          <li>Terms Of Service</li>
          <li>Shipping Policy</li>
          <li>Return and Refund Policy</li>
          <li>Privacy Policy</li>
          <li>Copyright Policy and DMCA Notice</li>
        </ul>
      </div>

      <div className="column">
        <h3>MY ACCOUNT</h3>
        <ul>
          <li>Contact us</li>
          <li>Return and Refund Policy</li>
          <li>Order History</li>
        </ul>
      </div>

      <div className="column">
        <h3>MAKE MONEY</h3>
        <ul>
          <li>Become an Affiliate</li>
          <li>Sell on Mavigadget</li>
          <li>Advertise on Mavigadget</li>
          <li>Publish your Article</li>
          <li>Wholesale</li>
        </ul>
      </div>
        </div>
    
    <div className='footer-social-reserve'>
    <div className="social-icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </div>

      <p className="rights">2022 Detroit HeadPhones All rights reserved</p>
    </div>
     
    </div>
  );
};

export default Footer;
