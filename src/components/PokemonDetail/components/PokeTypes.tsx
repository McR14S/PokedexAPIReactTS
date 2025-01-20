import { Box, Typography } from "@mui/material";
import { IPokemon } from "../../../interfaces/interfaces";
import { background } from "../../../utils/Backgrounds";

interface Props {
    pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
    return(
        <Box sx={{ 
            marginTop: "45px",
            paddingTop: "1rem",
            display: "flex", 
            alignItems: "center", 
            gap: "1rem" 
            }}>

            {pokemon?.types.map(({ type: { name } }) => (
                <Box key={name}
                     sx={{
                        padding: "0.2rem 1rem",
                        borderRadius: "1rem",
                        background: background[name as keyof typeof background],
                        color: "white",
                        fontWeight: "bold",
                        textTransform: "capitalize"
                     }}>

                    <Typography variant="body2" sx={{ fontSize: "1.2rem" }}>{name}</Typography>
                </Box>
            ))}
        </Box>
    );
};