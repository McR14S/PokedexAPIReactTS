import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavListDrawerProps  } from "./NavbarInterface";

export default function NavListDrawer( {navArrayLinks, NavLink, setOpen}: NavListDrawerProps) {
    return (
        <Box sx={{ width: 250, bgcolor: "antiquewhite" }}> 
            <nav>
                <List>
                    {navArrayLinks.map(item => (
                        <ListItem disablePadding key={item.title}>
                            <ListItemButton component={NavLink} to={item.path} onClick={() => setOpen(false)}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.title}</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Box>
    )
}