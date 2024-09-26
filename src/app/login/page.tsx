"use client";

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { AuthProvider, useAuth } from '../context/AuthContext'; // Importa o AuthProvider e o contexto

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const router = useRouter();
  const { login } = useAuth(); // Usa o login do contexto

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://w7startup.azurewebsites.net/api/Usuario/Login', {
        Email: email,
        Senha: senha,
      });

      if (response.status === 200) {
        login(); // Chama a função de login do AuthContext
        setMensagem('Login bem-sucedido!');
        router.push('/'); // Redireciona para a página inicial
      } else {
        setMensagem('Erro no login. Verifique suas credenciais e tente novamente.');
      }
    } catch (error) {
      console.error('Erro no Axios:', error);
      setMensagem('Erro no login. Tente novamente mais tarde.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6">
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2"></label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 placeholder-gray-500 text-gray-900"
          placeholder="Email"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 text-sm font-medium mb-2"></label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 placeholder-gray-500 text-gray-900"
          placeholder="Senha"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-yellow-500 text-black rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600"
      >
        Entrar
      </button>
      {mensagem && <p className="text-red-600 text-center mt-4">{mensagem}</p>}
      <div className="text-center mt-4">
        <Link href="/register" className="text-blue-500 hover:underline">
          Não tem uma conta? Cadastre-se aqui.
        </Link>
      </div>
    </form>
  );
};

const Login: React.FC = () => {
  const router = useRouter();

  return (
    <AuthProvider> {/* Envolve com o AuthProvider */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4">
        <div className="bg-orange-100 p-10 rounded-xl shadow-lg w-full max-w-md mx-auto border">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-red-600 hover:text-red-800 mb-8 font-semibold text-lg transition-colors duration-300"
            aria-label="Voltar à Página Inicial"
          >
            <FaArrowLeft size={20} className="mr-2" />
            Voltar à Página Inicial
          </button>
          <div className="flex justify-center mb-8">
            <img src="/LogoTedie.png" alt="Logo Tedie" className="h-20" />
          </div>
          <LoginForm /> {/* Componente de formulário de login */}
        </div>
      </div>
    </AuthProvider>
  );
};

export default Login;
