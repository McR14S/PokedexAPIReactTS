import styled from "@emotion/styled";
import { Box, Paper, Typography, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/Backgrounds";

interface Props {
  url: string;
}

const Img = styled("img")({
  width: 200,
  height: 200,
  objectFit: "contain",
  objectPosition: "center",
});

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  // Determina el color de fondo según el tipo del Pokémon
  const pokemonType = pokemon?.types?.[0]?.type?.name as keyof typeof background;
  const backgroundSelected = background[pokemonType] || background["unknown"];

  // Selecciona el sprite del Pokémon
  const getPokemonSprite = () =>
    pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.front_default;

  return (
    <Paper
    component={Link}
    to={pokemon ? `/${pokemon.id}` : "#" }
    variant="elevation"
    sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 3,
        textDecoration: "none",
        border: `2px solid ${backgroundSelected}`,
        "&:hover": {
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)", 
        },
        borderRadius: 3,
        position: "relative",
        paddingTop: "20px",
    }}
    >
      {/* Número del Pokémon en la esquina superior derecha */}
      <Box
        sx={{
          position: "absolute", 
          top: 10, 
          right: 10, 
          fontWeight: "bold",
          color: backgroundSelected,
          paddingBottom: "5px",
        }}
      >
        #{pokemon?.id || "??"}
      </Box>

      {/* Imagen del Pokémon */}
      {getPokemonSprite() ? (
        <Box sx={{ paddingTop: "20px" }}>
            <Img src={getPokemonSprite()} alt={pokemon?.name || "Unknown Pokémon"} />
        </Box>
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 200, height: 200 }}>
          <CircularProgress sx={{ color: backgroundSelected }} />
        </Box>
      )}

      {/* Información del Pokémon */}
      <Box sx={{ flexGrow: 1, display: "grid", width: "100%" }}>
        {/* Nombre del Pokémon con estilo de fondo y expansión */}
        <Typography
          variant="h5"
          sx={{
            backgroundColor: backgroundSelected,
            textAlign: "center", // Alineación centrada para el nombre
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "#fff",
            width: "100%",
            padding: "0.5rem",
            "&:hover": {
              backgroundColor: backgroundSelected,
              cursor: "pointer",
            },
          }}
        >
          {pokemon?.name || "Loading..."}
        </Typography>
      </Box>
    </Paper>
  );
};
