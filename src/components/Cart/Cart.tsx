import React from "react";
import { Menu, MenuItem, ListItemText, Divider, Button, Typography, IconButton, Box } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface CartMenuProps {
  anchorEl: null | HTMLElement;
  openMenu: boolean;
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  handleClose: () => void;
  cartItems: { name: string; price: number }[]; 
  clearCart: () => void;
  proceedToCheckout: () => void;
}

const CartMenu: React.FC<CartMenuProps> = ({ 
  anchorEl, 
  openMenu, 
  handleClose, 
  cartItems, 
  clearCart, 
  proceedToCheckout 
}) => {

  // Agrupar los items por nombre y calcular el total
  const groupedItems = cartItems.reduce((acc, item) => {
    const existingItem = acc.find(i => i.name === item.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, [] as { name: string; price: number; quantity: number }[]);

  const total = groupedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0); 

  return (
    <Menu
      anchorEl={anchorEl}
      open={openMenu}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Box style={{ width: "300px", padding: "10px" }}>
        <Typography variant="h6" component="div" align="center" gutterBottom>
          <IconButton size="large">
            <ShoppingCartIcon />
          </IconButton>
          Carrito de Compras
        </Typography>

        {groupedItems.length === 0 ? (
          <MenuItem onClick={handleClose}>Carrito vacío</MenuItem>
        ) : (
          groupedItems.map((item, index) => (
            <MenuItem key={index}>
              <ListItemText
                primary={`${item.name} ${item.quantity > 1 ? `${item.quantity}x` : ""}`}
                secondary={`$${(item.price * item.quantity).toFixed(2)}`}
              />
            </MenuItem>
          ))
        )}

        <Divider sx={{ marginY: "10px" }} />

        <MenuItem>
          <ListItemText primary={`Total`} secondary={`$${total.toFixed(2)}`} />
        </MenuItem>

        <Divider sx={{ marginY: "10px" }} />

        <Button onClick={clearCart} fullWidth color="secondary" sx={{ marginBottom: "10px" }}>
          Vaciar Carrito
        </Button>

        <Button onClick={proceedToCheckout} fullWidth variant="contained" color="primary">
          Proceder al pago
        </Button>
      </Box>
    </Menu>
  );
};

export default CartMenu;
