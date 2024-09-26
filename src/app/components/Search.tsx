import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Footer from './Footer';

interface ApiProduct {
  id: number;
  nome: string;
  preco_De: number;
  descricao: string;
  imagem: string;
  qtdePadrao: number;
  categoria: string;
}

const Search: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ApiProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleSearch = async () => {
      if (query.trim() === '') {
        setResults([]); 
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await axios.get('https://w7startup.azurewebsites.net/api/Produtos', {
          params: { query },
        });

        console.log('API Response:', response.data);

        if (Array.isArray(response.data)) {
          setResults(response.data);
        } else {
          setError('Erro ao buscar produtos. Resposta da API inválida.');
        }
      } catch (error) {
        setError('Erro ao buscar produtos. Por favor, tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    handleSearch();
  }, [query]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-customAmber">
      <div className="flex flex-col items-center justify-center w-full mt-[50px] mb-8">
        <div className="p-4 rounded-lg w-full max-w-md text-center">
          <img src="/simples_assim.png" alt="Simples Assim" className="mx-auto block w-2/4 height-auto" />
          <input
            id="search-input"
            name="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-3 bg-gray-200 rounded-lg"
            placeholder="Conte-me o que precisa!"
          />
        </div>
      </div>

      {/* Seção de resultados de busca */}
      <main className="w-full flex-grow">
        <div className="container mx-auto px-4">
          {query.trim() !== '' && loading && (
            <div className="flex justify-center items-center h-64">
              <video
                autoPlay
                loop
                muted
                className="w-4/6 h-full object-cover"
              >
                <source src="/vdo_tedie.mp4" type="video/mp4" /> {/* Altere para o caminho do seu vídeo */}
                Seu navegador não suporta a tag de vídeo.
              </video>
            </div>
          )}
          {query.trim() !== '' && error && (
            <p className="text-center text-red-500">{error}</p>
          )}
          {query.trim() !== '' && !loading && results.length === 0 && (
            <p className="text-center text-gray-500">Nenhum produto encontrado.</p>
          )}
          {query.trim() !== '' && !loading && results.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
