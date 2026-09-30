import GununganOrnament from "../ornaments/GununganOrnament";
import VintageCorner from "../ornaments/VintageCorner";

export default function CoupleSection() {
    return (
        <section id="couple-section" className="relative w-full overflow-hidden bg-[#FAF7F2] px-5 py-20 md:px-8 md:py-28">
            {/* Ambient Background Accents */}
            <div className="absolute -left-20 top-20 size-80 rounded-full bg-[#5B4B8A]/5 blur-3xl pointer-events-none" />
            <div className="absolute -right-20 bottom-20 size-80 rounded-full bg-[#A67C52]/5 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-4xl text-center">
                {/* Header text matching printed center panel */}
                <header className="mx-auto mb-14 max-w-2xl">
                    <div className="flex justify-center mb-4 opacity-70">
                        <div className="w-10 h-14">
                            <GununganOrnament variant="full" color="#A67C52" className="w-full h-full" />
                        </div>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#A67C52] mb-3">
                        Mempelai
                    </p>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2E335B] font-medium leading-snug">
                        Kami mengundang Bapak/Ibu/Saudara/i <br className="hidden sm:inline" />
                        untuk menghadiri pernikahan kami :
                    </h2>
                </header>

                {/* Couple Cards (No photos, pure elegant typography & ornament) */}
                <div className="relative mx-auto grid max-w-3xl gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
                    {/* Mempelai Wanita: Agata */}
                    <article className="relative overflow-hidden rounded-[2rem] border border-[#E6DCCE] bg-white/85 p-8 sm:p-10 shadow-lg shadow-[#A67C52]/10 backdrop-blur transition-all duration-300 hover:-translate-y-1">
                        <VintageCorner position="top-left" color="#A67C52" className="m-2" />
                        <VintageCorner position="bottom-right" color="#A67C52" className="m-2" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67C52]">
                            Mempelai Wanita
                        </p>

                        <h3 className="mt-3 font-script text-5xl sm:text-6xl text-[#2E335B]">
                            Agata
                        </h3>

                        <div className="mx-auto my-4 h-px w-16 bg-[#5B4B8A]/25" />

                        <p className="text-sm font-medium text-[#463853] leading-relaxed">
                            Putri Pertama dari Bapak Sunardi &amp; Ibu Yustina Sri Prihatini
                        </p>

                        <p className="mt-3 inline-block rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1 text-xs font-semibold tracking-wider text-[#A67C52]">
                            Kediri
                        </p>
                    </article>

                    {/* Center Ampersand Connector */}
                    <div className="flex flex-col items-center justify-center my-2 md:my-0">
                        <div className="hidden md:block h-12 w-px bg-[#A67C52]/30" />
                        <div className="flex size-14 items-center justify-center rounded-full border-2 border-[#A67C52]/40 bg-[#FAF4EC] shadow-md">
                            <span className="font-script text-4xl text-[#5B4B8A] leading-none select-none">
                                &amp;
                            </span>
                        </div>
                        <div className="hidden md:block h-12 w-px bg-[#A67C52]/30" />
                    </div>

                    {/* Mempelai Pria: Nugroho */}
                    <article className="relative overflow-hidden rounded-[2rem] border border-[#E6DCCE] bg-white/85 p-8 sm:p-10 shadow-lg shadow-[#A67C52]/10 backdrop-blur transition-all duration-300 hover:-translate-y-1">
                        <VintageCorner position="top-right" color="#A67C52" className="m-2" />
                        <VintageCorner position="bottom-left" color="#A67C52" className="m-2" />

                        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#A67C52]">
                            Mempelai Pria
                        </p>

                        <h3 className="mt-3 font-script text-5xl sm:text-6xl text-[#2E335B]">
                            Nugroho
                        </h3>

                        <div className="mx-auto my-4 h-px w-16 bg-[#5B4B8A]/25" />

                        <p className="text-sm font-medium text-[#463853] leading-relaxed">
                            Putra Kedua dari Bapak Pius Sutrisno (Alm) &amp; Ibu Heronima Sri Lestari Rahayu
                        </p>

                        <p className="mt-3 inline-block rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1 text-xs font-semibold tracking-wider text-[#A67C52]">
                            Glondong Tirtonirmolo Kasihan Bantul
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
}
