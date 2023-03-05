import { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import AddressCard from "./AddressCard";
import AddAddressForm from "./AddAddressForm";

const Addresses = () => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      address1: "123 Main St.",
      address2: "",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "USA",
      phone: "555-555-5555",
      isDefault: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      address1: "456 Oak St.",
      address2: "Apt. 3B",
      city: "Sometown",
      state: "NY",
      zip: "67890",
      country: "USA",
      phone: "555-555-1234",
      isDefault: false,
    },
  ]);

  const handleAddAddress = (address) => {
    setAddresses([
      ...addresses,
      {
        id: Date.now(),
        ...address,
        isDefault: addresses.length === 0 ? true : false,
      },
    ]);
    setShowForm(false);
  };

  const handleEditAddress = (id, updatedAddress) => {
    const updatedAddresses = addresses.map((address) =>
      address.id === id ? { ...address, ...updatedAddress } : address
    );
    setAddresses(updatedAddresses);
  };

  const handleDeleteAddress = (id) => {
    const filteredAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(filteredAddresses);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-lg leading-6 font-medium text-gray-900 mb-6">
        Addresses
      </h2>
      <div className="flex flex-col space-y-4">
        {addresses.map((address) => (
          <AddressCard
            key={address.id}
            address={address}
            onEdit={handleEditAddress}
            onDelete={handleDeleteAddress}
          />
        ))}
        {showForm ? (
          <AddAddressForm
            onSubmit={handleAddAddress}
            onCancel={() => setShowForm(false)}
          />
        ) : (
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            <PlusIcon className="h-6 w-6" />
            <span>Add address</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Addresses;
