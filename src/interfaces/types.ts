import { PokeTypes } from "../utils/Backgrounds";

export type PokeType = {
    name: PokeTypes | "All";
    url?: string;
};

export type AllPokemonResult = {
    name: string;
    url: string;
};

export type PokemonsByTypeResult = {
    pokemon: {
        name: string;
        url: string;
    };
};