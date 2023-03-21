import React, { useState, useMemo } from "react";
import { Product, DiscountProduct, LoadingScreen } from "./";
const EcommerceHeader = ({ weeklyData, products }) => {
  const [activeLink, setActiveLink] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const weeklyDeals = useMemo(() => weeklyData, [weeklyData]);

  const trendingProducts = useMemo(
    () => products.filter((product) => product.trending === true),
    [products]
  );

  const productList = activeLink === 0 ? weeklyDeals : trendingProducts;

  const handleClick = (index) => {
    setIsLoading(true);
    setActiveLink(index);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="EcommerceHeadercontainer">
        <p
          className={`EcommerceHeaderlink ${activeLink === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
        >
          Weekly Deals
        </p>
        <p
          className={`EcommerceHeaderlink ${activeLink === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          Trending
        </p>
      </div>

      <div className="products-container">
        {/* Display the productList, or show the loader if isLoading is true */}
        {isLoading && (
          <div className="loader">
            <LoadingScreen />
          </div>
        )}
        {!isLoading && activeLink === 0 ? (
          productList?.map((product) => (
            <DiscountProduct key={product._id} discountData={product} />
          ))
        ) : (
          <></>
        )}

        {!isLoading && activeLink === 1 ? (
          productList?.map((product) => (
            <Product key={product._id} product={product} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default EcommerceHeader;
