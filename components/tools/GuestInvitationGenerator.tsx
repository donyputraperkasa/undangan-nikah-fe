"use client";

import { Smartphone } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import type { CopiedType } from "@/types/invitation.type";
import InvitationSharePreview from "./InvitationSharePreview";

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
    const [copied, setCopied] = useState<CopiedType>(null);

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
            <section className="rounded-[2rem] border border-[#E6DCCE] bg-white/90 p-6 shadow-xl shadow-[#A67C52]/5 backdrop-blur md:p-10">
                <div className="mb-8 flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-[#5B4B8A] text-white">
                        <Smartphone size={21} />
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A67C52]">Data penerima</p>
                        <h2 className="font-serif text-3xl text-[#2E335B]">Siapa yang diundang?</h2>
                    </div>
                </div>

                <div className="space-y-5">
                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#2E335B]">Slug undangan</span>
                        <input
                            value={slug}
                            onChange={(event) => setSlug(cleanSlug(event.target.value))}
                            placeholder="nugroho-agata"
                            className="h-14 w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 text-[#2E335B] outline-none transition focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10"
                        />
                        <span className="mt-2 block text-xs leading-relaxed text-[#726558]">Sama dengan alamat undangan setelah nama domain.</span>
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#2E335B]">Nama tamu</span>
                        <input
                            value={guestName}
                            onChange={(event) => setGuestName(event.target.value)}
                            placeholder="Contoh: Bapak Budi & Keluarga"
                            className="h-14 w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 text-[#2E335B] outline-none transition focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10"
                        />
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-[#2E335B]">Nomor WhatsApp</span>
                        <input
                            inputMode="tel"
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            placeholder="Contoh: 0812 3456 7890"
                            className="h-14 w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 text-[#2E335B] outline-none transition focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10"
                        />
                        <span className="mt-2 block text-xs leading-relaxed text-[#726558]">Nomor 08 otomatis diubah menjadi format Indonesia 62.</span>
                    </label>
                </div>
            </section>

            <InvitationSharePreview
                invitationUrl={invitationUrl}
                message={message}
                whatsappUrl={whatsappUrl}
                copied={copied}
                onCopy={copy}
            />
        </div>
    );
}
