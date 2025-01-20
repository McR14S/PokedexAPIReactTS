import { IPokemon } from "../../../interfaces/interfaces";
import { PokeballIconBig } from "../../../assets/pokeball";
import { Box, Container, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

interface Props {
  pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1); 
    } else {
      navigate("/"); 
    }
  };

  return (
    <Container
      component="header"
      sx={{
        position: "relative",
        maxWidth: 650,
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        width: "100%",
        padding: "2rem",
        color: "white",
      }}
    >
        {/* Contenedor para el nombre y la flecha */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>

            <ArrowBackIcon  onClick={handleGoBack} sx={{ fontSize: "4rem", cursor: "pointer" }} />

            <Typography
            component="span"
            sx={{
                fontWeight: "bold",
                textTransform: "capitalize",
                fontSize: 64,
            }}
            >
            {pokemon?.name}
            </Typography>
        </Box>

        <PokeballIconBig
            style={{
                position: "absolute", 
                top: "-30%", 
                right: "-2%", 
                width: "450px", 
                height: "450px",
            }}
        />

        {/* Contenedor para el número */}
        <Typography
            component="p"
            sx={{
            fontWeight: "bold",
            fontSize: 42,
            }}
        >
            #{pokemon?.id}
        </Typography>
    </Container>
  );
};
