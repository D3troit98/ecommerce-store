import React from "react";

const Sidebar = ({ handleLinkClick, activeLink }) => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-900 text-white w-64 flex-none h-screen flex flex-col">
        <div className="p-4 text-xl font-bold">MY ACCOUNT</div>
        <ul className="flex-1 overflow-y-auto">
          <li
            className={`px-4 py-2 cursor-pointer
              ${
                activeLink === "Dashboard" ? "bg-gray-800" : "hover:bg-gray-800"
              }`}
            onClick={() => handleLinkClick("Dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Inbox" ? "bg-gray-800" : "hover:bg-gray-800"
                }`}
            onClick={() => handleLinkClick("Inbox")}
          >
            Inbox
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Orders" ? "bg-gray-800" : "hover:bg-gray-800"
                }`}
            onClick={() => handleLinkClick("Orders")}
          >
            Orders
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Subscriptions"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
            onClick={() => handleLinkClick("Subscriptions")}
          >
            Subscriptions
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Request Quotes"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
            onClick={() => handleLinkClick("Request Quotes")}
          >
            Request Quotes
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Newsletter Preferences"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
            onClick={() => handleLinkClick("Newsletter Preferences")}
          >
            Newsletter Preferences
          </li>
          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Gift Cards"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
            onClick={() => handleLinkClick("Gift Cards")}
          >
            Gift Cards
          </li>

          <li
            className={`px-4 py-2 cursor-pointer
                ${
                  activeLink === "Addresses"
                    ? "bg-gray-800"
                    : "hover:bg-gray-800"
                }`}
            onClick={() => handleLinkClick("Addresses")}
          >
            Addresses
          </li>
          <li
            className="px-4 py-2 cursor-pointer  hover:bg-gray-800"
            onClick={() => handleLinkClick("Logout")}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
