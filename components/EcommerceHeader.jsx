import React, { useState } from 'react';
import {Product} from './'
const EcommerceHeader = ({products }) => {
  const [activeLink,setActiveLink] = useState(0)
  const handleClick = (index) => {
    setActiveLink(index);
  };

  return ( 
    <div>
    <div className="EcommerceHeadercontainer">
    <p
          className={`EcommerceHeaderlink ${activeLink === 0 ? 'active' : ''}`}
          onClick={() => handleClick(0)}
        >
          Weekly Deals
        </p>
        <p
          className={`EcommerceHeaderlink ${activeLink === 1 ? 'active' : ''}`}
          onClick={() => handleClick(1)}
        >
          Trending
        </p>
  </div>
  <div className='products-container'>
      {products?.map((product)=><Product  key={product._id} product={product}/>)}
    </div>
  </div>
  );
};

export default EcommerceHeader;
