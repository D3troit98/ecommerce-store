import React, { useRef } from "react";
import Link from "next/link";
import {  AiOutlineLeft ,AiOutlineSearch} from 'react-icons/ai'
import { useStateContext } from "../context/StateContext";
const Cartegories = () => {
  const categoryRef = useRef();
  const {handleTabChange,activeTab,  setIsDropdownOpen} = useStateContext()
  return (
    <div className="cartegory-wrapper" ref={categoryRef}>
      <div className="cartegory-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setIsDropdownOpen(false)}
        >
          <AiOutlineLeft />
        </button>
        <div className="category-search-container">
          <input
            type="search"
            placeholder="Search for products"
            className="category-input"
          />
          <AiOutlineSearch className="category-icon" />
        </div>
        <div className="tab-container">
          <button
            className={`tab ${
              activeTab === "menu" ? "active animate" : "inactivr"
            }`}
            onClick={() => handleTabChange("menu")}
          >
            Menu
          </button>
          <button
            className={`tab ${
              activeTab === "categories" ? "active animate" : "inactivr"
            }`}
            onClick={() => handleTabChange("categories")}
          >
            Categories
          </button>
        </div>
        <div className="menu-items">
          {activeTab === "menu" && (
            <ul className="menu-list show">
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/sales">
                  <a>Sales</a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/track-your-order">
                  <a>Track your order</a>
                </Link>
              </li>
              <li>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <a>Contact Us</a>
                </Link>
              </li>
            </ul>
          )}
          {activeTab === "categories" && (
            <ul className="menu-list show ">
              <li>
                <Link href="/car-accessories">
                  <a>Car Accessories</a>
                </Link>
              </li>
              <li>
                <Link href="/kitchen-gadgets">Kitchen Gadgets</Link>
              </li>
              <li>
                <Link href="/-stuff">Home Stuff</Link>
              </li>
              <li>
                <Link href="/gift-ideas">Gift Ideas</Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cartegories;
