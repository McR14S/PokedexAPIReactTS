import {  Container } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { PokemonCardDetail } from "./components/PokemonCard/PokemonCardDetail";

import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import PokemonStore from "./pages/PokemonStore";

import HomeIcon from '@mui/icons-material/Home';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';

const navArrayLinks = [
  { title: "Inicio", path: "/", icon: <HomeIcon/>},
  { title: "Notas", path: "/toDoList", icon: <SpeakerNotesIcon/>},
  { title: "Tienda Pokemon", path: "/pokemonStore", icon: <CatchingPokemonTwoToneIcon/>},
]

export default function App(){
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={() => {}} />
      <Container sx={{ mt: 5}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toDoList" element={<ToDoList />} />
          <Route path="/pokemonStore" element={<PokemonStore />} />
          <Route path="/:pokeId" element={<PokemonCardDetail />} />
        </Routes>
      </Container>
    </>
  );
}   