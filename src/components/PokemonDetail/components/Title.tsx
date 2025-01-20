import { Typography } from "@mui/material";

interface Props {
    content: string;
    backgroundSelected: string;
}

export const Title = ({ content, backgroundSelected }: Props) => {
    return(
        <Typography component="span" sx={{
            textAlign: "center",
            fontWeight: "bold",
            margin: "0.5rem 0",
            fontSize: "32px",
            color: backgroundSelected
        }}>
            { content }
        </Typography>
    )
}