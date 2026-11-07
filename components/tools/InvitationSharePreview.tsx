import { Check, Copy, ExternalLink, Link2, MessageCircle } from "lucide-react";

type InvitationSharePreviewProps = {
    invitationUrl: string;
    message: string;
    whatsappUrl: string;
    copied: "link" | "message" | null;
    onCopy: (value: string, type: "link" | "message") => void;
};

export default function InvitationSharePreview({
    invitationUrl,
    message,
    whatsappUrl,
    copied,
    onCopy,
}: InvitationSharePreviewProps) {
    return (
        <section className="relative overflow-hidden rounded-[2rem] bg-[#2E2836] p-6 text-white shadow-xl shadow-[#2E2836]/20 md:p-10">
            <div className="absolute -right-16 -top-16 size-52 rounded-full border border-white/10" />
            <div className="absolute -right-5 -top-5 size-32 rounded-full border border-[#D4AF37]/25" />

            <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#D8BE82]">Siap dibagikan</p>
                <h2 className="mt-2 font-serif text-3xl">Tautan personal tamu</h2>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.07] p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55">
                        <Link2 size={14} /> Link undangan
                    </div>
                    <p className="min-h-12 break-all text-sm leading-6 text-white/90">
                        {invitationUrl || "Isi slug dan nama tamu untuk membuat tautan."}
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        <button
                            type="button"
                            disabled={!invitationUrl}
                            onClick={() => onCopy(invitationUrl, "link")}
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
                        onClick={() => onCopy(message, "message")}
                        className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#D8BE82] transition hover:text-white disabled:opacity-40"
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
                    className={`mt-5 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-[#5B4B8A] font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#4B3D74] ${!whatsappUrl ? "pointer-events-none opacity-45" : ""}`}
                >
                    <MessageCircle size={20} /> Kirim lewat WhatsApp
                </a>
            </div>
        </section>
    );
}
