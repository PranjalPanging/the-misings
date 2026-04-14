'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const TraditionalDress = () => {
    const [particles, setParticles] = useState<{ id: number; x: string; y: string; size: string; duration: number; delay: number; opacity: number }[]>([]);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMounted, setIsMounted] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    const mainImageUrl = "https://raw.githubusercontent.com/PranjalPanging/mising-heritage-assets/main/images/traditional-dress/jia-bharali/mising-miyum.jpg";

    useEffect(() => {
        setIsMounted(true);

        const generated = Array.from({ length: 35 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
            size: Math.random() * 2 + 1 + 'px',
            duration: Math.random() * 5 + 5,
            delay: Math.random() * 10,
            opacity: Math.random() * 0.5 + 0.2
        }));
        setParticles(generated);

        const handleMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePos({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen bg-[#0D0B0A] py-24 overflow-hidden"
            style={{ fontFamily: '"Times New Roman", Times, Cambria, serif' }}
        >
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #FFB347 0%, transparent 70%)',
                        left: mousePos.x - 300,
                        top: mousePos.y - 300,
                        filter: 'blur(80px)',
                    }}
                />

                {isMounted && particles.map((p) => (
                    <motion.div
                        key={p.id}
                        initial={{ left: p.x, top: '110%', opacity: 0 }}
                        animate={{
                            top: '-10%',
                            opacity: [0, p.opacity, 0],
                            x: [0, Math.random() * 50 - 25]
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            delay: p.delay,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            width: p.size,
                            height: p.size,
                            backgroundColor: '#FFB347',
                            borderRadius: '50%',
                            boxShadow: `0 0 10px #FFB347`,
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20 border-b border-white/5 pb-10"
                >
                    <p className="text-[#FFB347] text-[10px] md:text-xs uppercase tracking-[0.8em] font-bold mb-6">
                        Cultural Documentation
                    </p>
                    <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter uppercase leading-none">
                        Mising <span className="text-white/20 italic">Attire</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-7 group relative h-[500px] md:h-[700px] bg-black border border-white/10 overflow-hidden shadow-2xl">
                        <Image
                            src={mainImageUrl}
                            alt="Mising Heritage"
                            fill
                            className="object-cover object-top brightness-50 grayscale-[0.2] transition-all duration-[1.5s] group-hover:scale-105 group-hover:brightness-100 group-hover:grayscale-0"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)' }}
                            priority
                        />
                        <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(0,0,0,0.8)_100%)] opacity-70" />

                        <div className="absolute top-8 left-8 border-t-2 border-l-2 border-[#FFB347]/50 w-8 h-8 transition-all group-hover:w-12 group-hover:h-12" />
                        <div className="absolute bottom-8 right-8 border-b-2 border-r-2 border-[#FFB347]/50 w-8 h-8 transition-all group-hover:w-12 group-hover:h-12" />

                        <div className="absolute bottom-12 left-12">
                            <h3 className="text-white text-4xl font-bold tracking-tight mb-4 uppercase">Identity in Thread</h3>
                            <div className="h-[2px] w-24 bg-[#FFB347]" />
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-6"
                        >
                            <h4 className="text-[#FFB347] text-[10px] uppercase tracking-[0.5em] font-bold flex items-center gap-3">
                                <span className="w-8 h-px bg-[#FFB347]" />
                                River People of NorthEast India
                            </h4>
                            <p className="text-gray-200 text-2xl md:text-3xl leading-snug font-light italic">
                                Tracing the threads of migration. Discover how Mising attire evolved to mirror the rhythms of the Brahmaputra.
                            </p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                            <Link
                                href="/traditional-dress"
                                className="relative inline-block w-full py-5 bg-[#FFB347] text-black text-center font-bold text-xs uppercase tracking-[0.4em] overflow-hidden group/btn transition-colors hover:text-white"
                            >
                                <span className="relative z-10">Learn About Every Dress →</span>
                                <div className="absolute inset-0 bg-black translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TraditionalDress;