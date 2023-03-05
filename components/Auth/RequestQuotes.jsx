import React from "react";

const RequestQuotes = () => {
  const quotes = []; // change to add quotes data to see how it looks

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-6">
        Request Quotes
      </h2>
      {quotes.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {quotes.map((quote) => (
            <div key={quote.id} className="bg-gray-100 rounded-lg px-4 py-2">
              <p className="text-gray-800 font-bold">{quote.title}</p>
              <p className="text-gray-600 mb-2">{quote.description}</p>
              <button className="bg-[#f02d34] text-white py-2 px-4 rounded-full hover:bg-red-500 transition duration-200">
                View Quote
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mb-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 0a8 8 0 100 16 8 8 0 000-16zM6 9a1 1 0 100 2h8a1 1 0 100-2H6zm0 3a1 1 0 100 2h5a1 1 0 100-2H6z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-lg font-bold mb-2">
            You haven't requested any quotes yet!
          </p>
          <p className="text-sm">Click the button below to get started.</p>
          <button className="bg-[#f02d34] text-white py-2 px-4 rounded-full mt-4 hover:bg-red-500 transition duration-200">
            Request a Quote
          </button>
        </div>
      )}
    </div>
  );
};

export default RequestQuotes;
