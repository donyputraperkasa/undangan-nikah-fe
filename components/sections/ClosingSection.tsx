import GununganOrnament from "../ornaments/GununganOrnament";

export default function ClosingSection() {
    return (
        <section
            id="closing-section"
            className="relative w-full overflow-hidden bg-[#FAF7F2] px-6 pt-24 pb-12 sm:pt-32 sm:pb-16 flex flex-col items-center justify-center text-center"
        >
            {/* Watermark Gunungan besar yang samar-samar di background tengah */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] md:w-[520px] h-auto opacity-[0.06] pointer-events-none select-none">
                <GununganOrnament variant="full" color="#9E7B4F" className="w-full h-full" />
            </div>

            {/* Ambient soft glow yang halus dan samar */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#A67C52]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#5B4B8A]/4 blur-3xl pointer-events-none" />

            {/* Konten penutup tanpa border kotak kaku, melayang lembut dan samar */}
            <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto space-y-6">
                {/* Gunungan mini halus di atas */}
                <div className="w-9 h-13 opacity-40">
                    <GununganOrnament variant="full" color="#A67C52" className="w-full h-full" />
                </div>

                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.4em] text-[#A67C52]/75">
                    Terima Kasih
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E335B]/90 font-medium leading-tight">
                    Sampai Jumpa di Hari Bahagia Kami
                </h2>

                {/* Garis pemisah gradasi memudar (samar-samar) */}
                <div className="h-px w-36 bg-gradient-to-r from-transparent via-[#A67C52]/35 to-transparent my-2" />

                <p className="text-sm sm:text-base text-[#6B5E78]/85 leading-relaxed font-serif italic max-w-md px-2">
                    &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kedua mempelai.&rdquo;
                </p>

                <div className="pt-4 flex flex-col items-center space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#A67C52]/65 font-medium">
                        Kami yang berbahagia
                    </p>
                    <span className="font-script text-4xl sm:text-5xl md:text-6xl text-[#5B4B8A]/85">
                        Nugroho &amp; Agata
                    </span>
                    <p className="text-[11px] tracking-widest text-[#726558]/60 uppercase font-serif pt-1">
                        Jumat, 27 November 2026
                    </p>
                </div>
            </div>
        </section>
    );
}
