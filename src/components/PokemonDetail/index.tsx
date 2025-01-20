import { Box, Card, CardContent, CircularProgress } from "@mui/material";
import { CardMedia } from "@mui/material";
import { background } from "../../utils/Backgrounds";
import { IPokemon } from "../../interfaces/interfaces";
import { Header } from "./components/Header";
import { PokeTypes } from "./components/PokeTypes";
import { Title } from "./components/Title";
import { Stats } from "./components/Stats";
import { BaseStats } from "./components/BaseStats";

interface Props {
    pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {

    /*  @ts-ignore */
    const backgroundSelected = background[pokemon?.types[0]?.type?.name];

    if (!pokemon){
        return(
            <Box sx={{ background: backgroundSelected }}>
                <CircularProgress sx={{ color: backgroundSelected }} />
            </Box>
        )
    }

    return (
        <Card sx={{ borderRadius: 4}}>
            <CardContent sx={{ 
            background: backgroundSelected,
            minHeight: "110vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            }}>

                {/* Header con nombre y número */}
                <Header pokemon={pokemon} />
                
                {/* Contenedor Imagen principal */}
                <Box sx={{
                    maxWidth: 650,
                    width: "95%",
                    backgroundColor: "white",
                    height: "65vh",
                    bottom: 0,
                    position: "relative",
                    marginBottom: "2rem",
                    borderRadius: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"

                }}>
                    {/* Imagen principal */}
                    <CardMedia
                        component="img"
                        image={pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.front_default
                        }
                        alt={pokemon?.name
                        }
                        sx={{
                            position: "absolute",
                            margin: "0 auto",
                            marginTop: -30,
                            width: 275,
                            height: 275,
                            objectFit: "contain",
                        }}
                    />

                    {/* Estadisticas */}
                    <PokeTypes pokemon={ pokemon } />
                    <Title content="About" backgroundSelected={backgroundSelected}/>
                    <Stats pokemon={ pokemon } />
                    <Title content="Base Stats" backgroundSelected={backgroundSelected}/>
                    <BaseStats pokemon={ pokemon} backgroundSelected={backgroundSelected}/>

                </Box>

            </CardContent>
        </Card>
    )
}