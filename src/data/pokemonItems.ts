// src/data/pokemonItems.ts

import { PokemonItem } from "../interfaces/pokemonItem";


const pokemonItems: PokemonItem[] = [
    {
        id: 1,
        name: "Poké Ball",
        price: 200,
        description: "La clásica Poké Ball para capturar Pokémon.",
        image: "/img/Poke_ball.png",
    },
    {
        id: 2,
        name: "Super Ball",
        price: 600,
        description: "Una Super Ball con mayor índice de captura.",
        image: "/img/Super_Ball.png",
    },
    {
        id: 3,
        name: "Ultra Ball",
        price: 1200,
        description: "La poderosa Ultra Ball, ideal para Pokémon difíciles.",
        image: "/img/Ultra_Ball.png",
    },
    {
        id: 4,
        name: "Master Ball",
        price: 150000,
        description: "La Master Ball garantiza la captura.",
        image: "/img/Master_Ball.png",
    },
    {
        id: 5,
        name: "Potion",
        price: 300,
        description: "Una poción básica para curar Pokémon.",
        image: "/img/Pocion.png",
    },
    {
        id: 6,
        name: "Revive",
        price: 1500,
        description: "Revive a un Pokémon debilitado con la mitad de su HP.",
        image: "/img/Revivir.png",
    },
];

export default pokemonItems;
