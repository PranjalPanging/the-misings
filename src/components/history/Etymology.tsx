import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Migration from '@/components/history/Migration';
import Etymology from '@/components/history/Etymology';
import Timeline from '@/components/history/Timeline';

export const metadata: Metadata = {
    title: 'History & Origins | The Misings',
    description: 'The journey of the river people from the Eastern Himalayas to the Brahmaputra valley.',
};

export default function HistoryPage() {
    return (
        <main className="min-h-screen bg-[#0D0B0A] text-zinc-300 selection:bg-[#FFB347] selection:text-black">
            <Navbar />

            <header className="relative pt-48 pb-20 md:pt-64 md:pb-32 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="w-12 h-[1px] bg-[#FFB347] mb-8 opacity-60" />

                    <h1
                        className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-10 tracking-tighter leading-[0.85]"
                        style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                        History & <br />
                        <span className="text-[#FFB347] opacity-90">Origins</span>
                    </h1>

                    <p
                        className="text-xl md:text-3xl text-zinc-500 max-w-3xl leading-relaxed italic font-light"
                        style={{ fontFamily: 'Cambria, serif' }}
                    >
                        A chronicle of the Mising Réngam—tracing our ancestral path from the
                        highland mists to the rhythmic heart of the river.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
            </header>

            <div className="max-w-6xl mx-auto px-6 pb-40 space-y-40">

                <section id="migration" className="scroll-mt-32">
                    <Migration />
                </section>

                <section id="etymology" className="scroll-mt-32">
                    <Etymology />
                </section>

                <section id="timeline" className="scroll-mt-32">
                    <div className="pt-10 border-t border-white/5">
                        <Timeline />
                    </div>
                </section>

                <div className="py-20 text-center border-t border-white/5">
                    <p className="text-[#FFB347] text-[10px] uppercase tracking-[0.6em] mb-8 font-bold">Heritage</p>
                    <h2 className="text-3xl md:text-5xl text-white italic opacity-80" style={{ fontFamily: 'Times New Roman, serif' }}>
                        "Man of the Soil, Spirit of the Water."
                    </h2>
                </div>
            </div>

            <Footer />
        </main>
    );
}