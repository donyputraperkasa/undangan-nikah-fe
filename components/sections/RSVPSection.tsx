"use client";

import { useState } from "react";

import Button from "../ui/Button";
import { createRSVP } from "@/services/rsvp.service";

type RSVPSectionProps = {
    guestName?: string;
};

export default function RSVPSection({ guestName = "" }: RSVPSectionProps) {
    const initialName = guestName === "Tamu Undangan" ? "" : guestName;
    const [name, setName] = useState(initialName);
    const [attendance, setAttendance] = useState("attending");
    const [totalGuest, setTotalGuest] = useState(1);
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        if (!name) return;

        try {
            setLoading(true);

            await createRSVP({
                name,
                attendance,
                totalGuest,
            });

            alert("RSVP submitted successfully ✨");

            setName("");
            setAttendance("attending");
            setTotalGuest(1);
        } catch (error) {
            console.error("Failed to submit RSVP", error);
            alert("Failed to submit RSVP");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="w-full px-6 py-20 md:py-36 flex flex-col items-center justify-center text-center bg-white">
            <p className="text-sm tracking-[0.3em] uppercase text-[#B08B57] mb-4">
                Reservation
            </p>

            <h2 className="text-4xl md:text-6xl leading-[1.2] font-semibold text-[#3B2F2F] mb-8">
                RSVP
            </h2>

            <p className="max-w-md text-base md:text-lg text-[#6B5B5B] leading-8 mb-14">
                We hope you will attend and celebrate this special day with us.
            </p>

            <div className="w-full max-w-xl bg-[#F8F5F2] rounded-[2rem] p-8 md:p-12 border border-white shadow-xl shadow-[#3B2F2F]/5 flex flex-col gap-6 text-left">
                <div className="flex flex-col gap-3">
                    <label className="text-sm uppercase tracking-[0.2em] text-[#B08B57]">
                        Your Name
                    </label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Input your name"
                        className="w-full h-[64px] rounded-2xl border border-[#E7DDD4] bg-white px-5 text-lg outline-none focus:border-[#B08B57] transition-all"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-sm uppercase tracking-[0.2em] text-[#B08B57]">
                        Attendance
                    </label>

                    <select
                        value={attendance}
                        onChange={(e) => setAttendance(e.target.value)}
                        className="w-full h-[64px] rounded-2xl border border-[#E7DDD4] bg-white px-5 text-lg outline-none focus:border-[#B08B57] transition-all appearance-none"
                    >
                        <option value="attending">
                            Will Attend
                        </option>

                        <option value="not-attending">
                            Unable To Attend
                        </option>
                    </select>
                </div>

                <div className="flex flex-col gap-3">
                    <label className="text-sm uppercase tracking-[0.2em] text-[#B08B57]">
                        Total Guest
                    </label>

                    <input
                        type="number"
                        min={1}
                        value={totalGuest}
                        onChange={(e) =>
                            setTotalGuest(Number(e.target.value))
                        }
                        className="w-full h-[64px] rounded-2xl border border-[#E7DDD4] bg-white px-5 text-lg outline-none focus:border-[#B08B57] transition-all"
                    />
                </div>

                <div className="pt-4 flex justify-center">
                    <Button onClick={handleSubmit}>
                        {loading
                            ? "Submitting..."
                            : "Confirm Attendance"}
                    </Button>
                </div>
            </div>
        </section>
    );
}
