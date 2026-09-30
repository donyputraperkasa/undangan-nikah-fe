"use client";

import { useEffect, useState } from "react";

import Button from "../ui/Button";
import {
    createWish,
    getWishes,
} from "../../services/wishes.service";

type Wish = {
    id?: string;
    name?: string;
    guestName?: string;
    message: string;
    createdAt?: string;
};

type WishSectionProps = {
    guestName?: string;
};

export default function WishSection({ guestName = "" }: WishSectionProps) {

    const initialName = guestName === "Tamu Undangan" ? "" : guestName;
    const [name, setName] = useState(initialName);
    const [message, setMessage] = useState("");
    const [wishes, setWishes] = useState<Wish[]>([]);
    const [loading, setLoading] = useState(false);

    async function fetchWishes() {
        try {
            const data = await getWishes();

            if (Array.isArray(data)) {
                setWishes(data);
            } else if (Array.isArray(data.data)) {
                setWishes(data.data);
            } else {
                setWishes([]);
            }
        } catch (error) {
            console.error("Failed to fetch wishes", error);
        }
    }

    async function handleSubmit() {
        if (!name || !message) return;

        try {
            setLoading(true);

            await createWish({
                name,
                message,
            });

            setName("");
            setMessage("");

            fetchWishes();
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
                if (!active) return;

                if (Array.isArray(data)) {
                    setWishes(data);
                } else if (Array.isArray(data.data)) {
                    setWishes(data.data);
                } else {
                    setWishes([]);
                }
            })
            .catch((error) => {
                console.error("Failed to fetch wishes", error);
            });

        return () => {
            active = false;
        };
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
                    {/* Input Name */}
                    <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67C52]">
                            Nama Anda
                        </label>
                        <input
                            type="text"
                            placeholder="Tuliskan nama Anda"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 py-3.5 text-sm text-[#2E335B] placeholder:text-[#A89B8E] outline-none focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10 transition-all"
                        />
                    </div>
                    {/* Input Wishes */}
                    <div className="space-y-2 text-left">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A67C52]">
                            Pesan / Doa
                        </label>
                        <textarea
                            placeholder="Tuliskan ucapan dan doa restu untuk Agata & Nugroho..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 py-3.5 text-sm text-[#2E335B] placeholder:text-[#A89B8E] outline-none resize-none focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10 transition-all"
                        />
                    </div>
                    {/* Submit Button */}
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
                {Array.isArray(wishes) && wishes.length > 0 ? (
                    wishes.map((wish, index) => (
                        <div
                            key={wish.id ?? index}
                            className="group w-full bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#E6DCCE] text-left transition-all hover:shadow-md"
                        >
                            <div className="flex items-center gap-3.5 mb-3">
                                <div className="size-10 shrink-0 rounded-full bg-[#5B4B8A]/10 flex items-center justify-center text-[#5B4B8A] font-serif font-bold italic border border-[#5B4B8A]/20 uppercase">
                                    {(wish.name || wish.guestName || "T").charAt(0)}
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-base font-serif font-bold text-[#2E335B] leading-tight">
                                        {wish.name || wish.guestName}
                                    </p>
                                    <p className="text-[10px] text-[#A67C52] uppercase tracking-[0.2em] mt-0.5">
                                        Tamu Undangan
                                    </p>
                                </div>
                            </div>

                            <div className="relative pl-3 border-l-2 border-[#5B4B8A]/30">
                                <p className="text-sm text-[#463853] leading-relaxed italic">
                                    &ldquo;{wish.message}&rdquo;
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-[#726558] italic py-4">
                        Belum ada ucapan. Jadilah yang pertama mengirimkan doa restu!
                    </p>
                )}
            </div>
        </section>
    );
}
