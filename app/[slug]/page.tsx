import MusicButton from "@/components/shared/MusicButton";
import HeroSection from "@/components/sections/HeroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import CoupleSection from "@/components/sections/CoupleSection";
import CountdownSection from "@/components/sections/CountdownSection";
import EventSection from "@/components/sections/EventSection";
import MapSection from "@/components/sections/MapSection";
import GiftSection from "@/components/sections/GiftSection";
import RSVPSection from "@/components/sections/RSVPSection";
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
        <main data-invitation-slug={slug} className="flex flex-col items-center justify-center overflow-x-hidden bg-[#FAF7F2] text-[#2D2638] w-full">
            <MusicButton />

            {/* Cover of the Tri-fold: Gunungan Silhouettes, Floral Wreath, Names, Recipient Card */}
            <HeroSection guestName={guestName} />

            {/* Inside Left Panel: Love Quote & Biblical Verse */}
            <QuoteSection />

            {/* Inside Center Panel: Agata & Nugroho with Parentage & Hometowns */}
            <CoupleSection />

            {/* Inside Center Panel: Date 27.11.2026 & Countdown */}
            <CountdownSection />

            {/* Inside Center Panel: AKAD & RESEPSI Event Details */}
            <EventSection />

            {/* Inside Right Panel: Location Details, SCAN LOKASI QR Code & Google Maps */}
            <MapSection />

            {/* Wedding Gift */}
            <GiftSection />

            {/* RSVP */}
            <RSVPSection guestName={guestName} />

            {/* Wishes & Prayers */}
            <WishSection guestName={guestName} />

            {/* Closing Blessing & Signature */}
            <ClosingSection />

            {/* Creator Credit */}
            <CreateByMe />
        </main>
    );
}
