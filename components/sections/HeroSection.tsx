"use client";

import { CalendarDays, ChevronDown, MailOpen } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
    guestName?: string;
};

export default function HeroSection({ guestName = "Tamu Undangan" }: HeroSectionProps) {
    const handleOpenInvitation = () => {
        window.dispatchEvent(new Event("play-music"));
        document.getElementById("couple-section")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#20342d] text-white">
            <Image
                src="/images/naruto-hinata-prewed.png"
                alt=""
                fill
                sizes="100vw"
                className="scale-110 object-cover object-center opacity-45 blur-2xl"
            />
            <div className="absolute inset-y-0 left-1/2 w-full max-w-[52rem] -translate-x-1/2">
                <Image
                    src="/images/naruto-hinata-prewed.png"
                    alt="Ilustrasi prewedding Nugroho dan Agata"
                    fill
                    preload
                    sizes="(max-width: 832px) 100vw, 832px"
                    className="object-contain object-center"
                />
            </div>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,29,24,.28)_0%,rgba(16,29,24,.42)_42%,rgba(16,29,24,.94)_100%)]" />
            <div className="absolute inset-x-4 top-4 bottom-4 rounded-[2rem] border border-white/20 md:inset-x-7 md:top-7 md:bottom-7" />

            <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-between px-7 py-12 text-center md:py-16">
                <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.36em] text-[#f3dfae] md:text-xs">
                    <span className="h-px w-8 bg-[#f3dfae]/70" />
                    The wedding of
                    <span className="h-px w-8 bg-[#f3dfae]/70" />
                </div>

                <div className="mt-auto w-full max-w-3xl pb-8 pt-20 md:pb-12">
                    <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/75">Jumat, 27 November 2026</p>
                    <h1 className="font-serif text-[clamp(4.5rem,15vw,9.5rem)] font-medium leading-[0.65] tracking-[-0.055em]">
                        Nugroho
                        <span className="my-5 block text-[0.38em] italic leading-none text-[#e6c98b]">&</span>
                        Agata
                    </h1>
                </div>

                <div className="w-full max-w-md rounded-[1.75rem] border border-white/20 bg-[#10251e]/55 p-5 shadow-2xl backdrop-blur-md md:p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#e6c98b]">Kepada Yth.</p>
                    <p className="mt-2 font-serif text-2xl font-semibold capitalize md:text-3xl">{guestName}</p>
                    <p className="mt-2 text-xs leading-5 text-white/65">Mohon maaf apabila terdapat kesalahan penulisan nama atau gelar.</p>

                    <button
                        type="button"
                        onClick={handleOpenInvitation}
                        className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#d9b56f] text-sm font-bold text-[#20342d] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#efd49a]"
                    >
                        <MailOpen size={17} /> Buka Undangan
                    </button>
                </div>

                <div className="mt-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/55">
                    <CalendarDays size={14} /> Save our date <ChevronDown className="animate-bounce" size={15} />
                </div>
            </div>
        </section>
    );
}
