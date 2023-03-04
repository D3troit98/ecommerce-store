import React from "react";

const DashBoardDetails = ({ handleLinkClick, activeLink }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Account Overview header */}
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-6">
        Account Overview
      </h2>

      {/* Account details and Address book */}
      <div className="flex flex-wrap -mx-4 mb-8">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Account details
            </h3>
            <div className="text-gray-600 mb-2">Name: John Doe</div>
            <div className="text-gray-600 mb-4">Email: john@example.com</div>
            <div className="text-gray-600">Detroit Store Credit:</div>
            <div className="text-gray-600">Dummy text</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Address book
            </h3>
            <div className="text-gray-600 mb-2">
              Your default shipping address:
            </div>
            <div className="text-gray-600 mb-4">Dummy address</div>
          </div>
        </div>
      </div>

      {/* Detroit Store Credit and Newsletter Preferences */}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Detroit Store Credit
            </h3>
            <div className="text-gray-600">Dummy text</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              NEWSLETTER PREFERENCES
            </h3>
            <div className="text-gray-600">
              You are currently not subscribed to any of our newsletters.
            </div>
            <button
              className="mt-4 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-lg"
              type="button"
              onClick={() => handleLinkClick(" Newsletter Preferences")}
            >
              Edit Newsletter Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardDetails;
