// src/context/CartContext.tsx

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';

export interface Product {
  id: number;
  nome: string;
  preco_De: number;
  descricao: string;
  imagem: string;
  qtdePadrao: number;
  categoria: string;
}

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getTotalAmount: () => number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Função para carregar o carrinho do local storage
  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  };

  useEffect(() => {
    loadCartFromLocalStorage();
  }, []);

  // Função para salvar o carrinho no local storage
  const saveCartToLocalStorage = (cart: Product[]) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const addToCart = async (product: Product) => {
    try {
      // Aqui você pode chamar uma API para adicionar o produto ao backend se necessário
      await axios.post('https://w7startup.azurewebsites.net/api/Carrinho/AdicionarItem', product);

      setCart((prevCart) => {
        const existingProduct = prevCart.find((item) => item.id === product.id);
        if (existingProduct) {
          const updatedCart = prevCart.map((item) =>
            item.id === product.id ? { ...item, qtdePadrao: item.qtdePadrao + product.qtdePadrao } : item
          );
          saveCartToLocalStorage(updatedCart);
          return updatedCart;
        } else {
          const updatedCart = [...prevCart, product];
          saveCartToLocalStorage(updatedCart);
          return updatedCart;
        }
      });
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((product) => product.id !== id);
      saveCartToLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const getTotalAmount = () => {
    return cart.reduce((total, item) => total + item.preco_De * item.qtdePadrao, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
