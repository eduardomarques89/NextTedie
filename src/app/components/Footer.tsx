import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      {/* Linha de separação */}
      <div className="h-1 bg-red-600 w-6/12 rounded mt-6" />

      <footer className="text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 text-xs">

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-400 transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-400 transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-400 transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* Direitos Autorais */}
            <div className="text-gray-600">
              &copy; 2023 Tedie by W7 | Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
