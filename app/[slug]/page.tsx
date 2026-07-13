import MusicButton from "@/components/shared/MusicButton";
import HeroSection from "@/components/sections/HeroSection";
import CoupleSection from "@/components/sections/CoupleSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CountdownSection from "@/components/sections/CountdownSection";
import EventSection from "@/components/sections/EventSection";
import GallerySection from "@/components/sections/GallerySection";
import RSVPSection from "@/components/sections/RSVPSection";
import JourneySection from "@/components/sections/JourneySection";
import MapSection from "@/components/sections/MapSection";
import GiftSection from "@/components/sections/GiftSection";
import WishSection from "@/components/sections/WishesSection";
import ClosingSection from "@/components/sections/ClosingSection";
import CreateByMe from "@/components/sections/CreateByMe";

interface InvitationPageProps {
    params: Promise<{
        slug: string;
    }>;

    searchParams: Promise<{
        to?: string | string[];
    }>;
}

export default async function InvitationPage({
    params,
    searchParams,
}: InvitationPageProps) {
    const { slug } = await params;
    const query = await searchParams;

    const requestedGuest = Array.isArray(query.to) ? query.to[0] : query.to;
    const guestName = requestedGuest?.trim().slice(0, 80) || "Tamu Undangan";

    return (
        <main data-invitation-slug={slug} className="flex flex-col items-center justify-center overflow-x-hidden bg-[#f7f2e9]">
            <MusicButton />

            <HeroSection guestName={guestName} />

            <CoupleSection />

            <QuoteSection />

            <CountdownSection />

            <EventSection />

            <JourneySection />

            <GallerySection />

            <MapSection />

            <GiftSection />

            <RSVPSection guestName={guestName} />

            <WishSection guestName={guestName} />

            <ClosingSection />

            <CreateByMe />
        </main>
    );
}
