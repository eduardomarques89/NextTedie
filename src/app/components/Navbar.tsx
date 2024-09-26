"use client";

import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaHome, FaSignInAlt, FaUserPlus, FaBars, FaTimes } from 'react-icons/fa';
import CartDropdown from './CartDropdown';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
  onToggleVideo: () => void; // Função para alternar a visibilidade do vídeo
}

const Navbar: React.FC<NavbarProps> = ({ onToggleVideo }) => {
  const [dropdown, setDropdown] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verifica o estado de login com sessionStorage
    const isUserLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isUserLoggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []); // Verifica o estado de login ao carregar a página

  const toggleDropdown = (menu: string) => {
    setDropdown(dropdown === menu ? null : menu);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn'); // Remove o estado de login
    setIsLoggedIn(false);
    router.push('/login'); // Redireciona para a página de login
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <nav className="bg-customAmber fixed w-full top-0 left-0 z-30 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center py-2 relative">
          <div className="flex items-center">
            <button className="lg:hidden text-gray-800 hover:text-red-600 transition-colors" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
            <Link href="/">
              <img src="/logoicon_tedie.png" alt="Logo" className="h-16 ml-0" />
            </Link>
          </div>

          <div className="hidden lg:flex flex-grow justify-center space-x-12">
            {/* Seções centralizadas */}
            <Link href="/produtos" className="text-red-600 hover:text-yellow-400 font-semibold transition-colors flex items-center space-x-4">
              <span>PRODUTOS</span>
            </Link>
            <Link href="/marcas" className="text-red-600 hover:text-yellow-400 font-semibold transition-colors flex items-center space-x-4">
              <span>MARCAS</span>
            </Link>
            <Link href="/sobre" className="text-red-600 hover:text-yellow-400 font-semibold transition-colors flex items-center space-x-4">
              <span>SOBRE NÓS</span>
            </Link>
          </div>

          <div className={`lg:flex items-center space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <button onClick={toggleCart} className="text-red-600 hover:text-yellow-400 p-2 lg:p-4" aria-label="Carrinho">
                  <FaShoppingCart size={25} />
                </button>
                {isCartOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md w-56 z-40">
                    <CartDropdown />
                  </div>
                )}
              </div>
            </div>
            {/* Login e logout */}
            {isLoggedIn ? (
              <div className="relative">
                <button onClick={() => toggleDropdown('user')} className="flex items-center text-red-600 hover:text-red-600 p-2 lg:p-4" aria-label="Menu de usuário">
                  <FaHome size={25} />
                </button>
                {dropdown === 'user' && (
                  <div className="absolute right-0 mt-2 bg-red-600 shadow-lg rounded-md transition-all duration-300 z-40">
                    <Link href="/" className="block px-4 py-2 text-white hover:bg-red-700">Home</Link>
                    <Link href="/perfil" className="block px-4 py-2 text-white hover:bg-red-700">Conta</Link>
                    <Link href="/lista" className="block px-4 py-2 text-white hover:bg-red-700">Listas</Link>
                    <button onClick={handleLogout} className="block px-4 py-2 text-white hover:bg-red-700">Sair</button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-6">
                <Link href="/login" className="text-red-600 hover:text-yellow-400 transition-colors flex items-center space-x-2" aria-label="Login">
                  <FaSignInAlt size={25} />
                </Link>
                <Link href="/register" className="text-red-600 hover:text-yellow-400 transition-colors flex items-center space-x-2" aria-label="Cadastro">
                  <FaUserPlus size={25} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="pt-20"></div>
    </>
  );
};

export default Navbar;
