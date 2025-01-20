import Navbar from "./components/Navbar/Navbar";
import {  Container } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import CatchingPokemonTwoToneIcon from '@mui/icons-material/CatchingPokemonTwoTone';
import { PokemonCardDetail } from "./components/PokemonCard/PokemonCardDetail";

const navArrayLinks = [
  { title: "Home", path: "/", icon: <InboxIcon/>},
  { title: "Login", path: "/login", icon: <DraftsIcon/>},
  { title: "Register", path: "/register", icon: <MenuIcon/>},
  { title: "PokeDetail", path: "/:PokemonCardDetail", icon: <CatchingPokemonTwoToneIcon/>},
]

export default function App(){
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks} NavLink={NavLink} setOpen={() => {}} />
      <Container sx={{ mt: 5}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/:pokeId" element={<PokemonCardDetail />} />
        </Routes>
      </Container>
    </>
  );
}   