import React from "react";

const AddressCard = ({ address, handleDelete, handleEdit }) => {
  const { id, name, street, city, state, zip } = address;

  return (
    <div className="border p-4 mb-4">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex items-center">
          <button
            className="text-blue-500 hover:text-blue-700 mr-2"
            onClick={() => handleEdit(id)}
          >
            Edit
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <p>{street}</p>
      <p>
        {city}, {state} {zip}
      </p>
    </div>
  );
};

export default AddressCard;
