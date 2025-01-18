import styled from "@emotion/styled";
import { Box, Button, Paper, Typography } from "@mui/material";


export default function Product() {

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    }); 

    return (
        <Paper sx={{ display: "flex", alignItems: "center", gap: 2, overflow: "hidden", mt: 5 }}>
            <Img src="https://store-images.s-microsoft.com/image/apps.6159.14120048182721302.9120a847-1aae-4918-be10-96c02cb917a6.436b47bb-81da-4b1b-a86a-69d67e8ce63d?q=90&w=480&h=270" alt="Probando imagen" />
            <Box sx={{ flexGrow: 1 , display: "grid", gap: 4 }}>
                <Typography variant="h4">Product Name</Typography>
                <Typography variant="body1">Product Description</Typography>
                <Button variant="contained">Add Card</Button>
            </Box>
            <Box sx={{ mr:2 }} component="p">$19.00</Box> 
        </Paper>
    )
}