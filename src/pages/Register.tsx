import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Register() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState({ error: false, message: "" });

    const validateEmail = (email: string) => {
        // expresion regular
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setError({ error: false, message: "" });
            console.log("Email valido");
        } else {
            setError({ error: true, message: "Email invalido" });
        } 
    };

    return(
        <>
            <h1> Register </h1>

            <Box component="form" onSubmit={handleSubmit}>
                <TextField 
                    id="email" 
                    label="Email" 
                    type="email" 
                    variant="outlined" 
                    fullWidth 
                    required
                    helperText={error.message}
                    error={error.error} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="outlined" sx={{ mt: 2 }}>Registrarme</Button>
            </Box>
        </>
    )
}