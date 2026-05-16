"use client";

import { useEffect, useState } from "react";
import Card from "../ui/Card";

type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export default function Countdown() {
    const weddingDate = new Date("2026-11-27T08:00:00").getTime();

    const calculateTimeLeft = (): TimeLeft => {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) {
        return (
            <section className="w-full flex flex-col items-center justify-center">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-xl mx-auto">
                    {[1, 2, 3, 4].map((item) => (
                    <Card
                        key={item}
                        className="w-[100px] md:w-[120px] text-center rounded-[2rem] bg-white border border-white shadow-xl shadow-[#3B2F2F]/5 py-10"
                    >
                        <h3 className="text-2xl md:text-4xl font-bold text-[#3B2F2F] mb-2">
                            0
                        </h3>

                        <p className="uppercase tracking-[0.15em] text-[9px] md:text-[11px] text-[#A67C52] whitespace-nowrap">
                            Loading
                        </p>
                    </Card>
                    ))}
                </div>
            </section>
        );
    }

    const items = [
        {
            label: "Days",
            value: timeLeft.days,
        },
        {
            label: "Hours",
            value: timeLeft.hours,
        },
        {
            label: "Minutes",
            value: timeLeft.minutes,
        },
        {
            label: "Seconds",
            value: timeLeft.seconds,
        },
    ];

    return (
        <section className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-xl mx-auto">
                {items.map((item) => (
                    <Card
                        key={item.label}
                        className="w-[100px] md:w-[120px] text-center rounded-[2rem] bg-white border border-white shadow-xl shadow-[#3B2F2F]/5 py-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        <h3 className="text-2xl md:text-4xl font-bold text-[#3B2F2F] mb-2">
                            {item.value}
                        </h3>

                        <p className="uppercase tracking-[0.15em] text-[9px] md:text-[11px] text-[#A67C52] whitespace-nowrap">
                            {item.label}
                        </p>
                    </Card>
                ))}
            </div>
        </section>
    );
}
