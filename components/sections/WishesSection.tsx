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
        <section className="w-full max-w-4xl min-h-screen justify-between px-6 py-12 md:py-44 flex flex-col items-center text-center bg-[#F8F5F2]">
            {/* Header */}
            <div className="mb-8">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-4">
                    Wedding Wishes
                </p>
                <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F] leading-tight">
                    Send Your Wishes
                </h2>
            </div>

            {/* Form Wishes - Dibuat lebih elegan dengan shadow halus */}
            <div className="w-full max-w-lg bg-white p-8 md:p-14 text-center py-12 mb-16 border border-white">
                <div className="flex flex-col gap-8">
                    {/* Input Name */}
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full max-w-md rounded border border-[#E7DDD4] bg-[#FCFAF8] px-6 py-4 text-base text-[#3B2F2F] placeholder:text-[#B8ACA1] outline-none focus:border-[#B08B57] focus:ring-1 focus:ring-[#B08B57] transition-all"
                        />
                    </div>
                    {/* Input Wishes */}
                    <div className="space-y-3">
                        <textarea
                            placeholder="Input your wishes"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={5}
                            className="w-full max-w-md rounded border border-[#E7DDD4] bg-[#FCFAF8] px-6 py-5 text-base text-[#3B2F2F] placeholder:text-[#B8ACA1] outline-none resize-none focus:border-[#B08B57] focus:ring-1 focus:ring-[#B08B57] transition-all"
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="pt-2 flex justify-center">
                        <Button onClick={handleSubmit}>
                            {loading ? "Sending..." : "Send Your Wishes"}
                        </Button>
                    </div>
                </div>
            </div>

            {/* List Wishes - Kontainer Utama */}
            <div className="w-full max-w-lg flex flex-col gap-2">
                {Array.isArray(wishes) && wishes.map((wish, index) => (
                    <div
                        key={wish.id ?? index}
                        className="group w-full bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-sm border border-white transition-all hover:bg-white hover:shadow-md"
                    >
                        <div className="flex items-center gap-4 mb-5">
                            <div className="w-12 h-12 shrink-0 rounded-full bg-[#B08B57]/10 flex items-center justify-center text-[#B08B57] font-serif font-bold italic border border-[#B08B57]/5 uppercase">
                                {(wish.name || wish.guestName || "G").charAt(0)}
                            </div>

                            <div className="flex flex-col text-left">
                                <p className="text-lg md:text-lg font-serif font-bold text-[#3B2F2F] leading-tight">
                                    {wish.name || wish.guestName}
                                </p>

                                <p className="text-[10px] md:text-xs text-[#B8ACA1] uppercase tracking-[0.2em] mt-1">
                                    Wedding Guest
                                </p>
                            </div>
                        </div>

                        <div className="relative pl-2 border-l-2 border-[#B08B57]/10 text-left">
                            <p className="text-sm md:text-base text-[#6B5B5B] leading-relaxed italic">
                                “{wish.message}”
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
