"use client";

import { useEffect, useState } from "react";
import Card from "../ui/Card";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

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

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const items = [
        {
            label: "Hari",
            value: timeLeft.days,
        },
        {
            label: "Jam",
            value: timeLeft.hours,
        },
        {
            label: "Menit",
            value: timeLeft.minutes,
        },
        {
            label: "Detik",
            value: timeLeft.seconds,
        },
    ];

    return (
        <section className="py-24 bg-[#F4EFE6]">
            <Container>
                <SectionTitle
                    subtitle="Save The Date"
                    title="Wedding Countdown"
                    description="Kami menantikan kehadiran Anda di hari bahagia kami."
                />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
                    {items.map((item) => (
                        <Card
                            key={item.label}
                            className="text-center"
                        >
                            <h3 className="text-4xl md:text-5xl text-[#5B4B8A] mb-2">
                                {item.value}
                            </h3>

                            <p className="uppercase tracking-[0.2em] text-sm text-[#A67C52]">
                                {item.label}
                            </p>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    );
}
