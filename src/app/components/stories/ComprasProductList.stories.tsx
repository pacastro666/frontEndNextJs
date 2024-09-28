import React, { useState } from 'react';
import PurchasedProductList from '../ComprasProductList';

// Dados mock para os itens comprados
const mockPurchasedItems = [
  {
    id: 1,
    product_title: 'Produto 1',
    quantity: 2,
    product_price: 50,
    total_price: 100,
  },
  {
    id: 2,
    product_title: 'Produto 2',
    quantity: 1,
    product_price: 100,
    total_price: 100,
  },
  {
    id: 3,
    product_title: 'Produto 3',
    quantity: 3,
    product_price: 30,
    total_price: 90,
  },
];

// Funções mock para o Storybook
const mockHandleDeleteItem = (id: number) => {
  console.log(`Produto com ID ${id} foi deletado.`);
};

const mockHandleEditItem = (id: number, newQuantity: number) => {
  console.log(`Quantidade do produto com ID ${id} foi alterada para ${newQuantity}.`);
};

// Definir os metadados da história
export default {
  title: 'Components/PurchasedProductList',
  component: PurchasedProductList,
};

// Criar a story padrão
export const Default = () => {
  const [purchasedItems, setPurchasedItems] = useState(mockPurchasedItems);

  const handleDeleteItem = (id: number) => {
    setPurchasedItems(purchasedItems.filter((item) => item.id !== id));
    mockHandleDeleteItem(id);
  };

  const handleEditItem = (id: number, newQuantity: number) => {
    setPurchasedItems(
      purchasedItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity, total_price: newQuantity * item.product_price } : item
      )
    );
    mockHandleEditItem(id, newQuantity);
  };

  return <PurchasedProductList purchasedItems={purchasedItems} handleDeleteItem={handleDeleteItem} handleEditItem={handleEditItem} />;
};
