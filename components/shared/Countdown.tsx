"use client";

import { useEffect, useState } from "react";
import Card from "../ui/Card";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const WEDDING_DATE = new Date("2026-11-27T08:00:00+07:00").getTime();
const EMPTY_TIME: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function calculateTimeLeft(): TimeLeft {
    const difference = WEDDING_DATE - Date.now();

    if (difference <= 0) return EMPTY_TIME;

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

    useEffect(() => {
        const timer = window.setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => window.clearInterval(timer);
    }, []);

    const items = [
        { label: "Hari", value: timeLeft?.days ?? 0 },
        { label: "Jam", value: timeLeft?.hours ?? 0 },
        { label: "Menit", value: timeLeft?.minutes ?? 0 },
        { label: "Detik", value: timeLeft?.seconds ?? 0 },
    ];

    return (
        <section className="flex w-full flex-col items-center justify-center">
            <div className="mx-auto grid w-full max-w-2xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
                {items.map((item) => (
                    <Card
                        key={item.label}
                        className="rounded-[1.5rem] border border-white bg-white py-7 text-center shadow-xl shadow-[#3B2F2F]/5 transition duration-500 hover:-translate-y-1 hover:shadow-2xl md:py-10"
                    >
                        <h3 className="font-serif text-4xl font-semibold text-[#273d35] md:text-5xl">
                            {String(item.value).padStart(2, "0")}
                        </h3>
                        <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#A67C52] md:text-[11px]">
                            {item.label}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    );
}
