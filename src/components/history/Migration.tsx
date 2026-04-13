'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Migration() {
    return (
        <section className="py-24 border-b border-white/5 relative overflow-hidden bg-[#0D0B0A]">
            <div className="flex flex-col lg:flex-row gap-20 items-start">

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="lg:w-3/5 z-10"
                >
                    <h2
                        className="text-4xl md:text-6xl font-bold mb-10 tracking-tight text-white"
                        style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                        The Great <span className="text-[#FFB347]">Migration</span>
                    </h2>

                    <div
                        className="space-y-8 text-zinc-400 leading-relaxed text-lg md:text-xl"
                        style={{ fontFamily: 'Cambria, serif' }}
                    >
                        <p>
                            The saga of the Mising people is defined by a monumental descent from the
                            crests of the Eastern Himalayas to the heart of the Brahmaputra valley.
                            As a primary branch of the <span className="text-white border-b border-[#FFB347]/30">Tani group</span>,
                            our ancestors originally inhabited the sub-alpine tracts, governed by the
                            rigorous cycles of the high-altitude wilderness.
                        </p>

                        <p>
                            Driven by ecological shifts and the search for expansive, sustainable
                            land, the community began a strategic southward movement. Following
                            the deep-cut valleys of the <span className="text-white italic">Siang</span>,
                            <span className="text-white italic"> Lohit</span>, and <span className="text-white italic">Dibang</span>,
                            this journey across the foothills transformed a mountain-dwelling society
                            into one of the most resilient riverine cultures in the Indian subcontinent.
                        </p>

                        <p>
                            Upon reaching the plains, the Misings achieved a profound mastery over
                            the flood-prone riparian zones. Unlike other settlers who retreated
                            from the rising currents, the Misings chose to thrive alongside the
                            Brahmaputra, adapting their entire socio-economic fabric to the
                            rhythm of the waters and the richness of the river-borne silt.
                        </p>

                        <div className="pt-6">
                            <p className="text-[#FFB347]/80 text-sm md:text-base uppercase tracking-[0.2em] font-bold border-l-2 border-[#FFB347] pl-6">
                                From the mists of the north to the banks of the great river.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="lg:w-2/5 w-full relative group"
                >
                    <div className="relative aspect-[4/5] w-full bg-zinc-900/30 border border-white/10 rounded-sm overflow-hidden shadow-2xl backdrop-blur-sm">

                        <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3BfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
                            <div className="w-px h-24 bg-gradient-to-b from-transparent via-[#FFB347]/40 to-transparent mb-8" />
                            <h4 className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] font-bold mb-4">Topography of Descent</h4>
                            <p className="text-zinc-400 font-serif italic text-sm leading-relaxed max-w-[200px]">
                                Mapping the ancestral path from the Himalayan ridges to the Assam plains
                            </p>
                            <div className="mt-8 flex gap-2">
                                <div className="w-1 h-1 rounded-full bg-[#FFB347]/40" />
                                <div className="w-1 h-1 rounded-full bg-[#FFB347]/40" />
                                <div className="w-1 h-1 rounded-full bg-[#FFB347]/40" />
                            </div>
                        </div>

                        <div className="absolute top-6 left-6 w-6 h-6 border-t border-l border-white/20 group-hover:border-[#FFB347]/40 transition-colors duration-700" />
                        <div className="absolute bottom-6 right-6 w-6 h-6 border-b border-r border-white/20 group-hover:border-[#FFB347]/40 transition-colors duration-700" />
                    </div>

                    <div className="absolute -z-10 inset-0 bg-[#FFB347]/5 blur-[100px] rounded-full opacity-50" />
                </motion.div>
            </div>
        </section>
    );
}