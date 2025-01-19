import { Alert, AlertTitle, Box, Button, Collapse, Snackbar } from "@mui/material";
import { useState } from "react";

import AirlineSeatIndividualSuiteRoundedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteRounded';

export default function Home() {

    const [open, setOpen] = useState(false);

    return(
        <Box>
            <h1> Home </h1>

            <Button variant="contained" onClick={() => {setOpen(true)}}>Open</Button>

            <Snackbar open={open} autoHideDuration={3000} onClose={() => setOpen(false)}>
                <Collapse in={open}>
                    <Alert security="success" icon={<AirlineSeatIndividualSuiteRoundedIcon/>}>
                        <AlertTitle>Alerta</AlertTitle>
                        Soy una alerta2</Alert>
                </Collapse>
            </Snackbar>

        </Box>
    )
}