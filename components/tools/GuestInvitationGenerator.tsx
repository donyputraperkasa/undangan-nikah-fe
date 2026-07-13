"use client";

import { Check, Copy, ExternalLink, Link2, MessageCircle, Smartphone } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";

function normalizeWhatsAppNumber(value: string) {
    const digits = value.replace(/\D/g, "");

    if (digits.startsWith("0")) return `62${digits.slice(1)}`;
    if (digits.startsWith("8")) return `62${digits}`;

    return digits;
}

function cleanSlug(value: string) {
    return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9-\s]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
}

export default function GuestInvitationGenerator() {
    const origin = useSyncExternalStore(
        () => () => undefined,
        () => window.location.origin,
        () => "",
    );
    const [slug, setSlug] = useState("nugroho-agata");
    const [guestName, setGuestName] = useState("");
    const [phone, setPhone] = useState("");
    const [copied, setCopied] = useState<"link" | "message" | null>(null);

    const invitationUrl = useMemo(() => {
        if (!origin || !slug.trim() || !guestName.trim()) return "";

        return `${origin}/${cleanSlug(slug)}?to=${encodeURIComponent(guestName.trim())}`;
    }, [guestName, origin, slug]);

    const message = useMemo(() => {
        if (!invitationUrl) return "";

        return `Kepada Yth. ${guestName.trim()}\n\nTanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.\n\nSilakan buka undangan melalui tautan berikut:\n${invitationUrl}\n\nMerupakan suatu kebahagiaan bagi kami apabila Anda berkenan hadir dan memberikan doa restu. Terima kasih.`;
    }, [guestName, invitationUrl]);

    const whatsappNumber = normalizeWhatsAppNumber(phone);
    const whatsappUrl = whatsappNumber && message
        ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
        : "";

    async function copy(value: string, type: "link" | "message") {
        if (!value) return;

        await navigator.clipboard.writeText(value);
        setCopied(type);
        window.setTimeout(() => setCopied(null), 1800);
    }

    return (
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <section className="rounded-[2rem] border border-[#d7c6aa]/60 bg-white/85 p-6 shadow-[0_24px_70px_rgba(58,44,34,0.10)] backdrop-blur md:p-10">
                <div className="mb-8 flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#273d35] text-[#f6e6bd]">
                        <Smartphone size={21} />
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ad7f45]">Data penerima</p>
                        <h2 className="font-serif text-3xl text-[#273d35]">Siapa yang diundang?</h2>
                    </div>
                </div>

                <div className="space-y-5">
                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#493d32]">Slug undangan</span>
                        <input
                            value={slug}
                            onChange={(event) => setSlug(cleanSlug(event.target.value))}
                            placeholder="nugroho-agata"
                            className="h-14 w-full rounded-2xl border border-[#ded2c0] bg-[#fbf8f2] px-5 text-[#273d35] outline-none transition focus:border-[#ad7f45] focus:ring-4 focus:ring-[#ad7f45]/10"
                        />
                        <span className="mt-2 block text-xs leading-relaxed text-[#837568]">Sama dengan alamat undangan setelah nama domain.</span>
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#493d32]">Nama tamu</span>
                        <input
                            value={guestName}
                            onChange={(event) => setGuestName(event.target.value)}
                            placeholder="Contoh: Bapak Budi & Keluarga"
                            className="h-14 w-full rounded-2xl border border-[#ded2c0] bg-[#fbf8f2] px-5 text-[#273d35] outline-none transition focus:border-[#ad7f45] focus:ring-4 focus:ring-[#ad7f45]/10"
                        />
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#493d32]">Nomor WhatsApp</span>
                        <input
                            inputMode="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="Contoh: 0812 3456 7890"
                            className="h-14 w-full rounded-2xl border border-[#ded2c0] bg-[#fbf8f2] px-5 text-[#273d35] outline-none transition focus:border-[#ad7f45] focus:ring-4 focus:ring-[#ad7f45]/10"
                        />
                        <span className="mt-2 block text-xs leading-relaxed text-[#837568]">Nomor 08 otomatis diubah menjadi format Indonesia 62.</span>
                    </label>
                </div>
            </section>

            <section className="relative overflow-hidden rounded-[2rem] bg-[#273d35] p-6 text-white shadow-[0_24px_70px_rgba(39,61,53,0.22)] md:p-10">
                <div className="absolute -right-16 -top-16 size-52 rounded-full border border-white/10" />
                <div className="absolute -right-5 -top-5 size-32 rounded-full border border-[#e6c98b]/25" />

                <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e6c98b]">Siap dibagikan</p>
                    <h2 className="mt-2 font-serif text-3xl">Tautan personal tamu</h2>

                    <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                        <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55">
                            <Link2 size={14} /> Link undangan
                        </div>
                        <p className="min-h-12 break-all text-sm leading-6 text-white/90">
                            {invitationUrl || "Isi slug dan nama tamu untuk membuat tautan."}
                        </p>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                disabled={!invitationUrl}
                                onClick={() => copy(invitationUrl, "link")}
                                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-semibold transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {copied === "link" ? <Check size={16} /> : <Copy size={16} />}
                                {copied === "link" ? "Tersalin" : "Salin link"}
                            </button>
                            <a
                                href={invitationUrl || undefined}
                                target="_blank"
                                rel="noreferrer"
                                aria-disabled={!invitationUrl}
                                className={`flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 text-sm font-semibold transition hover:bg-white/10 ${!invitationUrl ? "pointer-events-none opacity-40" : ""}`}
                            >
                                <ExternalLink size={16} /> Preview
                            </a>
                        </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                        <p className="line-clamp-5 whitespace-pre-line text-sm leading-6 text-white/70">
                            {message || "Pesan WhatsApp akan dibuat otomatis di sini."}
                        </p>
                        <button
                            type="button"
                            disabled={!message}
                            onClick={() => copy(message, "message")}
                            className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#e6c98b] transition hover:text-white disabled:opacity-40"
                        >
                            {copied === "message" ? <Check size={16} /> : <Copy size={16} />}
                            {copied === "message" ? "Pesan tersalin" : "Salin pesan"}
                        </button>
                    </div>

                    <a
                        href={whatsappUrl || undefined}
                        target="_blank"
                        rel="noreferrer"
                        aria-disabled={!whatsappUrl}
                        className={`mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#d9b56f] font-bold text-[#20342d] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e6c98b] ${!whatsappUrl ? "pointer-events-none opacity-45" : ""}`}
                    >
                        <MessageCircle size={20} /> Kirim lewat WhatsApp
                    </a>
                </div>
            </section>
        </div>
    );
}
