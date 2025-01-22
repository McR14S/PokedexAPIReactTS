import { PokemonItem } from "../../interfaces/pokemonItem";

export interface navArrayLink {
    title: string;
    path: string;
    icon: React.ReactNode;
}

export interface NavListDrawerProps {
    navArrayLinks: navArrayLink[];

    cartItems: PokemonItem[];
    addToCart: (item: PokemonItem) => void;
    clearCart: () => void;
    NavLink: React.ElementType;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

