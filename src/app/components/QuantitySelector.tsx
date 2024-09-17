import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantitySelectorProps {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({ quantity, incrementQuantity, decrementQuantity }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
      <IconButton onClick={decrementQuantity} disabled={quantity === 1}>
        <RemoveIcon />
      </IconButton>
      <Typography variant="h6" sx={{ margin: '0 10px', fontSize: '1.2rem' }}>
        {quantity}
      </Typography>
      <IconButton onClick={incrementQuantity}>
        <AddIcon />
      </IconButton>
    </Box>
  );
};

export default QuantitySelector;
