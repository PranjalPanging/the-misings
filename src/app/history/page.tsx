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
        <main className="min-h-screen bg-[#0A0A0A] text-zinc-300 selection:bg-[#EAB308] selection:text-black">
<Navbar />
            <div className="max-w-6xl mx-auto px-6 pt-24 pb-12">
                <header className="border-b border-zinc-800 pb-10">
                    <h1
                        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                        style={{ fontFamily: 'Times New Roman, serif' }}
                    >
                        History & <span className="text-[#EAB308]">Origins</span>
                    </h1>
                    <p
                        className="text-xl md:text-2xl text-zinc-500 max-w-2xl leading-relaxed italic"
                        style={{ fontFamily: 'Cambria, serif' }}
                    >
                        A chronicle of the Mising Réngam—tracing our ancestral path from the
                        highland mists to the rhythmic heart of the river.
                    </p>
                </header>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-24 space-y-12">

                <Migration />

                <div className="py-8">
                    <Etymology />
                </div>

                <Timeline />
            </div>
            <Footer />
        </main>
    );
}