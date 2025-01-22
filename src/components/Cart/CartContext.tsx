// CartContext.tsx
import React, { createContext, useContext, useState } from "react";
import { PokemonItem } from "../../interfaces/pokemonItem";

// Creamos el contexto para el carrito
interface CartContextType {
  cartItems: PokemonItem[];
  addToCart: (item: PokemonItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Proveedor del contexto
interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<PokemonItem[]>([]);

  const addToCart = (item: PokemonItem) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar el contexto
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
