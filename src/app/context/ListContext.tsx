import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ListProduct {
  id: number;
  nome: string;
  preco_De: number;
  qtdePadrao: number;
  imagem: string;
  descricao: string;
  categoria: string;
}

interface ProductList {
  id: number;
  nome: string;
  descricao: string;
  products: ListProduct[];
}

interface ListContextType {
  lists: ProductList[];
  createList: (nome: string, descricao: string) => void;
  addToList: (listId: number, product: ListProduct) => void;
  removeFromList: (listId: number, productId: number) => void;
  deleteList: (listId: number) => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const useList = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useList deve ser usado dentro de ListProvider');
  }
  return context;
};

export const ListProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lists, setLists] = useState<ProductList[]>([]);

  // Criar nova lista
  const createList = (nome: string, descricao: string) => {
    const newList = {
      id: lists.length + 1, // Para manter um id único
      nome,
      descricao,
      products: [],
    };
    setLists((prevLists) => [...prevLists, newList]);
  };

  // Adicionar produto à lista específica
  const addToList = (listId: number, product: ListProduct) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, products: [...list.products, product] }
          : list
      )
    );
  };

  // Remover produto de uma lista específica
  const removeFromList = (listId: number, productId: number) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list.id === listId
          ? { ...list, products: list.products.filter((p) => p.id !== productId) }
          : list
      )
    );
  };

  // Excluir uma lista
  const deleteList = (listId: number) => {
    setLists((prevLists) => prevLists.filter((list) => list.id !== listId));
  };

  return (
    <ListContext.Provider value={{ lists, createList, addToList, removeFromList, deleteList }}>
      {children}
    </ListContext.Provider>
  );
};
