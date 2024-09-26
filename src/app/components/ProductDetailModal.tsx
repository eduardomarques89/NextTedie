import React from 'react';
import { useCart } from '../context/CartContext'; // Ajuste o caminho conforme necessário

interface ProductDetailModalProps {
  product: {
    id: number;
    nome: string;
    preco_De: number;
    descricao: string;
    imagem: string;
    qtdePadrao:number;
    categoria:string;
  };
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();

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
    onClose(); // Fecha o modal após adicionar ao carrinho
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          &times;
        </button>
        <img src={product.imagem} alt={product.nome} className="w-full h-60 object-contain mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.nome}</h2>
        <p className="text-gray-700 mb-2">Preço: ${product.preco_De.toFixed(2)}</p>
        <p className="text-gray-700 mb-2">categoria: {product.categoria}</p>
        <p className="text-gray-600 mb-4">{product.descricao}</p>
        <button
          onClick={handleAddToCart}
          className="w-full py-2 bg-yellow-400 text-red-600 rounded-lg hover:bg-yellow-500 transition-colors"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetailModal;
