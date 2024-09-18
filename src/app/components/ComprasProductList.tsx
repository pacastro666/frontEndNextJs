import React, { useState } from 'react';
import { Grid, Card, CardContent, CardActions, Button, Typography, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

interface Product {
  id: number;
  product_title: string;
  quantity: number;
  product_price: number;
  total_price: number;
}

interface Props {
  purchasedItems: Product[];
  handleDeleteItem: (id: number) => void;
  handleEditItem: (id: number, newQuantity: number) => void;
}

const PurchasedProductList: React.FC<Props> = ({ purchasedItems, handleDeleteItem, handleEditItem }) => {
  const [open, setOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);
  const [newQuantity, setNewQuantity] = useState<number>(1);

  const handleClickOpen = (id: number, currentQuantity: number) => {
    setSelectedItemId(id);
    setNewQuantity(currentQuantity); // Define a quantidade atual no input
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItemId(null);
  };

  const handleSave = () => {
    if (selectedItemId !== null) {
      handleEditItem(selectedItemId, newQuantity); // Chama a função de atualização com o novo valor
    }
    handleClose();
  };

  return (
    <>
      <Grid container spacing={3}>
        {purchasedItems.length === 0 ? (
          <Typography variant="h6">Nenhum produto comprado.</Typography>
        ) : (
          purchasedItems.map((item: Product) => (
            <Grid item xs={12} md={6} lg={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{item.product_title}</Typography>
                  <Typography variant="body2">Pedido: {item.id}</Typography>
                  <Typography variant="body2">Quantidade: {item.quantity}</Typography>
                  <Typography variant="body2">Preço: R$ {item.product_price}</Typography>
                  <Typography variant="body2">Total: R$ {item.total_price.toFixed(2)}</Typography> {/* Exibe o total calculado */}
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" onClick={() => handleClickOpen(item.id, item.quantity)}>
                    Alterar
                  </Button>
                  <Button size="small" color="secondary" onClick={() => handleDeleteItem(item.id)}>
                    Excluir
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* Modal para alterar quantidade */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Alterar Quantidade</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Quantidade"
            type="number"
            fullWidth
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default PurchasedProductList;
