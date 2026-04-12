import React from 'react';

export default function Etymology() {
    return (
        <section className="py-16 bg-zinc-900/50 p-8 border border-zinc-800">
            <div className="max-w-3xl">
                <h2 className="text-sm uppercase tracking-[0.2em] text-[#EAB308] mb-8 font-bold">
                    Etymology & Identity
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>Mising</h3>
                        <p className="text-zinc-400 italic mb-4" style={{ fontFamily: 'Cambria, serif' }}>"Mi" (Man) + "Yasing" (Worthy)</p>
                        <p className="text-zinc-500 leading-relaxed">
                            Commonly interpreted as "The Worthy People" or human beings of high character.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>Miri</h3>
                        <p className="text-zinc-400 italic mb-4" style={{ fontFamily: 'Cambria, serif' }}>Historical Designation</p>
                        <p className="text-zinc-500 leading-relaxed">
                            A term found in Ahom and British records, though the community identifies strongly as Mising.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}