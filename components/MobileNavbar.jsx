import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";

const MobileNavbar = ({ showCart, totalQuantities, handleMenuClick }) => {
  return (
    <div className="mobile-navbar">
      <div className="menu" onClick={handleMenuClick}>
        <AiOutlineMenu className="menu-icon" />
        <p className="logo">Menu</p>
      </div>
      <p className="logo">
        <Link href={"/"}>Detroit Car Store</Link>
      </p>
      <div className="gap">
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(!showCart)}
        >
          <AiOutlineShopping />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNavbar;
