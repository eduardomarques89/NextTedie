"use client"; // Adicione isso no início do arquivo

import React from 'react';
import { useCart } from '../context/CartContext'; // Ajuste o caminho conforme necessário
import { FaTrash } from 'react-icons/fa'; // Ícone para o botão de remover
import { useRouter } from 'next/navigation'; // Use 'next/navigation' para roteamento
import { useAuth } from '../context/AuthContext';

const CartDropdown: React.FC = () => {
  const { cart, removeFromCart, clearCart, getTotalAmount } = useCart();
  const { isAuthenticated } = useAuth(); // Supondo que isAuthenticated retorna true se o usuário está logado
  const router = useRouter();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      // Se o usuário não estiver autenticado, redireciona para a página de login
      router.push('/login');
    } else {
      // Se estiver logado, redireciona para a página de checkout
      router.push('/checkout');
    }
  };

  return (
    <div className="dropdown-menu w-96 max-w-[80vw] bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
      <div className="p-6 h-auto max-h-[calc(100vh-10rem)] overflow-y-auto">
        <h4 className="text-3xl font-semibold mb-4 border-b border-gray-300 pb-2">Carrinho</h4>
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Seu carrinho está vazio.</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id} className="flex items-start py-4 border-b border-gray-300">
                <img
                  src={product.imagem}
                  alt={product.nome}
                  className="w-24 h-24 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <p className="text-lg font-medium mb-1">{product.nome}</p>
                  <p className="text-sm text-gray-600 mb-2">Quantidade: {product.qtdePadrao}</p>
                  <p className="text-md font-semibold text-gray-800"> ${product.preco_De}</p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Remover item"
                >
                  <FaTrash size={24} />
                </button>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-300">
              <p className="text-xl font-semibold text-gray-800 mb-2">Total: ${getTotalAmount()}</p>
              <button
                onClick={handleCheckout} // Usa a função de checkout
                className="w-full py-3 bg-yellow-400 text-red-600 rounded-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
              >
                Finalizar Compra
              </button>
              <button
                onClick={clearCart}
                className="w-full py-3 mt-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400 transition-transform transform hover:scale-105"
              >
                Limpar Carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
