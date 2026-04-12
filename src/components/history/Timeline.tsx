import React from 'react';

const events = [
    { era: "Pre-Migration", detail: "Inhabited the North-Himalayan tracts as part of the Tani group." },
    { era: "Ahom Era", detail: "Settlement in the Brahmaputra Valley and political interaction with the Ahom Kingdom." },
    { era: "1924", detail: "Formation of the Mising Agom Kebang (Language Society)." },
    { era: "1995", detail: "Establishment of the Mising Autonomous Council (MAC)." }
];

export default function Timeline() {
    return (
        <section className="py-16">
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#EAB308] mb-12 font-bold">
                Historical Milestones
            </h2>
            <div className="space-y-0 border-l border-zinc-800 ml-2">
                {events.map((event, index) => (
                    <div key={index} className="relative pl-8 pb-12 last:pb-0">
                        <div className="absolute left-[-5px] top-2 h-2 w-2 rounded-full bg-[#EAB308]"></div>

                        <h4 className="text-xl text-white font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
                            {event.era}
                        </h4>
                        <p className="text-zinc-500 max-w-xl leading-relaxed" style={{ fontFamily: 'Cambria, serif' }}>
                            {event.detail}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}