import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Box, Button } from "@mui/material";
import { PokeType } from "../../interfaces/types";
import { background } from "../../utils/Backgrounds";

export const Filters = () => {
  const { types, filterSelected, changeTypeSelected } = useContext(PokemonContext);

  const onChangeType = (type: PokeType | null) => {
    if (type) {
      changeTypeSelected(type);
    }
  };

  return (
    <Box sx={{ textAlign: "center", marginY: 2 }}>
      {/* Menú siempre abierto */}
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {/* Lista de tipos */}
        {types?.map((type: PokeType) => (
          <Button
            key={type.name}
            onClick={() => onChangeType(type)}
            variant="contained"
            sx={{
              backgroundColor: 
                filterSelected?.name === type.name
                  ? background[type.name as keyof typeof background]
                  : "#e0e0e0", // Color por defecto cuando no está seleccionado
              color: filterSelected?.name === type.name ? "white" : "black",
              "&:hover": { opacity: 0.8 },
            }}
          >
            {type.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
};
