"use client";

import { Check, UserRound, X } from "lucide-react";
import { useState } from "react";

import { createRSVP } from "@/services/rsvp.service";

type RSVPSectionProps = {
    guestName?: string;
};

type Attendance = "" | "attending" | "not-attending";

export default function RSVPSection({ guestName = "" }: RSVPSectionProps) {
    const personalizedName = guestName.trim() && guestName !== "Tamu Undangan"
        ? guestName.trim()
        : "";
    const [manualName, setManualName] = useState("");
    const [attendance, setAttendance] = useState<Attendance>("");
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const name = personalizedName || manualName.trim();

    async function handleSubmit() {
        if (!name || !attendance || loading) return;

        try {
            setLoading(true);

            await createRSVP({
                name,
                attendance,
                totalGuest: 1,
            });

            setSubmitted(true);
        } catch (error) {
            console.error("Failed to submit RSVP", error);
            alert("Konfirmasi belum berhasil dikirim. Silakan coba kembali.");
        } finally {
            setLoading(false);
        }
    }

    function resetForm() {
        setAttendance("");
        setSubmitted(false);

        if (!personalizedName) {
            setManualName("");
        }
    }

    return (
        <section id="rsvp-section" className="relative w-full overflow-hidden bg-[#FAF7F2] px-5 py-20 md:px-8 md:py-28 border-t border-[#EFE8DD]">
            <div className="absolute -right-32 top-16 size-80 rounded-full bg-[#5B4B8A]/5 blur-3xl" />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#A67C52]">
                    Konfirmasi Kehadiran
                </p>
                <h2 className="mt-4 font-serif text-4xl sm:text-5xl font-semibold leading-tight text-[#2E335B]">
                    Apakah Anda Akan Hadir?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-[#6B5E78] md:text-base">
                    Kehadiran dan doa restu Anda akan menjadi kebahagiaan yang sangat berarti bagi kami.
                </p>

                <div className="mt-10 w-full rounded-[2rem] border border-[#E6DCCE] bg-white/90 p-6 text-left shadow-xl shadow-[#A67C52]/5 backdrop-blur md:p-10">
                    {submitted ? (
                        <div className="flex min-h-72 flex-col items-center justify-center text-center">
                            <div className="flex size-16 items-center justify-center rounded-full bg-[#5B4B8A] text-white shadow-lg">
                                <Check size={30} strokeWidth={2} />
                            </div>
                            <h3 className="mt-6 font-serif text-3xl sm:text-4xl font-semibold text-[#2E335B]">
                                Terima kasih, {name}.
                            </h3>
                            <p className="mt-3 max-w-md text-sm leading-7 text-[#6B5E78]">
                                Konfirmasi Anda sudah kami terima. Sampai bertemu di hari bahagia kami.
                            </p>
                            <button
                                type="button"
                                onClick={resetForm}
                                className="mt-7 text-sm font-semibold text-[#5B4B8A] underline decoration-[#5B4B8A]/30 underline-offset-4 hover:text-[#4B3D74]"
                            >
                                Ubah konfirmasi
                            </button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#A67C52]">
                                    Nama Tamu
                                </p>

                                {personalizedName ? (
                                    <div className="flex min-h-16 items-center gap-4 rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 py-4">
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#5B4B8A] text-white">
                                            <UserRound size={18} />
                                        </span>
                                        <div>
                                            <p className="font-serif text-2xl font-semibold capitalize leading-tight text-[#2E335B]">
                                                {personalizedName}
                                            </p>
                                            <p className="mt-1 text-xs text-[#726558]">Nama otomatis dari tautan undangan</p>
                                        </div>
                                    </div>
                                ) : (
                                    <input
                                        type="text"
                                        value={manualName}
                                        onChange={(event) => setManualName(event.target.value)}
                                        placeholder="Masukkan nama Anda"
                                        className="h-14 w-full rounded-2xl border border-[#E6DCCE] bg-[#FAF4EB] px-5 text-base text-[#2E335B] outline-none transition placeholder:text-[#A89B8E] focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10"
                                    />
                                )}
                            </div>

                            <fieldset className="mt-7">
                                <legend className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#A67C52]">
                                    Pilih Kehadiran
                                </legend>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        aria-pressed={attendance === "attending"}
                                        onClick={() => setAttendance("attending")}
                                        className={`flex min-h-20 items-center gap-4 rounded-2xl border px-5 text-left transition ${attendance === "attending" ? "border-[#5B4B8A] bg-[#5B4B8A] text-white shadow-lg" : "border-[#E6DCCE] bg-[#FAF4EB] text-[#2E335B] hover:border-[#5B4B8A]"}`}
                                    >
                                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${attendance === "attending" ? "bg-white/20 text-white" : "bg-[#5B4B8A]/10 text-[#5B4B8A]"}`}>
                                            <Check size={19} />
                                        </span>
                                        <span>
                                            <span className="block font-bold">Ya, saya hadir</span>
                                            <span className={`mt-1 block text-xs ${attendance === "attending" ? "text-white/80" : "text-[#726558]"}`}>Dengan senang hati</span>
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        aria-pressed={attendance === "not-attending"}
                                        onClick={() => setAttendance("not-attending")}
                                        className={`flex min-h-20 items-center gap-4 rounded-2xl border px-5 text-left transition ${attendance === "not-attending" ? "border-[#765B50] bg-[#765B50] text-white shadow-lg" : "border-[#E6DCCE] bg-[#FAF4EB] text-[#2E335B] hover:border-[#765B50]"}`}
                                    >
                                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${attendance === "not-attending" ? "bg-white/20 text-white" : "bg-[#765B50]/10 text-[#765B50]"}`}>
                                            <X size={19} />
                                        </span>
                                        <span>
                                            <span className="block font-bold">Maaf, belum bisa</span>
                                            <span className={`mt-1 block text-xs ${attendance === "not-attending" ? "text-white/80" : "text-[#726558]"}`}>Saya tidak dapat hadir</span>
                                        </span>
                                    </button>
                                </div>
                            </fieldset>

                            <button
                                type="button"
                                disabled={!name || !attendance || loading}
                                onClick={handleSubmit}
                                className="mt-7 flex h-13 w-full items-center justify-center rounded-2xl bg-[#5B4B8A] text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#4B3D74] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
                            >
                                {loading ? "Mengirim konfirmasi..." : "Kirim Konfirmasi"}
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
