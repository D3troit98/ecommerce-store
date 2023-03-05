import { useState } from "react";

const AddAddressForm = ({ onSave }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name, address, city, state, zip });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="name"
            className="block font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="address"
            className="block font-medium text-gray-700 mb-2"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="city"
            className="block font-medium text-gray-700 mb-2"
          >
            City
          </label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label
            htmlFor="state"
            className="block font-medium text-gray-700 mb-2"
          >
            State
          </label>
          <input
            type="text"
            name="state"
            value={state}
            onChange={(event) => setState(event.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="zip" className="block font-medium text-gray-700 mb-2">
            Zip Code
          </label>
          <input
            type="text"
            name="zip"
            value={zip}
            onChange={(event) => setZip(event.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            required
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4"
        >
          Add Address
        </button>
      </div>
    </form>
  );
};

export default AddAddressForm;
