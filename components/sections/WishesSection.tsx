"use client";

import { useEffect, useState } from "react";
import { createWish, getWishes } from "../../services/wishes.service";
import type { WishSectionProps, WishType } from "@/types/wishes.type";
import WishCardList from "./WishCardList";

export default function WishSection({ guestName = "" }: WishSectionProps) {
    const initialName = guestName === "Tamu Undangan" ? "" : guestName;
    const [name, setName] = useState(initialName);
    const [message, setMessage] = useState("");
    const [wishes, setWishes] = useState<WishType[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchWishes() {
        try {
            const data = await getWishes();
            setWishes(Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : []);
        } catch (error) {
            console.error("Failed to fetch wishes", error);
        }
    }

    async function handleSubmit() {
        if (!name || !message) return;
        try {
            setLoading(true);
            await createWish({ name, message });
            setName("");
            setMessage("");
            void fetchWishes();
        } catch (error) {
            console.error("Failed to create wish", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        let active = true;
        void getWishes()
            .then((data) => {
                if (active) setWishes(Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : []);
            })
            .catch((error) => console.error("Failed to fetch wishes", error));
        return () => { active = false; };
    }, []);

    return (
        <section id="wishes-section" className="w-full max-w-4xl px-6 py-20 md:py-28 flex flex-col items-center text-center bg-[#FAF7F2] border-t border-[#EFE8DD]">
            {/* Header */}
            <div className="mb-10">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#A67C52] font-semibold mb-3">
                    Ucapan &amp; Doa Restu
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E335B] leading-tight">
                    Kirim Doa &amp; Harapan
                </h2>
                <p className="mt-3 text-sm text-[#6B5E78] max-w-md mx-auto">
                    Tuliskan ucapan selamat dan doa terbaik Anda untuk kedua mempelai.
                </p>
            </div>

            {/* Form Wishes */}
            <div className="w-full max-w-lg rounded-[2rem] border border-[#E6DCCE] bg-white/90 p-8 md:p-10 shadow-xl shadow-[#A67C52]/5 mb-14 backdrop-blur">
                <div className="flex flex-col gap-5">
                    <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67C52]">Nama Anda</label>
                        <input
                            type="text"
                            placeholder="Tuliskan nama Anda"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 py-3.5 text-sm text-[#2E335B] placeholder:text-[#A89B8E] outline-none focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10 transition-all"
                        />
                    </div>
                    <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67C52]">Pesan / Doa</label>
                        <textarea
                            placeholder="Tuliskan ucapan dan doa restu untuk Agata & Nugroho..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 py-3.5 text-sm text-[#2E335B] placeholder:text-[#A89B8E] outline-none resize-none focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10 transition-all"
                        />
                    </div>
                    <div className="pt-2 flex justify-center">
                        <button
                            type="button"
                            disabled={!name || !message || loading}
                            onClick={handleSubmit}
                            className="w-full flex h-12 items-center justify-center rounded-2xl bg-[#5B4B8A] text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#4B3D74] disabled:opacity-45 disabled:cursor-not-allowed"
                        >
                            {loading ? "Mengirim doa..." : "Kirim Doa Restu"}
                        </button>
                    </div>
                </div>
            </div>

            {/* List Wishes */}
            <div className="w-full max-w-lg flex flex-col gap-3">
                <WishCardList wishes={wishes} />
            </div>
        </section>
    );
}
