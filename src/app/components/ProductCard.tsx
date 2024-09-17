"use client";

import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import QuantitySelector from './QuantitySelector';
import { handlePurchase } from '../utils/productFunctions';


interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card sx={{ maxWidth: 300, margin: 'auto' }}>
      <CardMedia
        component="img"
        height="150"
        image={product.image}
        alt={product.title}
        sx={{ objectFit: 'contain', padding: '10px' }}
      />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ fontSize: '1rem', fontWeight: 'bold' }}>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
          {product.description.substring(0, 50)}...
        </Typography>
        <Typography variant="h6" sx={{ fontSize: '0.95rem', marginTop: '10px' }}>
          Preço: ${product.price}
        </Typography>

        {/* Componente de Seleção de Quantidade */}
        <QuantitySelector
          quantity={quantity}
          incrementQuantity={() => setQuantity(quantity + 1)}
          decrementQuantity={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
        />

        {/* Botão de Comprar */}
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '10px', width: '100%' }}
          onClick={() => handlePurchase(product.id, product.title,  product.price, quantity)}
        >
          Comprar
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
