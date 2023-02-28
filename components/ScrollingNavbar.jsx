import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineShopping,
  AiOutlineSearch,
  AiOutlineMenu,
  handleDropdownToggle,
} from "react-icons/ai";

import { Cart, Cartegories } from "./";
import { useStateContext } from "../context/StateContext";

const ScrollingNavbar = ({ visible, scrollTop }) => {
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
      className={`${
        scrollTop <= 250 ? "hidden" : "lg:block fixed top-0 left-0 w-full "
      }transition duration-500  ease-in-out  bg-white w-full mt-0   hidden  ${
        visible
          ? "opacity-100 translate-y-0 absolute z-[9999]"
          : "opacity-0 translate-y-full"
      }`}
    >
      <div className="flex flex-col w-full  ">
        <div className="flex items-center justify-between border-b border-gray-300 py-4 px-12">
          <h1 className="logo text-2xl font-bold hover:scale-110 transition-all duration-300">
            <Link href={"/"}>Detroit Store</Link>
          </h1>

          <div className="flex justify-between items-center ">
            <div className="flex gap-8  items-center links">
              <Link href={"/"}>
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  KITCHEN GADGETS
                </h3>
              </Link>
              <Link href={"/"} className="font-medium hover:text-gray-900">
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  HOME STUFFS
                </h3>
              </Link>
              <Link href={"/"} className="font-medium hover:text-gray-900">
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  GIFT IDEAS
                </h3>
              </Link>
              <Link href={"/"} className="font-medium hover:text-gray-900">
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  WOMEN
                </h3>
              </Link>
              <Link href={"/"} className="font-medium hover:text-gray-900">
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  SALES
                </h3>
              </Link>
              <Link href={"/"} className="font-medium hover:text-gray-900">
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  TRACK YOUR ORDER
                </h3>
              </Link>
            </div>
          </div>
          <div className="gap flex justify-center items-center ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingNavbar;
