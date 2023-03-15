import React,{useState,useEffect} from 'react'
import { Product, FooterBanner, HeroBanner, EcommerceHeader, NewsletterSubscribe,FeatureSection } from '../components'
import { client } from '../lib/client'
const Home = ({products, bannerData}) => {
  const [loadMore, setLoadMore] = useState(true);
  
  const handleLoadMore = () => {
    // Fetch more products and update the products state
  };
  return (
    <div className='indexstyles'>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div className='products-heading'>
      <h2>
        Best Selling Car Parts
      </h2>
      <p>Utilities of many variations</p>
    </div>

    <div className='products-container'>
      {products?.map((product)=><Product  key={product._id} product={product}/>)}
    </div>
    {loadMore && (
        <button className='load-more-button' onClick={handleLoadMore}>
          Load More
        </button>
      )}

   <EcommerceHeader products={products}/>

    <FooterBanner  footerBanner={bannerData && bannerData[0]}/>

    <NewsletterSubscribe />

   <FeatureSection />
   </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery)

  return {
    props :{products, bannerData}
  }
}

export default Home