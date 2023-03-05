import React from "react";

const GiftCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-6">
        Gift Cards
      </h2>
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="w-full md:w-1/2 md:mr-4 mb-4 md:mb-0">
          <h2 className="text-lg font-medium mb-2">Your Gift Card Balance:</h2>
          <div className="bg-gray-100 rounded-lg p-4">
            <p className="text-xl font-bold">₦0.00</p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-medium mb-2">Send a Gift Card:</h2>
          <form>
            <div className="flex flex-col mb-4">
              <label htmlFor="recipient_email" className="mb-2 font-medium">
                Recipient's Email:
              </label>
              <input
                type="email"
                id="recipient_email"
                name="recipient_email"
                placeholder="email@gmail.com"
                className="rounded-lg border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="amount" className="mb-2 font-medium">
                Amount:
              </label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="500"
                className="rounded-lg border-gray-400 py-2 px-3 focus:outline-none  focus:border-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#f02d34] text-white py-2 px-4 rounded-lg hover:bg-red-500"
            >
              Send Gift Card
            </button>
          </form>
        </div>
      </div>
      <div className="bg-gray-100 rounded-lg p-4">
        <h2 className="text-lg font-medium mb-2">Redeem a Gift Card:</h2>
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="gift_card_code" className="mb-2 font-medium">
              Gift Card Code:
            </label>
            <input
              type="text"
              id="gift_card_code"
              name="gift_card_code"
              className="rounded-lg border-gray-400 py-2 px-3 focus:outline-none focus:border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="bg-[#f02d34] text-white py-2 px-4 rounded-lg hover:bg-red-500"
          >
            Redeem Gift Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default GiftCards;
