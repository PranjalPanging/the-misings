import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#0D0B0A] text-[#F5F5F5] pt-24 pb-12 px-8 overflow-hidden font-serif">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3BfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-20">

                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-bold text-white tracking-tight uppercase">
                                The Misings
                            </h2>
                            <p className="text-[#FFB347] text-sm italic mt-2 tracking-wide font-medium">
                                River people of NorthEast India
                            </p>
                        </div>
                        <p className="text-gray-400 text-[15px] leading-relaxed max-w-xs italic opacity-85">
                            A digital home for everything Mising. Discover our stories,
                            explore our traditions, and experience the heart of the river people.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-[#FFB347] font-bold uppercase tracking-[0.2em] text-[11px] border-b border-white/10 pb-2">
                            Navigation
                        </h4>
                        <nav className="flex flex-col space-y-4 text-[15px]">
                            {['Folklore', 'Rituals', 'Traditional Dress', 'History'].map((item) => (
                                <Link
                                    key={item}
                                    href={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-gray-300 hover:text-white transition-colors w-fit"
                                >
                                    {item}
                                </Link>
                            ))}
                        </nav>
                    </div>

                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-[12px] text-gray-500 tracking-widest uppercase">
                    <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                        <p>© {currentYear} The Misings.</p>
                        <span className="hidden md:block text-white/20">|</span>
                        <p className="text-[#FFB347] italic tracking-[0.2em] normal-case font-medium">
                            Mising Réngam Írroi
                        </p>
                    </div>

                    <div className="flex items-center space-x-12">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;