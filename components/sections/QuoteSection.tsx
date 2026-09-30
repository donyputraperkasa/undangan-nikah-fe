import VintageCorner from "../ornaments/VintageCorner";
import GununganOrnament from "../ornaments/GununganOrnament";

export default function QuoteSection() {
    return (
        <section
            id="quote-section"
            className="relative w-full overflow-hidden bg-[#FAF7F2] py-20 px-6 sm:py-28 md:px-12 flex flex-col items-center justify-center text-center"
        >
            {/* Subtle background ambient gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#A67C52]/5 blur-3xl pointer-events-none" />

            {/* Container Card with Vintage Corner Filigrees matching Left Panel of printed card */}
            <div className="relative z-10 w-full max-w-2xl rounded-[2.5rem] border border-[#E6DCce] bg-white/80 p-8 sm:p-14 shadow-xl shadow-[#A67C52]/10 backdrop-blur-sm">
                <VintageCorner position="top-left" color="#A67C52" className="m-3" />
                <VintageCorner position="top-right" color="#A67C52" className="m-3" />
                <VintageCorner position="bottom-left" color="#A67C52" className="m-3" />
                <VintageCorner position="bottom-right" color="#A67C52" className="m-3" />

                <div className="mx-auto flex flex-col items-center max-w-lg space-y-8">
                    {/* Gunungan Motif at top */}
                    <div className="w-12 h-16 opacity-75">
                        <GununganOrnament variant="full" color="#A67C52" className="w-full h-full" />
                    </div>

                    {/* Left Panel Text from Printed Invitation */}
                    <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-[#2E335B] leading-relaxed">
                        &ldquo;Cinta sejati adalah perjalanan panjang, di mana dua hati saling melengkapi dan bersama menggapai kebahagiaan.&rdquo;
                    </p>

                    <div className="flex items-center justify-center gap-3">
                        <div className="h-[1px] w-12 bg-[#A67C52]/40" />
                        <span className="text-[#A67C52] text-sm">✦</span>
                        <div className="h-[1px] w-12 bg-[#A67C52]/40" />
                    </div>

                    <p className="font-serif text-sm sm:text-base md:text-lg text-[#52445E] leading-relaxed max-w-md">
                        Dengan kerendahan hati, kami mengundang kehadiran Anda untuk merayakan awal dari perjalanan cinta kami.
                    </p>

                    {/* Biblical Verse */}
                    <div className="pt-4 border-t border-[#EAE1D5] w-full">
                        <p className="font-serif italic text-xs sm:text-sm text-[#7D6B60] leading-relaxed">
                            &ldquo;Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.&rdquo;
                        </p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#A67C52]">
                            Matius 19 : 6
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
