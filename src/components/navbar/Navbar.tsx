import { AppBar, Box, Button, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import { NavListDrawerProps } from "./NavbarInterface";
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';


export default function Navbar( {navArrayLinks, NavLink}: NavListDrawerProps) {

    const [open, setOpen] = useState(false);

    return(
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" color="inherit" onClick={() => setOpen(true)} sx={{ display: { xs: "block", sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" sx={{ flexGrow: 1, display: "flex" }}>  
                        <CatchingPokemonTwoToneIcon sx={{ fontSize: "40px",  marginRight: "8px" }}/> 
                        Centro Pokemon
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navArrayLinks.map(item =>(
                            <Button color="inherit" key={item.title} component={NavLink} to={item.path}>{item.title}</Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer open={open} anchor="left" onClose={() => setOpen(false)} sx={{ display: { xs: "block", sm: "none" } }}>
                <NavListDrawer navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={setOpen}/>
            </Drawer>

        </>
    )
}