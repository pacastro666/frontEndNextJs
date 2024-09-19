'use client';
import React, { useState, useEffect } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { fetchPurchasedItems, deletarItem, updateItemQuantity } from '../utils/apiFunctions';
import PurchasedProductList from '../components/ComprasProductList';
import CustomToolbar from '../components/CustomToolbar'; // Novo componente Toolbar

export default function PurchasedProducts() {
  const [purchasedItems, setPurchasedItems] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadPurchasedItems() {
      try {
        const items = await fetchPurchasedItems();
        // Calcular o total_price para cada item inicialmente
        const itemsWithTotal = items.map(item => ({
          ...item,
          total_price: item.product_price * item.quantity,
        }));
        setPurchasedItems(itemsWithTotal);
      } catch (error) {
        console.error("Erro ao carregar os produtos comprados:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadPurchasedItems();
  }, []);

  const handleDeleteItem = async (id: number) => {
    const wasDeleted = await deletarItem(id);
    if (wasDeleted) {
      setPurchasedItems((prevItems) => prevItems.filter(item => item.id !== id));
    }
  };

  const handleEditItem = async (id: number, newQuantity: number) => {
    try {
      const updatedItem = await updateItemQuantity(id, newQuantity);
      setPurchasedItems((prevItems) =>
        prevItems.map(item =>
          item.id === id
            ? { ...item, quantity: updatedItem.quantity, total_price: updatedItem.quantity * item.product_price }
            : item
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar a quantidade:", error);
    }
  };

  return (
    <>
     {/* Usando a Toolbar separada */}
     <CustomToolbar />

    
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Produtos Comprados
      </Typography>
      {isLoading ? (
        <Typography variant="h6">Carregando...</Typography>
      ) : (
        <PurchasedProductList 
          purchasedItems={purchasedItems} 
          handleDeleteItem={handleDeleteItem} 
          handleEditItem={handleEditItem} 
        />
      )}

    </Container>
    </>
  );
}
