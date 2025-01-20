import { Box, Typography } from "@mui/material";
import { IPokemon } from "../../../interfaces/interfaces";

interface Props {
    pokemon: IPokemon | null;
    backgroundSelected: string;
};

export const BaseStats = ({ pokemon, backgroundSelected }: Props) => {
    const maxStats = 255;

    const baseStatsNames = {
        hp: "hp",
        attack: "atk",
        defense: "def",
        "special-attack": "satk",
        "special-defense": "sdef",
        speed: "spd",
    };

    return (
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column", margin:"0.5rem 0"}}>
            {/* @ts-ignore */}
            {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
                return (
                    <Box key={name} sx={{ width: "100%", display: "flex"}}>
                        <Typography component="span" sx={{ 
                            color: backgroundSelected, 
                            fontWeight: "bold",
                            fontSize: 20,
                            textTransform: "uppercase",
                            textAlign: "right",
                            width: "20%",
                            margin: "0 1rem",
                            paddingRight: "1rem",
                            borderRight: "1px solid #e0e0e0"
                            }}>
                            {/* @ts-ignore */}
                            {baseStatsNames[name]}
                        </Typography> 
                        <Box sx={{
                            width: "60%",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem"
                        }}>
                            <Typography component="p" sx={{ width: "10%" }}>{base_stat}</Typography>
                            <Box sx={{ width: "100%", position: "relative" }}>
                                <Box sx={{ width: "100%", height: "10px", opacity: "0.5", borderRadius: "8px", background: backgroundSelected}} />
                                <Box sx={{
                                    position: "absolute",
                                    left: 0,
                                    height: "10px",
                                    top: 0,
                                    borderRadius: "8px",
                                    background: backgroundSelected,
                                    opacity: 1,
                                    width: `${(base_stat / maxStats) * 100}%`
                                  }}/>
                            </Box>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}