'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    const [particles, setParticles] = useState<any[]>([]);

    useEffect(() => {
        const generatedParticles = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            size: Math.random() * 3 + 1 + 'px',
            delay: Math.random() * 5,
            duration: Math.random() * 10 + 15,
            opacity: Math.random() * 0.5 + 0.2,
        }));
        setParticles(generatedParticles);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-[#0D0B0A] overflow-hidden font-serif pt-32 pb-20">

            <div className="absolute inset-0 opacity-[0.06] pointer-events-none z-10"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3BfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(at_center,_transparent,_#FFB347_10%,_transparent_30%,_#FFB347_50%,_transparent)] blur-[100px]"
                    style={{ animation: 'riverFlow 40s linear infinite' }} />
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        initial={{ left: particle.x, top: particle.y, opacity: 0 }}
                        animate={{
                            y: [0, -200],
                            opacity: [0, particle.opacity, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            repeat: Infinity,
                            delay: particle.delay,
                            ease: 'linear',
                        }}
                        style={{
                            position: 'absolute',
                            width: particle.size,
                            height: particle.size,
                            borderRadius: '50%',
                            backgroundColor: '#FFB347',
                            boxShadow: '0 0 10px #FFB347, 0 0 20px #FFB347',
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-30 text-center">
                <div className="mb-6">
                    <p className="text-[#FFB347] text-[10px] md:text-[14px] uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold leading-relaxed">
                        River People of NorthEast India
                    </p>
                </div>

                <h1 className="text-4xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[1.1] md:leading-[0.9]">
                    THE SPIRIT OF <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30">
                        THE RIVER PEOPLE
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-gray-400 text-base md:text-xl italic leading-relaxed mb-12 opacity-90 font-light px-4">
                    "Every weave a history, every song a current." <br className="hidden md:block" />
                    Enter the digital home of Mising culture, heritage, and the evolving life along the Brahmaputra.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link
                        href="/folklore"
                        className="w-full md:w-auto px-10 py-4 bg-[#FFB347] text-black font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:scale-105"
                    >
                        Explore Traditions
                    </Link>
                    <Link
                        href="/gallery"
                        className="w-full md:w-auto px-10 py-4 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
                    >
                        View Gallery
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-24 bg-gradient-to-b from-[#FFB347] to-transparent z-30" />
        </section>
    );
};

export default Hero;