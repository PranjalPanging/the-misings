'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <main className="relative min-h-screen flex items-center justify-center bg-[#0D0B0A] overflow-hidden font-serif selection:bg-[#FFB347] selection:text-black">

            <div className="absolute inset-0 opacity-[0.05] pointer-events-none z-10"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3BfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[conic-gradient(at_center,_transparent,_#FFB347_10%,_transparent_40%,_#FFB347_60%,_transparent)] blur-[120px]"
                    style={{ animation: 'riverFlow 60s linear infinite' }} />
            </div>

            <div className="relative z-30 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-8"
                >
                    <span className="text-[#FFB347] text-xs uppercase tracking-[0.8em] font-bold border border-[#FFB347]/30 px-4 py-1">
                        Error 404
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-none"
                    style={{ fontFamily: 'Times New Roman, serif' }}
                >
                    LOST IN THE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/20">
                        CURRENT
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-md mx-auto text-zinc-400 text-lg italic leading-relaxed mb-12"
                    style={{ fontFamily: 'Cambria, serif' }}
                >
                    The path you are looking for has been washed away by the tide.
                    Let the river guide you back to the familiar banks.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                >
                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center px-12 py-4 bg-transparent border border-white/20 text-white font-bold text-xs tracking-[0.4em] uppercase overflow-hidden transition-all duration-500 hover:border-[#FFB347]/50"
                    >
                        <span className="relative z-10 group-hover:text-[#FFB347] transition-colors duration-500">Return to Origin</span>
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </Link>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-gradient-to-b from-[#FFB347]/50 to-transparent z-30" />

            <style jsx global>{`
                @keyframes riverFlow {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
            `}</style>
        </main>
    );
}