import {  Container } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import { PokemonCardDetail } from "./components/PokemonCard/PokemonCardDetail";

import Home from "./pages/Home";
import ToDoList from "./pages/ToDoList";
import PokemonStore from "./pages/PokemonStore";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";

const navArrayLinks = [
  { title: "Home", path: "/", icon: <InboxIcon/>},
  { title: "Notes", path: "/toDoList", icon: <MenuIcon/>},
  { title: "Pokemon Store", path: "/pokemonStore", icon: <MenuIcon/>},
  { title: "Register", path: "/register", icon: <MenuIcon/>},
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