import {  Box, Button, Card, List, ListItem, ListItemText, Tab, Tabs, TextField, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useSnackbar } from 'notistack';

export default function ToDoList() {
    const { enqueueSnackbar } = useSnackbar();

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [notes, setNotes] = useState<{ title: string; content: string; completedAt?: string }[]>([]);
    const [completedNotes, setCompletedNotes] = useState<{ title: string; content: string; completedAt: string }[]>([]);
    const [currentTab, setCurrentTab] = useState(0); // 0 = Pendientes, 1 = Completadas

    const [error, setError] = useState({ error: false, message: "" });

    // Manejar cambios en los inputs
    function handleChange(event: { target: { name: any; value: any; }; }) {
        const { name, value } = event.target;
        setNote((prevNote) => ({
            ...prevNote,
            [name]: value,
        }));

        if (name === "title" && value.trim()) {
            setError({ error: false, message: "" });
        }
    }

    // Formulario
    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();

        if (!note.title.trim()) {
            setError({ error: true, message: "El titulo no puede estar vacio" });
            return;
        }

        setNotes((prevNotes) => [note, ...prevNotes ]);

        enqueueSnackbar("Nota agregada!", { 
            variant: 'success', 
            anchorOrigin: {
                vertical: "top",
                horizontal: "right"
            },
        }); 

        setNote({
            title: "",
            content: "",
        });
    }

    function handleComplete(index: number) {
        const completeTask = { ...notes[index], completedAt: new Date().toLocaleDateString() };
        setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
        setCompletedNotes((prevCompleted) => [completeTask, ...prevCompleted]);

        enqueueSnackbar("Tarea completada!", { 
            variant: 'info' , 
            anchorOrigin: {
                vertical: "top",
                horizontal: "right"
            },});
    }

    function handleDelete(index: number, isCompleted: boolean) {
        if (isCompleted) {
            setCompletedNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
        } else {
            setNotes((prevNote) => prevNote.filter((_, i) => i !== index));
        }

        enqueueSnackbar(isCompleted ? "Tarea eliminada de completadas!" : "Tarea eliminada!", { 
            variant: 'error' , 
            anchorOrigin: {
                vertical: "top",
                horizontal: "right"
            },
        });
    }

    return (
        <Card>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Notas
                </Typography>

                <Tabs value={currentTab} onChange={(_, value) => setCurrentTab(value)}>
                    <Tab label="Pendientes"/>
                    <Tab label="Completadas"/>
                </Tabs>

                {/* Formulario para nuevas notas */}
                {currentTab === 0 && (
                    <Box component="form" onSubmit={handleSubmit}>
                        <TextField
                            type="text"
                            name="title"
                            onChange={handleChange}
                            value={note.title}
                            placeholder="Titulo"
                            fullWidth
                            margin="normal"
                            helperText={error.message}
                            error={error.error}
                        />
                        <TextField
                            name="content"
                            onChange={handleChange}
                            value={note.content}
                            placeholder="Toma una nota..."
                            fullWidth
                            multiline
                            minRows={3}
                            margin="normal"
                        />

                        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                            <AddIcon />
                        </Button>
                    </Box>
                )}

                {/* Lista de Notas */}
                <List>
                    {(currentTab === 0 ? notes : completedNotes).map((note, index) => (
                        <ListItem key={index} sx={{ mb: 2, border: "1px solid #ccc", borderRadius: 2, p: 2 }}>
                            <ListItemText 
                                primary={note.title || "Untitled"}
                                secondary={note.content + (note.completedAt ? ` (Completada: ${note.completedAt})` : "")}
                            />
                            {currentTab === 0 && (
                                <CheckIcon
                                    onClick={() => handleComplete(index)}
                                    sx={{ cursor: "pointer", color: "green", ml: 2 }}
                                />
                            )}
                            <DeleteForeverIcon
                                onClick={() => handleDelete(index, currentTab === 1)}
                                sx={{ cursor: "pointer", color: "red", ml: 2 }}
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Card>
    );
}
