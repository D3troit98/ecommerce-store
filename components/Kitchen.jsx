import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Product from './Product';
const Kitchen = ({products}) => {
  return (
    <div className="container mx-auto p-4 lg:mt-1 mt-10">
    <Head>
    <title>Latest Kitchen Gadgets</title>
    </Head>
    <div>

    <div className="flex items-center justify-between mb-4">
      <h1 className="md:text-3xl text-2xl  font-bold">Kitchen Gadgets</h1>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <a className="text-gray-600 text-sm">Home</a>
        </Link>
        <p className='text-xs text-gray-800'>/</p>
        <Link href="/">
          <a className=" text-black  text-sm">Men</a>
        </Link>
      </div>
    </div>
    <p className="text-gray-600 text-xs md:text-sm mb-4">
    Find the latest kitchen gadgets, tools, and accessories.
    </p>
    <p className="text-gray-600 text-xs md:text-sm mb-4">
    Discover innovative and trendy kitchen products that will make your life easier.
    </p>
    <div className="flex flex-col space-y-4">
      <Link href="/">
        <a className="text-xs md:text-sm text-gray-700 hover:text-black">Kitchen Things</a>
      </Link>
      <Link href="/">
        <a className="text-xs md:text-sm text-gray-700 hover:text-black">Outdoor</a>
      </Link>
      <Link href="/">
        <a className="text-xs md:text-sm text-gray-700 hover:text-black">Collections</a>
      </Link>
    </div>
    </div>
    <div className='products-container'>
      {products?.map((product)=><Product  key={product._id} product={product}/>)}
    </div>
    {/* {loadMore && (
        <button className='load-more-button' onClick={handleLoadMore}>
          Load More
        </button>
      )} */}

  </div>
  )
}

export default Kitchen