import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import {BsArrowUpLeftCircleFill} from 'react-icons/bs'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="footer-container">
      {/* <div className='footer-links'>
        <div className="column">
        <h3>Detroit Car Store</h3>
        <p>
        Discover unique car parts and accessories at Detroit Car Store. Upgrade your car's performance, style, and comfort with our hand-picked collection from around the world. Shop with us today!
        </p>
        <div style={{display:'flex',gap:"5px",alignItems:"center",marginTop:"10px"}}>
        <BsArrowUpLeftCircleFill className='small-screen'/> 
        <p>
          4610 N Clark Ave #1039 Chicago, IL, USA
        </p>
        </div>
      
      </div>

      <div className="column">
        <h3>INFORMATION</h3>
        <ul>
          <li>
          <Link href={"/"}>About us</Link>
            </li>
          <li>
          <Link href={"/"}>Terms Of Service</Link>
            </li>
          <li>
          <Link href={"/"}>Shipping Policy</Link>
            </li>
          <li>
          <Link href={"/"}>Return and Refund Policy</Link>
            </li>
          <li>
          <Link href={"/"}>Privacy Policy</Link>
            </li>
          <li>
          <Link href={"/"}>Copyright Policy and DMCA Notice</Link>
            </li>
        </ul>
      </div>

      <div className="column">
        <h3>MY ACCOUNT</h3>
        <ul>
          <li>
          <Link href={"/"}> Contact us</Link>
           </li>
          <li>
          <Link href={"/"}>Return and Refund Policy</Link>
            </li>
          <li>
          <Link href={"/"}> Order History</Link>
           </li>
        </ul>
      </div>

      <div className="column">
        <h3>MAKE MONEY</h3>
        <ul>
          <li>
          <Link href={"/"}> Become an Affiliate</Link>
           </li>
          <li>
          <Link href={"/"}> Sell on Detroit Car Shop</Link>
            </li>
          <li>
          <Link href={"/"}> Advertise on Detroit Car Shop</Link>
            </li>
          <li>
          <Link href={"/"}>  Wholesale</Link>
           </li>
        </ul>
      </div>
        </div> */}

      <div className="footer-social-reserve">
        <div className="social-icons">
          <AiFillInstagram />
          <AiOutlineTwitter />
        </div>

        <p className="rights">2022 Detroit Store All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
