import React from 'react';
import { Container, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import Link from 'next/link';

// Função para buscar os produtos comprados da API
async function fetchPurchasedItems() {
  const res = await fetch('http://127.0.0.1:8000/api/v1/comprar/');
  if (!res.ok) {
    throw new Error('Failed to fetch purchased items');
  }
  return res.json();
}

// Componente da página de Produtos Comprados
export default async function PurchasedProducts() {
  const purchasedItems = await fetchPurchasedItems(); // Chamando a função de fetch diretamente no componente

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Produtos Comprados
      </Typography>
      <Grid container spacing={3}>
        {purchasedItems.length === 0 ? (
          <Typography variant="h6">Nenhum produto comprado.</Typography>
        ) : (
          purchasedItems.map((item: any) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.product_name}</Typography>
                  <Typography variant="body2">Quantidade: {item.quantity}</Typography>
                  <Typography variant="body2">Preço: R$ {item.price}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
      <Link href="/" passHref>
        <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
          Voltar para Home
        </Button>
      </Link>
    </Container>
  );
}
