// pages/ProductCardWithCart.tsx
import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useList } from '../context/ListContext';

interface Product {
  id: number;
  nome: string;
  preco_De: number;
  descricao: string;
  imagem: string;
  qtdePadrao: number;
  categoria: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCardWithCart: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { lists, addToList } = useList();
  const [selectedList, setSelectedList] = useState<number | null>(null); // Estado para armazenar a lista selecionada

  const handleAddToCart = () => {
    const cartProduct = {
      id: product.id,
      nome: product.nome,
      preco_De: product.preco_De,
      qtdePadrao: 1,
      imagem: product.imagem,
      descricao: product.descricao,
      categoria: product.categoria
    };
    addToCart(cartProduct);
  };

  const handleAddToList = () => {
    if (selectedList !== null) {
      const listProduct = {
        id: product.id,
        nome: product.nome,
        preco_De: product.preco_De,
        qtdePadrao: 1,
        imagem: product.imagem,
        descricao: product.descricao,
        categoria: product.categoria
      };
      addToList(selectedList, listProduct); // Adiciona o produto à lista selecionada
    }
  };

  return (
    <div className="border p-8 rounded bg-orange-100 shadow-md">
      <img src={product.imagem} alt={product.nome} className="object-contain" />
      <h2 className="text-lg font-bold mt-4">{product.nome}</h2>
      <p className="text-gray-600">{product.descricao}</p>
      <p className="text-red-600 font-bold">${product.preco_De}</p>
      
      <button
        onClick={handleAddToCart}
        className="mt-4 bg-red-600 text-white p-2 rounded font-roboto hover:bg-red-700 transition-colors"
      >
        Adicionar ao Carrinho
      </button>

      {/* Dropdown para selecionar lista */}
      <div className="mt-4">
        <select
          value={selectedList || ''}
          onChange={(e) => setSelectedList(Number(e.target.value))}
          className="p-2 border rounded"
        >
          <option value="" disabled>
            Selecione uma lista
          </option>
          {lists.map((list) => (
            <option key={list.id} value={list.id}>
              {list.nome}
            </option>
          ))}
        </select>
      </div>

      {/* Botão para adicionar à lista */}
      <button
        onClick={handleAddToList}
        className="mt-4 ml-4 bg-blue-600 text-white p-2 rounded font-roboto hover:bg-blue-700 transition-colors"
      >
        Adicionar à Lista
      </button>
    </div>
  );
};

export default ProductCardWithCart;
