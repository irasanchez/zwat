import React from 'react';
import { Link } from 'gatsby';
import Product from '../components/Product';

export default function ProductTemplate({ pageContext: { product } }) {
  return (
    <>
      <header>
        <h1>{product.name}</h1>
      </header>
      <section>
        <h2>Sources</h2>
        {
          product.sources.map((source) => (
            <div key={source.url}>
              <Link to={source.url}>
                <h3>{source.title}</h3>
              </Link>
              <section>
                <img src={source.img} alt={source.imgAlt} />
                <p>{source.description}</p>
              </section>
              <Product />
            </div>
          ))
          // include description and image later
        }
      </section>
    </>
  );
}