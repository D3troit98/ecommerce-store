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

const NormalNavbar = ({ visible, scrollTop }) => {

  const {
    showCart,
    setShowCart,
    totalQuantities,
    handleDropdownToggle,
    isDropdownOpen,
    setIsDropdownOpen,
  } = useStateContext();

  return (
    <>
      {scrollTop <= 200 && (
        <div
          className={` lg:block  w-full  hidden transition duration-500  ease-in-out opacity-100 translate-y-0 `}
        >
          <div className="flex flex-col w-full  ">
            <div className="flex items-center justify-between border-b border-gray-300 py-4 px-12">
              <h1 className="logo text-2xl font-bold hover:scale-110 transition-all duration-300">
                <Link href={"/"}>Detroit Store</Link>
              </h1>
              <div className="flex-1 mx-4">
                <div className="relative border-gray-400 border-2 rounded-md">
                  <input
                    type="search"
                    placeholder="Search for products"
                    className="w-full py-2 pl-4 pr-10 rounded-full outline-none border-none focus:ring-0"
                  />
                  <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />
                </div>
              </div>
              <h1 className="logo mr-1 ml-1 text-sm font-semibold hover:scale-110 transition-all duration-300">
                <Link href={"/account"}>MY ACCOUNT</Link>
              </h1>
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
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-3 px-12 border-b border-gray-300">
            <div className="flex gap-8  items-center links">
              <Link href={"/kitchen"}>
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
            <div className="flex justify-end items-center gap-8">
              <Link href={"/blog"} className="font-medium hover:text-gray-900">
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  BLOG
                </h3>
              </Link>
              <span className="border-r-2 border-gray-400 h-4"></span>
              <Link href={"/"} className="font-medium hover:text-gray-900">
                <h3 className="font-bold text-black text-sm hover:text-gray-700">
                  CONTACT US
                </h3>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NormalNavbar;
