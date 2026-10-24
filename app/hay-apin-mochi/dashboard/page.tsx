import WishesAndRSVPDashboard from "@/components/dashboard/WishesAndRSVPDashboard";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Rekap Ucapan & RSVP | Nugroho & Agata",
    description: "Pantau ucapan, doa restu, serta konfirmasi kehadiran (RSVP) dari para tamu undangan.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function DashboardPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#FAF7F2] text-[#2E335B]">
            <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#6B5E78] transition hover:text-[#5B4B8A]"
                    >
                        <ArrowLeft size={17} /> Kembali ke undangan
                    </Link>

                    <Link
                        href="/hay-apin-mochi"
                        className="inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#5B4B8A] border border-[#E6DCCE] shadow-sm transition hover:bg-[#FAF4EB]"
                    >
                        <Send size={15} /> Kirim Undangan Tamu
                    </Link>
                </div>

                <header className="max-w-3xl py-10 md:py-14">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#A67C52]">
                        Monitoring &amp; Rekapitulasi
                    </p>
                    <h1 className="font-serif text-4xl leading-[1.05] text-[#2E335B] md:text-6xl">
                        Rekap Ucapan &amp; RSVP Tamu
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#6B5E78]">
                        Pantau seluruh ucapan doa restu serta rekap konfirmasi kehadiran tamu undangan pernikahan secara terpusat.
                    </p>
                </header>

                <WishesAndRSVPDashboard />
            </div>
        </main>
    );
}
