import { PokeballIconSmall } from "../assets/pokeball";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
    return(
        <Box>
            <Container sx={{ gap: 2, display: "flex", alignItems: "center", justifyContent: "center",  mt: 5}}>
                <PokeballIconSmall />
                <Typography component="span" sx={{ fontSize: 24, fontWeight: 700 }}> Pokedex </Typography>
            </Container>
        </Box>
    )
}