'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="relative min-h-screen flex items-center justify-center bg-[#0D0B0A] px-8 overflow-hidden font-serif text-center">

            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3BfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative z-10 max-w-xl">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-12 flex justify-center"
                >
                    <div className="relative w-20 h-20 flex items-center justify-center border border-white/10 rounded-full">
                        <div className="w-1.5 h-1.5 bg-[#FFB347] rounded-full animate-ping" />
                        <div className="absolute inset-0 border border-[#FFB347]/20 rounded-full scale-150 opacity-0 animate-pulse" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase mb-6">
                        A Current <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFB347] to-[#FFB347]/40">
                            Has Drifted
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-400 text-base md:text-lg italic leading-relaxed mb-12"
                >
                    The digital path you were following has encountered an unexpected turn.
                    The river is vast, and sometimes the connection is lost.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <button
                        onClick={() => reset()}
                        className="px-10 py-4 bg-[#FFB347] text-black font-bold text-sm tracking-widest uppercase hover:scale-105 transition-all duration-500 shadow-[0_0_30px_rgba(255,179,71,0.2)]"
                    >
                        Try to Reconnect
                    </button>

                    <a
                        href="/"
                        className="px-10 py-4 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-500"
                    >
                        Return Home
                    </a>
                </motion.div>

                <p className="mt-16 text-[9px] text-gray-700 tracking-[0.4em] uppercase">
                    Error reference: {error.digest || 'Internal Stream Error'}
                </p>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 blur-[150px] rounded-full pointer-events-none" />
        </main>
    );
}