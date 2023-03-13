import React, { useState } from "react";
import { BiDownArrowAlt } from "react-icons/bi";

const Sidebar = ({ handleLinkClick, activeLink }) => {
  const [showItems, setShowItems] = useState(false);

  const handleHover = () => {
    setShowItems(true);
    console.log("it should show");
  };

  const handleLeave = () => {
    setShowItems(false);
    console.log("it should not show");
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-[#dcdcdc] text-white w-64 flex-none h-auto md:flex flex-col hidden ">
        <div className="p-4 text-xl font-bold">MY ACCOUNT</div>
        <ul className="flex-1 overflow-y-auto">
          <li
            className={`px-4 py-2 cursor-pointer
              ${
                activeLink === "Dashboard"
                  ? "bg-[#f02d34]"
                  : "hover:bg-[#f02d34]"
              }`}
            onClick={() => handleLinkClick("Dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Inbox" ? "bg-[#f02d34]" : "hover:bg-[#f02d34]"
                }`}
            onClick={() => handleLinkClick("Inbox")}
          >
            Inbox
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Orders"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
            onClick={() => handleLinkClick("Orders")}
          >
            Orders
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Subscriptions"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
            onClick={() => handleLinkClick("Subscriptions")}
          >
            Subscriptions
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Request Quotes"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
            onClick={() => handleLinkClick("Request Quotes")}
          >
            Request Quotes
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Newsletter Preferences"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
            onClick={() => handleLinkClick("Newsletter Preferences")}
          >
            Newsletter Preferences
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Gift Cards"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
            onClick={() => handleLinkClick("Gift Cards")}
          >
            Gift Cards
          </li>

          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Addresses"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
            onClick={() => handleLinkClick("Addresses")}
          >
            Addresses
          </li>
          <li
            className="px-4 py-2 cursor-pointer  hover:bg-[#f02d34]"
            onClick={() => handleLinkClick("Logout")}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* small screeen */}

      <div
        className="bg-[#dcdcdc] text-white w-64 flex-none h-auto flex flex-col md:hidden  "
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className="p-4 flex justify-center items-center gap-1 text-xl font-bold">
          <p>MY ACCOUNT</p>
          <BiDownArrowAlt />
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showItems ? "h-auto py-4" : "h-0 py-0"
          }`}
        >
          <ul className="flex-1 overflow-y-auto">
            <li
              className={`px-4 py-2 cursor-pointer
              ${
                activeLink === "Dashboard"
                  ? "bg-[#f02d34]"
                  : "hover:bg-[#f02d34]"
              }`}
              onClick={() => handleLinkClick("Dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Inbox" ? "bg-[#f02d34]" : "hover:bg-[#f02d34]"
                }`}
              onClick={() => handleLinkClick("Inbox")}
            >
              Inbox
            </li>
            <li
              className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Orders"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
              onClick={() => handleLinkClick("Orders")}
            >
              Orders
            </li>
            <li
              className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Subscriptions"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
              onClick={() => handleLinkClick("Subscriptions")}
            >
              Subscriptions
            </li>
            <li
              className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Request Quotes"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
              onClick={() => handleLinkClick("Request Quotes")}
            >
              Request Quotes
            </li>
            <li
              className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Newsletter Preferences"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
              onClick={() => handleLinkClick("Newsletter Preferences")}
            >
              Newsletter Preferences
            </li>
            <li
              className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Gift Cards"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
              onClick={() => handleLinkClick("Gift Cards")}
            >
              Gift Cards
            </li>

            <li
              className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Addresses"
                    ? "bg-[#f02d34]"
                    : "hover:bg-[#f02d34]"
                }`}
              onClick={() => handleLinkClick("Addresses")}
            >
              Addresses
            </li>
            <li
              className="px-4 py-2 cursor-pointer  hover:bg-[#f02d34]"
              onClick={() => handleLinkClick("Logout")}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
