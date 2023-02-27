import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineMenu,
  handleDropdownToggle,
} from "react-icons/ai";

import { Cart, Cartegories, NormalNavbar } from "./";
import { useStateContext } from "../context/StateContext";

const Navbar = ({ visible, scrollTop }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
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
      <div className="normal-navbar">
        <NormalNavbar visible={visible} scrollTop={scrollTop} />
      </div>
      <div className="scrolldownNavbar"></div>
    </div>
  );
};

export default Navbar;
