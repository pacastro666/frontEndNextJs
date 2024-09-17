import React from 'react';
import ProductList from './components/ProductList';

async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function HomePage() {
  const products = await fetchProducts();

  return (
    <div>
      <h1>Produtos da FakeStore</h1>
      <ProductList products={products} />
    </div>
  );
}
