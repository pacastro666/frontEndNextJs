import React, { useState } from 'react';
import QuantitySelector from '../QuantitySelector';

// Definir os metadados da história
export default {
  title: 'Components/QuantitySelector',
  component: QuantitySelector,
};

// Criar a story padrão
export const Default = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <QuantitySelector
      quantity={quantity}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
    />
  );
};
