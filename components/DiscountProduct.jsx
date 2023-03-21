import React from "react";
import Link from "next/link";
import LoadingScreen from "./LoadingScreen";
import { urlFor } from "../lib/client";

const DiscountProduct = ({ discountData }) => {
  const { discount, endDate, startDate, product } = discountData;
  const { image, name, slug, price } = product;

  if (!image || !name || !slug || !price) {
    return <></>;
  }

  const isDiscountValid =
    new Date(startDate) <= new Date() && new Date(endDate) >= new Date();

  return (
    <div className="">
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          {isDiscountValid && (
            <div className="discount-badge">
              <span>-{discount}%</span>
            </div>
          )}
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">
            {isDiscountValid && (
              <span className="product-price--discounted">
                ₦{price - price * (discount / 100)}
              </span>
            )}
            <span
              className={
                isDiscountValid
                  ? "product-price--original line-through"
                  : "product-price--original"
              }
            >
              ₦{price}
            </span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default DiscountProduct;
