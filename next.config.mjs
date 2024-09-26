/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ativa a exportação estática
  images: {
    unoptimized: true, // Desativa otimização de imagens para exportação estática
  },
  trailingSlash: true, // URLs terão uma barra no final para garantir compatibilidade
  async rewrites() {
    return [
      {
        source: '/api/produtos',
        destination: 'https://w7startup.azurewebsites.net/api/Produtos',
      },
    ];
  },
};

// Exportação em ES Modules (mjs)
export default nextConfig;
