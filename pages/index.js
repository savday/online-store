import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({products, bannerData}) => (
    <>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
   
    <div>
      <h2 className='products-heading'>Best Selling Products</h2>
      <p>Your favorite wellness products delivered straight to you</p>
    </div>

    <div className='products-container'>
    {products?.map((product) => product.name)}
    </div>

    <FooterBanner />
    </>
)

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home