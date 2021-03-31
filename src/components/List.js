import React from 'react';
import { Link } from 'gatsby';
const { products } = require('../assets/data');

export default function List() {
  return (
    <ul>
      test
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link to={`/${product.name}`}>{product.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
