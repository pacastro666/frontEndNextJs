import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}> {/* Adiciona mais colunas em telas maiores */}
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
