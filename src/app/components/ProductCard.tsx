import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useList } from '../context/ListContext';
import ProductDetailModal from './ProductDetailModal';
import { motion } from 'framer-motion'; // Import Framer Motion

interface ApiProduct {
  id: number;
  nome: string;
  preco_De: number;
  descricao: string;
  imagem: string;
  qtdePadrao: number;
  categoria: string;
}

const ProductCard: React.FC<{ product: ApiProduct }> = ({ product }) => {
  const { addToCart } = useCart();
  const { lists, addToList } = useList();
  const [selectedList, setSelectedList] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    const cartProduct = {
      id: product.id,
      nome: product.nome,
      preco_De: product.preco_De,
      qtdePadrao: 1,
      imagem: product.imagem,
      descricao: product.descricao,
      categoria: product.categoria,
    };
    addToCart(cartProduct);
  };

  const handleAddToList = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedList !== null) {
      const listProduct = {
        id: product.id,
        nome: product.nome,
        preco_De: product.preco_De,
        qtdePadrao: 1,
        imagem: product.imagem,
        descricao: product.descricao,
        categoria: product.categoria,
      };
      addToList(selectedList, listProduct);
    }
  };

  return (
    <>
      <motion.div
        className="product-card flex flex-col p-6 border rounded-lg bg-customBeige shadow-lg h-full cursor-pointer transition-transform transform hover:scale-105"
        onClick={() => setIsModalOpen(true)}
        style={{ minHeight: '460px', display: 'flex', justifyContent: 'space-between' }}
        whileHover={{ scale: 1.05 }} // Mantém o hover
        initial={{ opacity: 0, y: 50 }} // Inicialmente fora da tela
        animate={{ opacity: 1, y: 0 }} // Animação de entrada
        transition={{ duration: 0.5, ease: 'easeInOut' }} // Suavização
      >
        {/* Imagem do Produto */}
        <div className="h-40 w-full flex items-center justify-center mb-4">
          <img
            src={product.imagem || '/Nimage.png'}
            alt={product.nome || 'Produto sem nome'}
            className="object-cover max-h-full max-w-full rounded-lg"
            onError={(e) => e.currentTarget.src = '/Nimage.png'}
          />
        </div>

        {/* Nome e Descrição */}
        <div className="flex-grow flex flex-col justify-between mb-4">
          <h2 className="text-lg font-medium text-center mb-2 line-clamp-2">
            {product.nome || 'Produto sem nome'}
          </h2>
        </div>

        {/* Preço do Produto */}
        <p className="text-gray-800 text-center text-xl font-semibold mb-4">
          {product.preco_De ? `R$${product.preco_De.toFixed(2)}` : 'Preço indisponível'}
        </p>

        {/* Select para Lista + Botão Adicionar */}
        <div className="flex flex-col items-center mb-4">
          <select
            value={selectedList || ''}
            onChange={(e) => setSelectedList(Number(e.target.value))}
            onClick={(e) => e.stopPropagation()}
            className="w-full p-2 border border-orange-500 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          <button
            onClick={handleAddToList}
            className="mt-2 px-4 py-2 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600 transition-colors"
          >
            Adicionar à Lista
          </button>
        </div>

        {/* Botão Adicionar ao Carrinho */}
        <button
          onClick={handleAddToCart}
          className="mt-auto w-full py-2 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-100 transition-colors font-semibold"
        >
          Adicionar ao Carrinho
        </button>
      </motion.div>

      {isModalOpen && (
        <ProductDetailModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
