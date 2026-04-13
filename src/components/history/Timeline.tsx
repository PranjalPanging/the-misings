'use client';

import React from 'react';
import { motion } from 'framer-motion';

const events = [
    {
        era: "Ancestral Origins",
        detail: "Tracing descent from the Tani lineage in the Eastern Himalayas, where the foundation of Mising identity and the 'Abang' oral narratives began."
    },
    {
        era: "The Riverine Migration",
        detail: "A historic descent from the highlands to the Brahmaputra valley, transitioning into a river-based life and the mastery of the floodplains."
    },
    {
        era: "Mising Ba:né Kébang",
        detail: "The establishment of the MBK as the apex body of the Misings, serving as the ultimate guardian of the community's socio-cultural and political interests."
    },
    {
        era: "1995: Mising Autonomous Council",
        detail: "The formation of the MAC, granting the community self-governance to protect land rights and promote regional development."
    }
];

export default function Timeline() {
    return (
        <section className="py-24 relative bg-[#0D0B0A] overflow-hidden px-6">
            <div className="max-w-6xl mx-auto relative z-10">

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-[#FFB347] text-[10px] uppercase tracking-[0.5em] font-bold mb-16 text-center"
                >
                    Historical Milestones
                </motion.h2>

                <div className="relative">
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[1px] h-full bg-zinc-800" />

                    <div className="space-y-12 md:space-y-24">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                <div className="absolute left-[-4px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-20">
                                    <div className="h-2 w-2 rounded-full bg-[#FFB347] shadow-[0_0_8px_#FFB347]" />
                                </div>

                                <div className="pl-8 md:pl-0 md:w-1/2">
                                    <div className={`
                                        ${index % 2 !== 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}
                                    `}>
                                        <h3 className="text-xl md:text-2xl text-white font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                                            {event.era}
                                        </h3>
                                        <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-sm md:ml-0 md:mr-0 ml-0" style={{ fontFamily: 'Cambria, serif' }}>
                                            {event.detail}
                                        </p>
                                    </div>
                                </div>

                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}