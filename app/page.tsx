import MusicButton from "@/components/shared/MusicButton";
import HeroSection from "@/components/sections/HeroSection";
import CoupleSection from "@/components/sections/CoupleSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CountdownSection from "@/components/sections/CountdownSection";
import EventSection from "@/components/sections/EventSection";
import GallerySection from "@/components/sections/GallerySection";
import RSVPSection from "@/components/sections/RSVPSection";
import WishSection from "@/components/sections/WishesSection";
import ClosingSection from "@/components/sections/ClosingSection";
import CreateByMe from "@/components/sections/CreateByMe";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center">
            <MusicButton />

            <HeroSection />

            <CoupleSection />

            <QuoteSection />

            <CountdownSection />

            <EventSection />

            <GallerySection />

            <RSVPSection />

            <WishSection />
            
            <ClosingSection />

            <CreateByMe />
        </main>
    );
}