'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SobreNos: React.FC = () => {
    
    const [isVideoVisible, setVideoVisible] = useState(false);

    const toggleVideo = () => {
      setVideoVisible((prev) => !prev);
    };
  
    return (
      <>
        <Navbar onToggleVideo={toggleVideo} />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="p-10 rounded-xl my-14 w-full max-w-7xl mx-auto">
          {/* Imagem Central */}
          <div className="flex justify-center mb-14">
            <Image
              src="/tedie3.png"  // Substitua pelo caminho da imagem
              alt="Sobre Nós"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>

          {/* Banners */}
          <div className="w-full flex flex-col">
            {/* Banner 1 */}
            <div className="relative group w-full">
                <Image
                  src="/bannerSA.png"  // Substitua pelo caminho do banner 1
                  alt="Banner 1"
                  width={1200}  // Ajuste o valor conforme necessário
                  height={100}  // Ajuste o valor conforme necessário
                  className=" rounded-t-lg transition-transform duration-300"
                />
            </div>

            {/* Banner 2 */}
            <div className="relative group w-full rounded-b-lg">
                <Image
                  src="/bannerSB.png"  // Substitua pelo caminho do banner 2
                  alt="Banner 2"
                  width={1200}
                  height={100}
                  className="transition-transform duration-300 rounded-b-lg"
                />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SobreNos;
