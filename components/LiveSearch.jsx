import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { client } from "../lib/client";
import MissingLoader from "./MissingLoader";
import { useRouter } from "next/router";
import { useStateContext } from "../context/StateContext";
const LiveSearch = () => {
  const {
    searchQuery,
    setSearchQuery,
    products,
    setProducts,
    handleDropdownToggle,
  } = useStateContext();
  const router = useRouter();
  useEffect(async () => {
    const query = '*[_type == "product"]';
    const productData = await client.fetch(query);
    setProducts(productData);
  }, []);
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products?.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleProductClick = (searchQuery) => {
    router.push({
      pathname: "/search",
      query: { q: searchQuery },
    });
    handleDropdownToggle();
  };

  return (
    <div className="flex-1 mx-4">
      <div className="relative border-gray-400 border-2 rounded-md">
        <div className="relative">
          <input
            type="search"
            placeholder="Search your products..."
            className="w-full py-2 pl-4 pr-10 rounded-full outline-none border-none focus:ring-0"
            onChange={handleSearch}
          />
          <AiOutlineSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-500" />

          {/* search Result container */}
          {searchQuery && (
            <div className="absolute mt-1 w-full p-2 bg-white showdow-lg rounded-bl rounded-br max-h-40 overflow-y-auto">
              {filteredProducts?.map((product) => (
                <div
                  key={product._id}
                  className="cursor-pointer hover:bg-black hover:bg-opacity-10 p-2"
                  onClick={() => handleProductClick(product.name)}
                  //I want0. to pass the search query to the router
                >
                  {product.name}
                </div>
              ))}
              {!filteredProducts && <MissingLoader />}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveSearch;
