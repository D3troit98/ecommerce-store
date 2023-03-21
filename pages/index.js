import React,{useState,useEffect} from 'react'
import { Product, FooterBanner, HeroBanner, EcommerceHeader, NewsletterSubscribe,FeatureSection } from '../components'
import { client } from '../lib/client'
const Home = ({ products, bannerData, weeklyData }) => {
  const [loadMore, setLoadMore] = useState(true);
  const [productList, setProductList] = useState(products.slice(0, 6));
  const [hasMoreProducts, setHasMoreProducts] = useState(products.length > 6);

  const handleLoadMore = () => {
    // Fetch more products and update the products state
    if (hasMoreProducts) {
      const remainingProducts = products.slice(
        productList.length,
        productList.length + 6
      );
      if (remainingProducts.length) {
        setProductList([...productList, ...remainingProducts]);
      } else {
        setHasMoreProducts(false);
      }
    }
  };

  return (
    <div className="indexstyles">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best Selling Car Parts</h2>
        <p>Utilities of many variations</p>
      </div>

      <div className="products-container">
        {productList?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {hasMoreProducts && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load More
        </button>
      )}

      <EcommerceHeader weeklyData={weeklyData} products={products} />

      <FooterBanner footerBanner={bannerData && bannerData[0]} />

      <NewsletterSubscribe />

      <FeatureSection />
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);
  const weeklyquery = `*[_type == "weeklyDeal" && startDate <= now() && endDate >= now()] {
    product->,
    discount,
    startDate,
    endDate
  }`;
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const weeklyData = await client.fetch(weeklyquery);
  return {
    props: { products, bannerData, weeklyData },
  };
};

export default Home