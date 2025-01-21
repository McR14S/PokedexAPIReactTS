import { AppBar, Box, Button, Drawer, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavListDrawerProps } from "./NavbarInterface";
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

export default function Navbar({ navArrayLinks, NavLink }: NavListDrawerProps) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
  const openMenu = Boolean(anchorEl);  

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
                        
                    <IconButton
                        color="inherit"
                        onClick={handleClick} 
                        sx={{ fontSize: "25px", marginRight: "8px" }}
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>

        <Drawer 
            open={open} 
            anchor="left" 
            onClose={() => setOpen(false)} 
            sx={{ 
                display: { xs: "block", sm: "none" },
            }}>

            <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen} />
            <IconButton
                color="inherit"
                onClick={handleClick} 
                sx={{ 
                    fontSize: "30px", 
                    width: "100%",
                    backgroundColor: "antiquewhite",
                    borderRadius: "0",
                    "&:hover": {
                        backgroundColor: "#D8C3A7", // Fondo al pasar el mouse
                    },
                }}
            >
                <ShoppingCartIcon />
            </IconButton>
        </Drawer>

        {/* Menú del carrito */}
        <Menu
            anchorEl={anchorEl}  
            open={openMenu} 
            onClose={handleClose}  
            anchorOrigin={{
                vertical: "top",
                horizontal: "right", 
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right", 
            }}
        >
            <MenuItem onClick={handleClose}>Ver Carrito</MenuItem>
            <MenuItem onClick={handleClose}>Ir a Pagar</MenuItem>
            <MenuItem onClick={handleClose}>Cerrar</MenuItem>
        </Menu>
    </>
  );
}
