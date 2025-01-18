import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BluuCard() {
    return (
        <Card sx={{ 
            transition: "0.2s", 
            "&:hover": { transform: "scale(1.05)", }, 
            }}
        >

            <CardMedia component="img" image="https://placehold.co/1000x200" height="200" alt="Descripcion" />
            <CardContent>
                <Typography variant="h5">Card Title</Typography>
                <Typography component="p" variant="body2"> 
                    Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolorLorem ipsum dolor
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained">Add</Button>
                <Button color="error">Remove</Button>
            </CardActions>
        </Card>
    );
}