import React from 'react';
import { Link } from 'gatsby';
import Product from '../components/Product';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function ProductTemplate({ pageContext: { product } }) {
  return (
    <>
      <SEO title={`Zero Waste Alternative to ${product.name}`} description={product.description}/>
      <Layout>
        {/* include header later */}
        <Product product={product} />
        {/* include footer later */}
      </Layout>
    </>
  );
}
