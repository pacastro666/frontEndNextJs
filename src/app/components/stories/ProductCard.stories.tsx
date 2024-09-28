import React, { useState } from 'react';
import ProductCard from '../ProductCard';

// Dados mock para o produto
const mockProduct = {
  id: 1,
  title: 'Produto Teste',
  price: 100,
  description: 'Este é um produto de teste para o Storybook.',
  image: 'https://via.placeholder.com/150',
};

// Função mock para simular a compra
const mockHandlePurchase = (id: number, title: string, price: number, quantity: number) => {
  console.log(`Produto comprado: ${title}, Quantidade: ${quantity}, Preço: ${price}`);
};

// Definir os metadados da história
export default {
  title: 'Components/ProductCard',
  component: ProductCard,
};

// Criar a story padrão
export const Default = () => {
  return (
    <ProductCard
      product={mockProduct}
    />
  );
};
