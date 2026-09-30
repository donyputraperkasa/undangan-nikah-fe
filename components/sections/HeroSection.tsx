"use client";

import { CalendarDays, ChevronDown, MailOpen } from "lucide-react";
import GununganOrnament from "../ornaments/GununganOrnament";
import FloralWreath from "../ornaments/FloralWreath";

type HeroSectionProps = {
    guestName?: string;
};

export default function HeroSection({ guestName = "Tamu Undangan" }: HeroSectionProps) {
    const handleOpenInvitation = () => {
        window.dispatchEvent(new Event("play-music"));
        document.getElementById("quote-section")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#FAF7F2] text-[#2D2638] flex flex-col justify-between items-center px-4 py-8 sm:py-12 md:px-8">
            {/* Left and Right Wayang Gunungan Silhouettes */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 sm:-translate-x-4 md:translate-x-0 h-[70vh] sm:h-[80vh] max-h-[720px] pointer-events-none z-0 opacity-80 sm:opacity-90">
                <GununganOrnament variant="side-left" color="#9E7B4F" className="h-full w-auto" />
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 sm:translate-x-4 md:translate-x-0 h-[70vh] sm:h-[80vh] max-h-[720px] pointer-events-none z-0 opacity-80 sm:opacity-90">
                <GununganOrnament variant="side-right" color="#9E7B4F" className="h-full w-auto" />
            </div>

            {/* Subtle background ambient glow */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#5B4B8A]/5 blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#9E7B4F]/5 blur-3xl pointer-events-none" />

            {/* Top Text: Undangan Pernikahan */}
            <header className="relative z-10 pt-2 sm:pt-4 text-center">
                <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#2E335B] tracking-wide">
                    Undangan Pernikahan
                </p>
            </header>

            {/* Center Section: Floral Wreath with Names inside */}
            <div className="relative z-10 my-auto py-2 sm:py-4 flex flex-col items-center justify-center w-full">
                <FloralWreath className="w-[300px] sm:w-[380px] md:w-[440px] aspect-square">
                    <div className="flex flex-col items-center justify-center text-center">
                        <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2E335B]">
                            Nugroho
                        </span>
                        <span className="font-script text-3xl sm:text-4xl md:text-5xl text-[#9E7B4F] my-1 sm:my-2">
                            &
                        </span>
                        <span className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#2E335B]">
                            Agata
                        </span>
                    </div>
                </FloralWreath>
            </div>

            {/* Bottom Section: Recipient Card & Open Button */}
            <div className="relative z-10 w-full max-w-md pb-2 sm:pb-4 text-center flex flex-col items-center">
                <p className="font-serif italic text-sm sm:text-base text-[#2E335B] mb-3">
                    Turut Mengundang Bapak/Ibu/Saudara/i
                </p>

                {/* Card matching the rounded rectangle with purple border on printed cover */}
                <div className="w-full rounded-[1.75rem] border-2 border-[#5B4B8A] bg-[#FAF4EC] px-6 py-5 shadow-lg shadow-[#5B4B8A]/10">
                    <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#9E7B4F]">
                        Kepada Yth.
                    </p>
                    <p className="mt-1.5 font-serif text-xl sm:text-2xl font-semibold text-[#2E335B] capitalize">
                        {guestName}
                    </p>

                    <button
                        type="button"
                        onClick={handleOpenInvitation}
                        className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#5B4B8A] text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#493974] hover:shadow-lg active:translate-y-0"
                    >
                        <MailOpen size={16} /> Buka Undangan
                    </button>
                </div>

                {/* Footer disclaimer from printed cover */}
                <p className="mt-3 text-[11px] sm:text-xs font-serif italic text-[#726558]">
                    *Mohon maaf apabila ada penulisan nama &amp; tempat yang salah
                </p>

                <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#9E7B4F]/80">
                    <CalendarDays size={13} /> 27.11.2026 <ChevronDown className="animate-bounce" size={14} />
                </div>
            </div>
        </section>
    );
}
