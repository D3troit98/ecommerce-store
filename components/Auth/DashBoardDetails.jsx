import React from "react";
import { useStateContext } from "../../context/StateContext";
import { MdModeEdit } from "react-icons/md";
const DashBoardDetails = ({ handleLinkClick }) => {
  const {
    user,
    name,
    phoneNumber,
    setPhoneNumber,
    address,
    setAddress,
    handlePhoneNumberSave,
    handleAddressSave,
    addressSave,
    phoneNumbersave,
  } = useStateContext();
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
            <div className="text-gray-600 mb-2">Name: {name}</div>
            <div className="text-gray-600 mb-4">Email: {user.email}</div>
            <div className="text-gray-600">Detroit Store Credit:</div>
            <div className="text-gray-600">0</div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Address book
            </h3>
            {addressSave ? (
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 mb-2">
                    Your default shipping address:
                  </p>

                  <button
                    className="text-gray-600 hover:underline"
                    onClick={() => setAddressSave(false)}
                  >
                    <MdModeEdit />
                  </button>
                </div>
                <div className="text-gray-600 mb-4">{address}</div>
              </div>
            ) : (
              <div>
                <div className="text-gray-600 mb-2">
                  Enter your default shipping address:
                </div>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="mb-2 shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  className="bg-[#f02d34] hover:bg-red-500 text-white font-medium py-2 px-4 rounded-r-md"
                  onClick={() => handleAddressSave()}
                >
                  Save
                </button>
              </div>
            )}
            {phoneNumbersave ? (
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-gray-600 mb-2">Your Phone Number:</p>

                  <button
                    className="text-gray-600 hover:underline"
                    onClick={() => handlePhoneNumberSave()}
                  >
                    <MdModeEdit />
                  </button>
                </div>
                <div className="text-gray-600 mb-4">{phoneNumber}</div>
              </div>
            ) : (
              <div>
                <div className="text-gray-600 mb-2">
                  Enter your Phone Number:
                </div>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Phone Number"
                  className="mb-2 shadow appearance-none border rounded w-10/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <button
                  className="bg-[#f02d34] hover:bg-red-500 text-white font-medium py-2 px-4 rounded-r-md"
                  onClick={() => setPhoneNumberSave(true)}
                >
                  Save
                </button>
              </div>
            )}
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
            <div className="text-gray-600">0</div>
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
              className="mt-4 bg-[#f02d34] hover:bg-red-500 text-white font-medium py-2 px-4 rounded-lg"
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
