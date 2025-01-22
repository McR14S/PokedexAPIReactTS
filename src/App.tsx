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
import { useState } from "react";
import { PokemonItem } from "./interfaces/pokemonItem";

const navArrayLinks = [
  { title: "Inicio", path: "/", icon: <HomeIcon/>},
  { title: "Notas", path: "/toDoList", icon: <SpeakerNotesIcon/>},
  { title: "Tienda Pokemon", path: "/pokemonStore", icon: <CatchingPokemonTwoToneIcon/>},
]

export default function App(){

  const [cartItems, setCartItems] = useState<PokemonItem[]>([]);

  const addToCart = (item: PokemonItem) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <Navbar 
        navArrayLinks={navArrayLinks} 
        NavLink={NavLink} 
        cartItems={cartItems} 
        clearCart={clearCart}
        addToCart={addToCart} 
        setOpen={() => {}} 
      />
      <Container sx={{ mt: 5}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/toDoList" element={<ToDoList />} />
          <Route path="/pokemonStore" element={<PokemonStore addToCart={addToCart}/>} />
          <Route path="/:pokeId" element={<PokemonCardDetail />} />
        </Routes>
      </Container>
    </>
  );
}   