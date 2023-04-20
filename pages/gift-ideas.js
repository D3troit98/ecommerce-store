import Kitchen from "../components/Kitchen";
import { useState, useMemo } from "react";
import { client, urlFor } from "../lib/client";
import Link from "next/link";
import Head from "next/head";
export default function GiftIdeas({ products }) {
  const [category, setCategory] = useState("");

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  const filteredProducts = useMemo(() => {
    return category
      ? products.filter((product) => product.categories.includes(category))
      : products;
  }, [products, category]);

  return (
    <>
      <Head>
        <title>Gift Ideas | My Ecommerce Store</title>
      </Head>
      <div className="container mx-auto p-4 lg:mt-1 mt-10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="md:text-3xl text-2xl font-bold">Gift Ideas</h1>
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="text-gray-600 text-sm">Home</a>
            </Link>
            <p className="text-xs text-gray-800">/</p>
            <a className="text-black text-sm">Gift Ideas</a>
          </div>
        </div>
        <p className="text-gray-600 text-xs md:text-sm mb-4">
          Browse our selection of gift ideas for any occasion.
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-0">
            Filter by category:
          </p>
          <div className="flex flex-wrap">
            <button
              onClick={() => handleCategoryClick("")}
              className={`mr-2 mb-2 md:mb-0 rounded-full border border-gray-500 py-1 px-2 ${
                !category ? "bg-[#f02d34] text-white" : "bg-white text-gray-800"
              }`}
            >
              All
            </button>
            <button
              onClick={() => handleCategoryClick("kitchen")}
              className={`mr-2 mb-2 md:mb-0 rounded-full border border-gray-500 py-1 px-2 ${
                category === "kitchen"
                  ? "bg-[#f02d34] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Kitchen Accessories
            </button>
            <button
              onClick={() => handleCategoryClick("car")}
              className={`mr-2 mb-2 md:mb-0 rounded-full border border-gray-500 py-1 px-2 ${
                category === "car"
                  ? "bg-[#f02d34] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Car Accessories
            </button>
            <button
              onClick={() => handleCategoryClick("home")}
              className={`mr-2 mb-2 md:mb-0 rounded-full border border-gray-500 py-1 px-2 ${
                category === "home"
                  ? "bg-[#f02d34] text-white"
                  : "bg-white text-gray-800"
              }`}
            >
              Home Accessories
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.slug.current}`}>
              <div
                key={product._id}
                className="product-card border border-gray-200 rounded-lg overflow-hidden"
              >
                <img
                  src={urlFor(product.image && product.image[0])}
                  alt={product.name}
                  className="product-image w-full h-60 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-700 text-base">{product.details}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-900 font-bold text-xl">
                      ₦{product.price}
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  return {
    props: { products },
  };
};
