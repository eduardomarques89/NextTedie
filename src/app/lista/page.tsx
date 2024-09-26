"use client"; // Garantir que está rodando no lado do cliente

import React, { useState } from 'react';
import { ListProvider } from '../context/ListContext'; // Importa o ListProvider
import { useList } from '../context/ListContext'; // Importa o hook useList
import Navbar from '../components/Navbar';

// Componente ListPage com a lógica da lista
const ListPage: React.FC = () => {
  const { lists, createList, deleteList, removeFromList } = useList(); // Funções do contexto
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');

  // Função para criar uma nova lista
  const handleCreateList = () => {
    if (listName && listDescription) {
      createList(listName, listDescription);
      setListName('');
      setListDescription('');
    } else {
      alert('Preencha todos os campos para criar uma lista');
    }
  };

  return (
    <div className="p-16">
      <h1 className="text-2xl text-yellow-400 font-bold mb-4">Minhas Listas</h1>

      {/* Formulário para criar nova lista */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Nome da lista"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          className="border p-2 mb-2 w-full rounded"
        />
        <textarea
          placeholder="Descrição da lista"
          value={listDescription}
          onChange={(e) => setListDescription(e.target.value)}
          className="border p-2 w-full rounded"
        />
        <button
          onClick={handleCreateList}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-yellow-400"
        >
          Criar Lista
        </button>
      </div>

      {/* Lista de listas criadas */}
      {lists.length > 0 ? (
        lists.map((list) => (
          <div key={list.id} className="border p-4 mb-4 rounded">
            <h2 className="text-xl font-bold">{list.nome}</h2>
            <p>{list.descricao}</p>

            {/* Produtos dentro da lista */}
            <div className="mt-4">
              <h3 className="font-semibold">Produtos na lista:</h3>
              {list.products.length > 0 ? (
                list.products.map((product) => (
                  <div key={product.id} className="flex justify-between items-center mt-2">
                    <span>{product.nome}</span>
                    <button
                      onClick={() => removeFromList(list.id, product.id)}
                      className="text-red-500"
                    >
                      Remover
                    </button>
                  </div>
                ))
              ) : (
                <p>Sem produtos nesta lista.</p>
              )}
            </div>

            {/* Botão para deletar a lista */}
            <button
              onClick={() => deleteList(list.id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Deletar Lista
            </button>
          </div>
        ))
      ) : (
        <p>Você ainda não criou nenhuma lista.</p>
      )}
    </div>
  );
};

// Envolver o componente ListPage no ListProvider
const Page: React.FC = () => {
  return (
    <ListProvider>
        <Navbar onToggleVideo={function (): void {
              throw new Error('Function not implemented.');
          } }/>
      <ListPage />
    </ListProvider>
  );
};

export default Page;
