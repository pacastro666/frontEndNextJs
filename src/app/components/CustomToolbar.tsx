import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

const CustomToolbar = () => {
  return (
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
  );
};

export default CustomToolbar;
