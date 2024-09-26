'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Marcas: React.FC = () => {

    const [isVideoVisible, setVideoVisible] = useState(false);

    const toggleVideo = () => {
        setVideoVisible((prev) => !prev);
    };

    return (
        <>
            <Navbar onToggleVideo={toggleVideo} />
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <div className="p-10 rounded-xl my-10 w-full max-w-7xl mx-auto">
                    {/* Título */}
                    <h1 className="text-3xl text-yellow-400 font-bold mb-10">MARCAS</h1>

                    {/* Grade de marcas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {/* Marca 1 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca1">
                                <Image
                                    src="/marca1.png"
                                    alt="Marca 1"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 2 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca2">
                                <Image
                                    src="/marca2.png"
                                    alt="Marca 2"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 3 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca3">
                                <Image
                                    src="/marca3.png"
                                    alt="Marca 3"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 4 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca4">
                                <Image
                                    src="/marca4.png"
                                    alt="Marca 4"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 5 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca5">
                                <Image
                                    src="/marca5.png"
                                    alt="Marca 5"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 6 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca6">
                                <Image
                                    src="/marca6.png"
                                    alt="Marca 6"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 7 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca7">
                                <Image
                                    src="/marca2.png"
                                    alt="Marca 7"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 8 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca8">
                                <Image
                                    src="/marca6.png"
                                    alt="Marca 8"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>

                        {/* Marca 9 */}
                        <div className="flex justify-center items-center">
                            <Link href="/marca9">
                                <Image
                                    src="/marca4.png"
                                    alt="Marca 9"
                                    width={200}
                                    height={200}
                                    className="rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Marcas;
