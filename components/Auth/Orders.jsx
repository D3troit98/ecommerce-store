import React from "react";

const Orders = () => {
  const orders = []; // Replace with an array of order objects

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Orders header */}
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-6">
        Orders
      </h2>

      {orders.length > 0 ? (
        // Show orders if there are any
        <div className="flex flex-wrap -mx-4">
          {/* Display each order in a column */}
          {orders.map((order) => (
            <div key={order.id} className="w-full md:w-1/2 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-full mb-4"
                />
                <div className="text-gray-900 font-medium mb-2">
                  {order.name}
                </div>
                <div className="text-gray-600 mb-2">Order ID: {order.id}</div>
                <div className="text-gray-600 mb-4">{order.date}</div>
                <button className="bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800">
                  SEE DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show empty state if there are no orders
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 h-16 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            You have placed no orders yet!
          </h3>
          <p className="text-gray-600">
            All your orders will be saved here for you to access their state
            anytime.
          </p>
        </div>
      )}
    </div>
  );
};

export default Orders;
