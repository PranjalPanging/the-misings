'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 font-serif ${scrolled ? 'py-4 bg-[#0D0B0A]/80 backdrop-blur-md border-b border-white/5' : 'py-8 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

                <Link href="/" className="group">
                    <h1 className="text-2xl font-bold text-white tracking-tight uppercase transition-all duration-300 group-hover:text-[#FFB347]">
                        The Misings
                    </h1>
                    <p className="text-[10px] italic tracking-wide text-[#FFB347] opacity-90">
                        Riverine people of NorthEast India
                    </p>
                </Link>

                <div className="hidden md:flex items-center space-x-12 text-[15px] tracking-wide font-medium">
                    <Link href="/folklore" className="text-gray-300 hover:text-[#FFB347] transition-colors">
                        Folklore
                    </Link>
                    <Link href="/rituals" className="text-gray-300 hover:text-[#FFB347] transition-colors">
                        Rituals
                    </Link>
                    <Link href="/gallery" className="text-gray-300 hover:text-[#FFB347] transition-colors">
                        Dress
                    </Link>
                    <Link href="/history" className="text-gray-300 hover:text-[#FFB347] transition-colors">
                        History
                    </Link>
                </div>

                <div className="md:hidden flex flex-col space-y-1.5 cursor-pointer">
                    <div className="w-6 h-[1px] bg-[#FFB347]" />
                    <div className="w-4 h-[1px] bg-[#FFB347] ml-auto" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;