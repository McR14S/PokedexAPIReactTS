import { Box, Typography } from "@mui/material";
import { IPokemon } from "../../../interfaces/interfaces";
import ScaleIcon from '@mui/icons-material/Scale';
import HeightIcon from '@mui/icons-material/Height';

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <Box
      sx={{
        margin: "0.5rem 0",
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {/* Peso */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <ScaleIcon sx={{ width: "30px", height: "30px", objectFit: "contain" }} />
        <Typography component="span" sx={{ fontSize: "24px" }}>
        {pokemon?.weight ? (pokemon.weight / 10).toFixed(1) : "N/A"} KG
        </Typography>
        <Typography component="p" sx={{ color: "#666666", fontSize: "20px" }}>
          Weight
        </Typography>
      </Box>

      {/* Altura */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <HeightIcon sx={{ width: "30px", height: "30px", objectFit: "contain" }} />
        <Typography component="span" sx={{ fontSize: "24px" }}>
          {pokemon?.height ? (pokemon.height / 10).toFixed(1) : "N/A"} M
        </Typography>
        <Typography component="p" sx={{ color: "#666666", fontSize: "20px" }}>
          Height
        </Typography>
      </Box>
    </Box>
  );
};
