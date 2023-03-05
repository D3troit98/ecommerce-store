import React from "react";

const Inbox = () => {
  const messages = []; // Replace with an array of message objects

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Inbox Messages header */}
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-6">
        Inbox Messages
      </h2>

      {messages.length > 0 ? (
        // Show messages if there are any
        <div className="flex flex-wrap -mx-4">
          {/* Display each message in a column */}
          {messages.map((message) => (
            <div key={message.id} className="w-full md:w-1/2 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-gray-600 mb-2">{message.sender}</div>
                <div className="text-gray-900 mb-2">{message.subject}</div>
                <div className="text-gray-600">{message.date}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show empty state if there are no messages
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-200 rounded-full w-32 h-32 flex items-center justify-center mb-4">
            <span className="text-gray-600 text-5xl font-bold">0</span>
          </div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
            You don't have any messages
          </h3>
          <p className="text-gray-600">
            Here you will be able to see all messages that we send you. Stay
            tuned.
          </p>
        </div>
      )}
    </div>
  );
};

export default Inbox;
