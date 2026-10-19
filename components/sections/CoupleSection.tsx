import GununganOrnament from "../ornaments/GununganOrnament";
import VintageCorner from "../ornaments/VintageCorner";

export default function CoupleSection() {
    return (
        <section id="couple-section" className="relative w-full overflow-hidden bg-[#FAF7F2] px-5 py-20 md:px-8 md:py-28">
            {/* Ambient Background Accents */}
            <div className="absolute -left-20 top-20 size-80 rounded-full bg-[#5B4B8A]/5 blur-3xl pointer-events-none" />
            <div className="absolute -right-20 bottom-20 size-80 rounded-full bg-[#A67C52]/5 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-5xl text-center">
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

                {/* Couple Cards (Spacious, elegant typography & ornament) */}
                <div className="relative mx-auto grid max-w-4xl lg:max-w-5xl gap-6 md:gap-8 lg:gap-10 md:grid-cols-[1fr_auto_1fr] items-stretch">
                    {/* Mempelai Wanita: Agata */}
                    <article className="relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border border-[#E6DCCE] bg-white/90 p-8 sm:p-10 lg:p-12 shadow-xl shadow-[#A67C52]/10 backdrop-blur transition-all duration-300 hover:-translate-y-1">
                        <VintageCorner position="top-left" color="#A67C52" className="m-2 sm:m-3" />
                        <VintageCorner position="bottom-right" color="#A67C52" className="m-2 sm:m-3" />

                        <div className="relative z-10">
                            <span className="inline-block rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#A67C52] mb-3">
                                Mempelai Wanita
                            </span>

                            {/* Nama Panggilan Kaligrafi */}
                            <div className="font-script text-5xl sm:text-6xl text-[#5B4B8A] my-1 leading-tight select-none">
                                Agata
                            </div>

                            {/* Nama Lengkap & Gelar (Jelas, tegas, mudah dibaca) */}
                            <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#2E335B] tracking-wide leading-snug">
                                Agata Niken Mardiana, S.Pd.
                            </h3>

                            <div className="mx-auto my-5 h-px w-20 bg-gradient-to-r from-transparent via-[#A67C52]/40 to-transparent" />
                        </div>

                        <div className="relative z-10 space-y-4 pt-2">
                            <p className="text-sm sm:text-base font-medium text-[#463853] leading-relaxed">
                                Putri Pertama dari Bapak Yohanes Sunardi &amp; Ibu Yustina Sri Prihatini
                            </p>

                            <div>
                                <span className="inline-flex items-center rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#A67C52]">
                                    Kediri
                                </span>
                            </div>
                        </div>
                    </article>

                    {/* Center Ampersand Connector */}
                    <div className="flex flex-row md:flex-col items-center justify-center my-3 md:my-0 self-center md:self-stretch">
                        <div className="hidden md:block flex-1 w-px bg-gradient-to-b from-transparent via-[#A67C52]/30 to-[#A67C52]/30 min-h-[30px]" />
                        <div className="flex size-14 items-center justify-center rounded-full border-2 border-[#A67C52]/40 bg-[#FAF4EC] shadow-md my-2 shrink-0">
                            <span className="font-script text-4xl text-[#5B4B8A] leading-none select-none">
                                &amp;
                            </span>
                        </div>
                        <div className="hidden md:block flex-1 w-px bg-gradient-to-t from-transparent via-[#A67C52]/30 to-[#A67C52]/30 min-h-[30px]" />
                    </div>

                    {/* Mempelai Pria: Nugroho */}
                    <article className="relative flex flex-col justify-between overflow-hidden rounded-[2.25rem] border border-[#E6DCCE] bg-white/90 p-8 sm:p-10 lg:p-12 shadow-xl shadow-[#A67C52]/10 backdrop-blur transition-all duration-300 hover:-translate-y-1">
                        <VintageCorner position="top-right" color="#A67C52" className="m-2 sm:m-3" />
                        <VintageCorner position="bottom-left" color="#A67C52" className="m-2 sm:m-3" />

                        <div className="relative z-10">
                            <span className="inline-block rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#A67C52] mb-3">
                                Mempelai Pria
                            </span>

                            {/* Nama Panggilan Kaligrafi */}
                            <div className="font-script text-5xl sm:text-6xl text-[#5B4B8A] my-1 leading-tight select-none">
                                Nugroho
                            </div>

                            {/* Nama Lengkap & Gelar (Jelas, tegas, mudah dibaca) */}
                            <h3 className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] font-bold text-[#2E335B] tracking-wide leading-snug">
                                Ignasius Dwi Cahyo Nugroho, A. Md.
                            </h3>

                            <div className="mx-auto my-5 h-px w-20 bg-gradient-to-r from-transparent via-[#A67C52]/40 to-transparent" />
                        </div>

                        <div className="relative z-10 space-y-4 pt-2">
                            <p className="text-sm sm:text-base font-medium text-[#463853] leading-relaxed">
                                Putra Kedua dari Bapak Pius Sutrisno (Alm) &amp; Ibu Heronima Sri Lestari Rahayu
                            </p>

                            <div>
                                <span className="inline-flex items-center rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1.5 text-xs font-semibold tracking-wider text-[#A67C52]">
                                    Glondong Tirtonirmolo Kasihan Bantul
                                </span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}

