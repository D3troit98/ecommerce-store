import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
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
