import React from "react";

const Subscription = () => {
  const subscribed = false; // change to true to see subscribed state

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Subscriptions</h1>
      {subscribed ? (
        <div className="bg-green-100 rounded-lg px-4 py-2 flex items-center justify-between">
          <p className="text-green-800">
            You are currently subscribed to our newsletters.
          </p>
          <button className="text-green-800 font-bold">
            Edit Newsletter Preferences
          </button>
        </div>
      ) : (
        <div className="bg-gray-100 rounded-lg px-4 py-2">
          <p className="text-gray-800 mb-2">
            You are currently not subscribed to any of our newsletters.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition duration-200">
            Subscribe Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Subscription;
