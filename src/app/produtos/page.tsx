'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Produtos: React.FC = () => {
  const [isVideoVisible, setVideoVisible] = useState(false);

  const toggleVideo = () => {
    setVideoVisible((prev) => !prev);
  };

  return (
    <>
      <Navbar onToggleVideo={toggleVideo} />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="p-10 rounded-xl my-14 max-w-7xl mx-auto">
          {/* Banners */}
          <div className="grid items-center my-14 justify-center grid-cols-1 gap-10">
            {/* Banner 1 */}
            <div className="relative group">
              <Link href="/categoria1">
                <Image
                  src="/banner1.png"
                  alt="Categoria 1"
                  width={900}  // Ajuste de largura
                  height={150} // Ajuste de altura
                  className="rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              </Link>
            </div>

            {/* Banner 2 */}
            <div className="relative group">
              <Link href="/categoria2">
                <Image
                  src="/banner2.png"
                  alt="Categoria 2"
                  width={900}  // Ajuste de largura
                  height={150} // Ajuste de altura
                  className="rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              </Link>
            </div>

            {/* Banner 3 */}
            <div className="relative group">
              <Link href="/categoria3">
                <Image
                  src="/banner3.png"
                  alt="Categoria 3"
                  width={900}  // Ajuste de largura
                  height={150} // Ajuste de altura
                  className="rounded-xl transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Produtos;
