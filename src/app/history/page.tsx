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

            <div className="max-w-6xl mx-auto px-6 pt-40 pb-20 md:pt-52">
                <header className="relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#FFB347]/5 blur-[100px] pointer-events-none" />

                    <h1
                        className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
                        style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                        History & <span className="text-[#FFB347]">Origins</span>
                    </h1>

                    <div className="w-24 h-[1px] bg-[#FFB347]/40 mb-8" />

                    <p
                        className="text-xl md:text-3xl text-zinc-500 max-w-3xl leading-relaxed italic font-light"
                        style={{ fontFamily: 'Cambria, serif' }}
                    >
                        A chronicle of the Mising Réngam—tracing our ancestral path from the
                        highland mists to the rhythmic heart of the river.
                    </p>
                </header>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-32 space-y-32">

                <section id="migration">
                    <Migration />
                </section>

                <section id="etymology">
                    <Etymology />
                </section>

                <section id="timeline">
                    <Timeline />
                </section>

            </div>

            <Footer />
        </main>
    );
}