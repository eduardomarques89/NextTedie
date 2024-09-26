"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    nome: string;
    preco_De: number;
    descricao: string;
    imagem: string;
    qtdePadrao:number;
    categoria:string;
}

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const loadCart = async () => {
    try {
      const response = await axios.get('https://w7startup.azurewebsites.net/api/Produtos');
      const products = response.data.products.map((item: any) => ({

      }));
      setCart(products);
    } catch (error) {
      console.error('Erro ao carregar o carrinho:', error);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (product: Product) => {
    try {
      const response = await axios.post('https://w7startup.azurewebsites.net/api/Produtos', {
        products: [{ productid: product.id, quantity: product.qtdePadrao }],
      });
      setCart((prevCart) => [...prevCart, product]);
    } catch (error) {
      console.error('Erro ao adicionar ao carrinho:', error);
    }
  };

  const removeFromCart = async (id: number) => {
    try {
      await axios.delete('https://w7startup.azurewebsites.net/api/Carrinho/RemoverItem/{id}');
      setCart(cart.filter(product => product.id !== id));
    } catch (error) {
      console.error('Erro ao remover do carrinho:', error);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete('https://w7startup.azurewebsites.net/api/Carrinho/LimparCarrinho');
      setCart([]);
    } catch (error) {
      console.error('Erro ao limpar o carrinho:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
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
