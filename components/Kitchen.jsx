import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Product from './Product';
const Kitchen = ({ products, title }) => {
  return (
    <div className="container mx-auto p-4 lg:mt-1 mt-10">
      <Head>
        <title>{title}</title>
      </Head>
      <div></div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {/* {loadMore && (
        <button className='load-more-button' onClick={handleLoadMore}>
          Load More
        </button>
      )} */}
    </div>
  );
};

export default Kitchen