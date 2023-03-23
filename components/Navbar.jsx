import React, { useState } from "react";


import {
  Cart,
  Cartegories,
  MobileNavbar,
  NormalNavbar,
  ScrollingNavbar,
} from "./";
import { useStateContext } from "../context/StateContext";
const Navbar = ({ visible, scrollTop }) => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    handleDropdownToggle,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useStateContext();
  return (
    <div>
      <div className="normal-navbar ">
        <NormalNavbar visible={visible} scrollTop={scrollTop} />
        <MobileNavbar visible={visible} scrollTop={scrollTop} />
        <ScrollingNavbar visible={visible} scrollTop={scrollTop} />
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
