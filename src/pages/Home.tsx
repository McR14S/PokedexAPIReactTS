import { Box, Container, Typography } from "@mui/material";
import { PokeballIconSmall } from "../assets/pokeball";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { useContext, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import Pagination from "@mui/material/Pagination";
import { Filters } from "../components/Filters/Filters";

export default function Home() {
    const { pokemonsFiltered } = useContext(PokemonContext);
    
    // Estado de la página y cantidad de Pokémon por página
    const [page, setPage] = useState(1);
    const perPage = 10; // Número de Pokémon por página
    
    // Calcular los Pokémon que deben ser mostrados en la página actual
    const lastIndex = page * perPage;
    const firstIndex = lastIndex - perPage;
    const currentPokemons = pokemonsFiltered ? pokemonsFiltered.slice(firstIndex, lastIndex) : [];

    // Función para manejar el cambio de página
    const handleChangePage = (_: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return(
        <Box>
            <Container sx={{ gap: 2, display: "flex", alignItems: "center", justifyContent: "center",  mt: 5}}>
                <PokeballIconSmall />
                <Typography component="span" sx={{ fontSize: 36, fontWeight: 700 , textShadow: "2px 2px 8px rgba(0, 0, 0, 0.3)",}}> Pokedex </Typography>
            </Container>
            
            <Filters/>

            <PokemonList pokemonsUrls={currentPokemons}/>
            
            {/* Paginación */}
            <Pagination
                variant="outlined" color="secondary"
                count={Math.ceil((pokemonsFiltered?.length || 0) / perPage)} // Total de páginas
                page={page}
                onChange={handleChangePage}
                sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}
            />
        </Box>
    );
}
