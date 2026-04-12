import React from 'react';

export default function Migration() {
    return (
        <section className="py-16 border-b border-zinc-800">
            <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6 tracking-tight text-white" style={{ fontFamily: 'Times New Roman, serif' }}>
                        The Great Migration
                    </h2>
                    <div className="space-y-6 text-zinc-400 leading-relaxed text-lg" style={{ fontFamily: 'Cambria, serif' }}>
                        <p>
                            The story of the Mising people is one of movement and adaptation. Part of the
                            broader <span className="text-[#EAB308]">Tani group</span>, our ancestors originally inhabited the cold,
                            rugged highlands of the Eastern Himalayas.
                        </p>
                        <p>
                            Centuries ago, seeking the life-giving waters of the plains,
                            the tribe began a southward descent following the course of the
                            Siang River. This journey defines the soul of the river people.
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2 w-full h-64 bg-zinc-900 border border-zinc-800 rounded-sm flex items-center justify-center">
                    <span className="text-zinc-600 italic font-serif">Migration Route Map</span>
                </div>
            </div>
        </section>
    );
}