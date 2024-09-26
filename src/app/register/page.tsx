"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const validatePassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\W).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    // Verifica se a senha é válida
    if (!validatePassword(senha)) {
      setError('A senha deve conter no mínimo 8 caracteres, uma letra maiúscula e um caractere especial.');
      return;
    }

    try {
      const response = await axios.post('https://w7startup.azurewebsites.net/api/Usuario/Register', {
        Email: email,
        Senha: senha,
      });

      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      } else {
        setError('Falha no cadastro. Por favor, tente novamente.');
      }
    } catch (error) {
      setError('Erro no cadastro. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-50 p-4">
      <div className="bg-orange-100 p-10 rounded-xl shadow-lg w-full max-w-md mx-auto border">
        <button
          onClick={() => router.push('/')}
          className="flex items-center text-red-600 hover:text-red-800 mb-8 font-semibold text-lg transition-colors duration-300"
          aria-label="Voltar à Página Inicial"
        >
          <FaArrowLeft size={20} className="mr-2" />
        </button>
        <h1 className="text-3xl font-bold mb-8 text-center text-red-600">Cadastre-se</h1>
        {error && <div className="mb-4 text-red-600 text-center font-medium">{error}</div>}
        {success && <div className="mb-4 text-green-600 text-center font-medium">Cadastro realizado com sucesso!</div>}
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 placeholder-gray-500 text-gray-900"
              placeholder="Digite seu e-mail"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 placeholder-gray-500 text-gray-900"
              placeholder="Crie uma senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
