import React from 'react';
import ProductList from './components/ProductList'; // Ajuste o caminho conforme sua estrutura
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';


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
      {/* Barra de Navegação */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Minha Loja
          </Typography>
          <Link href="/" passHref>
            <Button color="inherit">Home</Button>
          </Link>
          <Link href="/compras" passHref>
            <Button color="inherit">Produtos Comprados</Button>
          </Link>
        </Toolbar>
      </AppBar>

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
