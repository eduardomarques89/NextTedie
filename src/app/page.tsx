"use client";

// src/app/page.tsx
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Search from './components/Search';
import { ListProvider } from './context/ListContext';
import { AuthProvider } from './context/AuthContext';


const Home: React.FC = () => {
  const router = useRouter();
  const [isVideoVisible, setVideoVisible] = useState(false);

  const toggleVideo = () => {
    setVideoVisible((prev) => !prev);
  };

  return (
    <div>
      <AuthProvider>      
        <ListProvider>
      <CartProvider>
        <Navbar onToggleVideo={toggleVideo} />
        <Search />
      </CartProvider>
      </ListProvider>
      </AuthProvider>
    </div>
  );
};

export default Home;
