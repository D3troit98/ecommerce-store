import React, { useState } from "react";
import Link from "next/link";
import { useStateContext } from "../context/StateContext";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
import { Cart, Cartegories } from "./";
const MobileNavbar = ({ visible, scrollTop }) => {
  const {
    showCart,
    setShowCart,
    totalQuantities,
    handleDropdownToggle,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useStateContext();

  return (
    <div
      className={`flex bg-white  items-center justify-between shadow-md py-4 px-4 lg:hidden transition duration-500  ease-in-out z-50 w-full ${
        visible
          ? "block opacity-100 translate-y-0 absolute z-[9999]  top-0 left-0 w-full"
          : "opacity-0 translate-y-full"
      } `}
    >
      <div className="menu" onClick={handleDropdownToggle}>
        <AiOutlineMenu className="text-sm text-gray-500 relative border-none bg-transparent" />
      </div>
      <p className="logo">
        <Link href={"/"}>Detroit Store</Link>
      </p>

      <div className="flex justify-center items-center gap">
        <AiOutlineSearch />
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(!showCart)}
        >
          <AiOutlineShopping />
          <span className="absolute text-[#eee] bg-[#f02d34] text-xs w-4 h-4 rounded-lg text-center font-semibold top-1 right-[-6px]">
            {totalQuantities}
          </span>
        </button>
        {showCart && <Cart />}
        {isDropdownOpen && !showCart ? <Cartegories /> : <></>}
        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default MobileNavbar;
