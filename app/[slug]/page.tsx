import CoupleSection from "@/components/sections/CoupleSection";
import HeroSection from "@/components/sections/HeroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import MusicButton from "@/components/shared/MusicButton";

interface InvitationPageProps {
    params: {
        slug: string;
    };

    searchParams: {
        to?: string;
    };
}

export default async function InvitationPage({
    params,
    searchParams,
}: InvitationPageProps) {
    const { slug } = params;

    const guestName =
        searchParams.to || "Tamu Undangan";

    console.log("Invitation slug:", slug);

    return (
        <main className="relative overflow-x-hidden bg-[#F4EFE6]">
            <HeroSection guestName={guestName} />

            <QuoteSection />

            <CoupleSection />

            <MusicButton />
        </main>
    );
}
