import GuestInvitationGenerator from "@/components/tools/GuestInvitationGenerator";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Kirim Undangan Tamu | Nugroho & Agata",
    description: "Buat tautan undangan personal dan kirim langsung melalui WhatsApp.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function SendInvitationPage() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#f3ede2] text-[#493d32]">
            <div className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
                <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#68776f] transition hover:text-[#273d35]">
                    <ArrowLeft size={17} /> Kembali ke undangan
                </Link>

                <header className="max-w-3xl py-14 md:py-20">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-[#ad7f45]">Guest invitation tools</p>
                    <h1 className="font-serif text-5xl leading-[0.98] text-[#273d35] md:text-7xl">
                        Kirim undangan tanpa ribet.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-[#76695c] md:text-lg">
                        Masukkan nama dan nomor WhatsApp tamu. Sistem akan membuat tautan personal, menyiapkan pesan, lalu membuka WhatsApp untuk Anda.
                    </p>
                </header>

                <GuestInvitationGenerator />

                <section className="mt-8 grid gap-4 rounded-[2rem] border border-[#d7c6aa]/60 bg-[#fbf8f2] p-6 md:grid-cols-3 md:p-8">
                    {["Isi nama dan nomor tamu", "Periksa preview undangan", "Klik kirim lewat WhatsApp"].map((item, index) => (
                        <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-sm font-semibold shadow-sm">
                            <CheckCircle2 className="shrink-0 text-[#ad7f45]" size={20} />
                            <span>{index + 1}. {item}</span>
                        </div>
                    ))}
                </section>
            </div>
        </main>
    );
}
