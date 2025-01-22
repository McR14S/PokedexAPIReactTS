import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavListDrawerProps } from "./NavbarInterface";
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import CartMenu from "../Cart/Cart";

export default function Navbar({ navArrayLinks, NavLink, cartItems, addToCart, clearCart }: NavListDrawerProps) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const proceedToCheckout = () => {
    console.log("Proceder al pago");
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" sx={{ flexGrow: 1, display: "flex" }}>
            <CatchingPokemonTwoToneIcon sx={{ fontSize: "40px", marginRight: "8px" }} />
            Centro Pokemon
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navArrayLinks.map(item => (
              <Button color="inherit" key={item.title} component={NavLink} to={item.path}>
                {item.title}
              </Button>
            ))}

            {/* Icono del carrito */}
            <IconButton color="inherit" onClick={handleClick} sx={{ fontSize: "25px", marginRight: "8px" }}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{ display: { xs: "block", sm: "none" } }}>
        <NavListDrawer 
            navArrayLinks={navArrayLinks} 
            NavLink={NavLink} 
            clearCart={clearCart} // Usar clearCart aquí
            setOpen={setOpen}
            cartItems={cartItems} 
            addToCart={addToCart} 
        />
        <IconButton
          color="inherit"
          onClick={handleClick}
          sx={{ fontSize: "30px", width: "100%", backgroundColor: "antiquewhite", borderRadius: "0", "&:hover": { backgroundColor: "#D8C3A7" } }}
        >
          <ShoppingCartIcon />
        </IconButton>
      </Drawer>

      {/* Menu del carrito */}
      <CartMenu
        anchorEl={anchorEl}
        openMenu={openMenu}
        handleClick={handleClick}
        handleClose={handleClose}
        cartItems={cartItems}
        clearCart={clearCart} // Usar clearCart en el menu de carrito
        proceedToCheckout={proceedToCheckout}
      />
    </>
  );
}
