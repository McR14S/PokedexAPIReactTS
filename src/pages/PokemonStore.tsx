// PokemonStore.tsx
import { Button, Container, Grid2 } from "@mui/material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import pokemonItems from "../data/pokemonItems";
import { PokemonItem } from "../interfaces/pokemonItem";
import AddShoppingCartTwoToneIcon from '@mui/icons-material/AddShoppingCartTwoTone';

interface PokemonStoreProps {
  addToCart: (item: PokemonItem) => void; // Prop para agregar al carrito
}

export default function PokemonStore({ addToCart }: PokemonStoreProps) {
  return (
    <Container sx={{ maxWidth: "1200px", margin: "0 auto" }}>
      <Grid2
        container
        spacing={2}
        sx={{
          display: "grid", 
          justifyContent: "center",
          gridTemplateColumns: "repeat(3, 1fr)", 
          "@media (max-width: 1000px)": {
            gridTemplateColumns: "repeat(2, 1fr)", 
          },
          "@media (max-width: 400px)": {
            gridTemplateColumns: "repeat(1, 1fr)", 
          },
        }}
      >
        {pokemonItems.map((item: PokemonItem) => (
          <Card key={item.id} sx={{ height: "100%", width: "100%", margin: "0 auto" }}>
            <CardMedia
              component="img"
              sx={{ height: "140px", objectFit: "contain" }}
              image={item.image}
              alt={item.name}
            />
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="subtitle1" color="primary">
                {item.price.toLocaleString("es-CL", { style: "currency", currency: "CLP" }).replace("CLP", "").trim()}
              </Typography>
              <Button onClick={() => addToCart(item)}>
                <AddShoppingCartTwoToneIcon />
              </Button>
            </CardContent>
          </Card>
        ))}
      </Grid2>
    </Container>
  );
}
