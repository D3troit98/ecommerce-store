import React from "react";

const NewsletterPreferences = () => {
  const subscribedNewsletters = []; // change to add subscribed newsletters data to see how it looks

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Newsletter Preferences</h1>
      {subscribedNewsletters.length > 0 ? (
        <div className="bg-gray-100 rounded-lg px-4 py-2 mb-4">
          <p className="text-gray-800 font-bold mb-2">
            You are currently subscribed to:
          </p>
          <ul className="list-disc list-inside">
            {subscribedNewsletters.map((newsletter) => (
              <li key={newsletter.id}>{newsletter.name}</li>
            ))}
          </ul>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600 transition duration-200">
            Edit Newsletter Preferences
          </button>
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
            You are currently not subscribed to any of our newsletters.
          </p>
          <p className="text-sm">
            Click the button below to subscribe to our newsletters.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600 transition duration-200">
            Edit Newsletter Preferences
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsletterPreferences;
