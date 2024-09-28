import React from 'react';
import ProductList from '../ProductList';

// Definir os metadados da história
export default {
  title: 'Components/ProductList',
  component: ProductList,
};

// Dados mock para os produtos
const mockProducts = [
  {
    id: 1,
    title: 'Produto 1',
    price: 100,
    description: 'Descrição do Produto 1',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Produto 2',
    price: 200,
    description: 'Descrição do Produto 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Produto 3',
    price: 300,
    description: 'Descrição do Produto 3',
    image: 'https://via.placeholder.com/150',
  },
];

// Criar a story padrão
export const Default = () => <ProductList products={mockProducts} />;
