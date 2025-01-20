import { Container, Grid2 } from '@mui/material'
import { PokemonCard } from '../PokemonCard/PokemonCard';

interface Props {
    pokemonsUrls?: string[] | null;
}

export const PokemonList = ({ pokemonsUrls }: Props) => {
  return (
    <>
        <Container sx={{ maxWidth: "1200px" }}>
            <Grid2
            container
            spacing={2}
            sx={{
                justifyContent: "center", 
                margin: "0 auto",
                // Para los tamaños de pantalla
                gridTemplateColumns: "repeat(4, 1fr)", 
                "@media (max-width: 1000px)": {
                gridTemplateColumns: "repeat(3, 1fr)",
                },
                "@media (max-width: 800px)": {
                gridTemplateColumns: "repeat(2, 1fr)", 
                },
                "@media (max-width: 400px)": {
                gridTemplateColumns: "repeat(1, 1fr)", 
                },
            }}
            >
                {pokemonsUrls?.map((pokemonUrl) => (
                    <PokemonCard key={pokemonUrl} url={pokemonUrl} />
                ))}
            </Grid2>
        </Container>
    </>
  )
}
