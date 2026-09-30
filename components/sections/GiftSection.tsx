"use client";

import { Check, Copy, Gift, CreditCard, MapPin } from "lucide-react";
import { useState } from "react";
import VintageCorner from "../ornaments/VintageCorner";

export default function GiftSection() {
    const [copiedAccount, setCopiedAccount] = useState(false);
    const [copiedAddress, setCopiedAddress] = useState(false);

    const accountNumber = "1234567890";
    const address = "Glondong Tirtonirmolo, Kasihan, Bantul, D.I. Yogyakarta";

    const copyToClipboard = (text: string, type: "account" | "address") => {
        navigator.clipboard.writeText(text);
        if (type === "account") {
            setCopiedAccount(true);
            setTimeout(() => setCopiedAccount(false), 2000);
        } else {
            setCopiedAddress(true);
            setTimeout(() => setCopiedAddress(false), 2000);
        }
    };

    return (
        <section id="gift-section" className="w-full bg-[#FAF7F2] px-6 py-20 md:py-28 border-t border-[#EFE8DD]">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-[#5B4B8A]/10 text-[#5B4B8A] mb-4">
                    <Gift size={24} />
                </div>

                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#A67C52] font-semibold mb-3">
                    Tanda Kasih
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E335B] mb-4">
                    Wedding Gift
                </h2>

                <p className="max-w-lg text-[#6B5E78] leading-relaxed mb-12 text-sm sm:text-base">
                    Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih secara cashless maupun kado, dapat melalui informasi di bawah ini:
                </p>

                <div className="w-full grid md:grid-cols-2 gap-8 max-w-3xl">
                    {/* Bank Transfer */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-white/90 p-8 shadow-xl shadow-[#A67C52]/5 border border-[#E6DCCE] text-left transition-all duration-300 hover:-translate-y-1">
                        <VintageCorner position="top-left" color="#A67C52" className="m-2" />
                        <VintageCorner position="bottom-right" color="#A67C52" className="m-2" />

                        <div className="flex items-center gap-3 mb-6">
                            <CreditCard className="text-[#5B4B8A]" size={22} />
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A67C52]">
                                Transfer Bank
                            </span>
                        </div>

                        <h3 className="text-2xl font-serif font-bold text-[#2E335B] mb-2 tracking-wider">
                            BCA
                        </h3>

                        <p className="text-xl font-mono font-semibold text-[#2E335B] tracking-widest mb-1">
                            {accountNumber}
                        </p>

                        <p className="text-xs text-[#726558] mb-6">
                            a.n. Ignasius Dwi Cahyo Nugroho
                        </p>

                        <button
                            type="button"
                            onClick={() => copyToClipboard(accountNumber, "account")}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#5B4B8A] py-3 text-xs font-semibold text-white shadow-md transition-all hover:bg-[#4B3D74]"
                        >
                            {copiedAccount ? <Check size={15} /> : <Copy size={15} />}
                            {copiedAccount ? "Nomor Rekening Tersalin!" : "Salin Nomor Rekening"}
                        </button>
                    </div>

                    {/* Send Gift Address */}
                    <div className="relative overflow-hidden rounded-[2rem] bg-white/90 p-8 shadow-xl shadow-[#A67C52]/5 border border-[#E6DCCE] text-left transition-all duration-300 hover:-translate-y-1">
                        <VintageCorner position="top-right" color="#A67C52" className="m-2" />
                        <VintageCorner position="bottom-left" color="#A67C52" className="m-2" />

                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="text-[#A67C52]" size={22} />
                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A67C52]">
                                Kirim Kado Fisik
                            </span>
                        </div>

                        <h3 className="text-xl font-serif font-bold text-[#2E335B] mb-2">
                            Alamat Mempelai
                        </h3>

                        <p className="text-sm text-[#463853] leading-relaxed mb-6">
                            {address}
                        </p>

                        <button
                            type="button"
                            onClick={() => copyToClipboard(address, "address")}
                            className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#FAF4EC] border border-[#E6DCCE] py-3 text-xs font-semibold text-[#2E335B] transition-all hover:bg-[#5B4B8A] hover:text-white"
                        >
                            {copiedAddress ? <Check size={15} /> : <Copy size={15} />}
                            {copiedAddress ? "Alamat Tersalin!" : "Salin Alamat"}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}