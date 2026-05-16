"use client";

import Button from "../ui/Button";
import Container from "../ui/Container";
import BackgroundTexture from "../effects/BackgroundTexture";
import FloatingGlow from "../effects/FloatingGlow";
import FloatingParticles from "../effects/FloatingParticles";
import GradientOverlay from "../effects/GradientOverlay";

type HeroSectionProps = {
    guestName?: string;
};

export default function HeroSection({
    guestName,
}: HeroSectionProps) {
    const handleOpenInvitation = () => {
        window.dispatchEvent(new Event("play-music"));

        const nextSection = document.getElementById("couple-section");

        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#F4EFE6] px-6 py-10 md:px-12">
            <BackgroundTexture />
            <GradientOverlay />

            <FloatingGlow
                className="top-0 left-0"
                color="bg-[#5B4B8A]/10"
                size="w-40 h-40"
            />

            <FloatingGlow
                className="bottom-0 right-0"
                color="bg-[#A67C52]/10"
                size="w-52 h-52"
            />

            <FloatingParticles />

            <Container className="max-w-xl text-center flex flex-col items-center justify-center gap-6 z-10">
                <div className="space-y-2">
                    <p className="text-sm tracking-[0.3em] text-[#A67C52] uppercase">
                        The Wedding Of
                    </p>

                    <h1 className="text-5xl md:text-6xl font-serif text-[#5B4B8A] leading-tight">
                        Nugroho
                    </h1>

                    <h3 className="text-2xl text-[#A67C52]">&</h3>

                    <h1 className="text-5xl md:text-6xl font-serif text-[#5B4B8A] leading-tight">
                        Agata
                    </h1>
                </div>

                <div className="space-y-3 max-w-md">
                    <p className="text-base text-[#6B6B6B] leading-relaxed">
                        Dengan penuh kebahagiaan, kami mengundang
                        Bapak/Ibu/Saudara/i untuk hadir dan
                        memberikan doa restu pada hari pernikahan kami.
                    </p>
                </div>

                <div className="space-y-3 flex flex-col items-center">
                    <p className="text-sm tracking-[0.2em] uppercase text-[#A67C52]">
                        Kepada Yth.
                    </p>

                </div>

                <div className="bg-white/80 backdrop-blur-md border border-white/70 rounded-3xl w-full max-w-md px-6 py-8 min-h-[120px] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                    <h2 className="relative z-10 text-lg md:text-3xl font-semibold text-[#5B4B8A] capitalize text-center leading-snug">
                        {guestName || "Tamu Undangan"}
                    </h2>
                </div>

                <div className="pt-4 w-full flex justify-center">
                    <Button onClick={handleOpenInvitation}>
                        Open Invitation
                    </Button>
                </div>
            </Container>
        </section>
    );
}