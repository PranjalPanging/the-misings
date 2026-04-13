'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0D0B0A] font-serif">

            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3BfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="relative flex flex-col items-center">

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-center"
                >
                    <motion.h2
                        animate={{
                            textShadow: [
                                "0 0 0px rgba(255,255,255,0)",
                                "0 0 20px rgba(255,179,71,0.2)",
                                "0 0 0px rgba(255,255,255,0)"
                            ],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3,
                            ease: "easeInOut"
                        }}
                        className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase"
                    >
                        The Misings
                    </motion.h2>

                    <p className="text-[#FFB347] text-[10px] uppercase tracking-[1em] mt-6 font-bold opacity-60">
                        Riverine People of NorthEast India
                    </p>
                </motion.div>

                <div className="mt-20 relative flex items-center justify-center">
                    <motion.div
                        className="absolute w-12 h-12 border border-[#FFB347]/30 rounded-full"
                        animate={{
                            scale: [1, 2],
                            opacity: [0.5, 0]
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeOut"
                        }}
                    />
                    <div className="w-1.5 h-1.5 bg-[#FFB347] rounded-full shadow-[0_0_10px_#FFB347]" />
                </div>

                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ delay: 1 }}
                    className="mt-12 text-[9px] text-gray-400 tracking-[0.4em] uppercase italic"
                >
                    Mising Réngam Írroi
                </motion.span>
            </div>

            <motion.div
                animate={{
                    opacity: [0.03, 0.08, 0.03],
                    scale: [1, 1.1, 1]
                }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFB347] blur-[150px] rounded-full pointer-events-none"
            />
        </div>
    );
}