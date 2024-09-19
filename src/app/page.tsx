import React from 'react';
import ProductList from './components/ProductList'; // Ajuste o caminho conforme sua estrutura
import CustomToolbar from './components/CustomToolbar'; // Novo componente Toolbar
import { Container, Typography } from '@mui/material';

// Função para buscar os produtos da FakeStore
async function fetchProducts() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

// Componente da página principal (HomePage)
export default async function HomePage() {
  const products = await fetchProducts(); // Chamando a função de fetch diretamente no componente

  return (
    <>
      {/* Usando a Toolbar separada */}
      <CustomToolbar />

      {/* Adicionando um espaçamento abaixo da AppBar para evitar sobreposição */}
      <Container style={{ marginTop: '80px' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Produtos da FakeStore
        </Typography>

        {/* Lista de Produtos */}
        <ProductList products={products} />
      </Container>
    </>
  );
}
