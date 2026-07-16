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
        <section className="relative w-full overflow-hidden bg-[#f7f2e9] px-5 py-24 md:px-8 md:py-36">
            <div className="absolute -right-32 top-16 size-80 rounded-full bg-[#d9b56f]/10 blur-3xl" />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ad7f45]">
                    Konfirmasi Kehadiran
                </p>
                <h2 className="mt-4 font-serif text-5xl font-semibold leading-none text-[#273d35] md:text-7xl">
                    Apakah Anda akan hadir?
                </h2>
                <p className="mt-6 max-w-xl text-sm leading-7 text-[#76695c] md:text-base">
                    Kehadiran dan doa restu Anda akan menjadi kebahagiaan yang sangat berarti bagi kami.
                </p>

                <div className="mt-12 w-full rounded-[2rem] border border-[#ded2c0] bg-white/85 p-6 text-left shadow-[0_24px_70px_rgba(58,44,34,0.10)] backdrop-blur md:p-10">
                    {submitted ? (
                        <div className="flex min-h-80 flex-col items-center justify-center text-center">
                            <div className="flex size-16 items-center justify-center rounded-full bg-[#273d35] text-[#f1d99f]">
                                <Check size={30} strokeWidth={2} />
                            </div>
                            <h3 className="mt-6 font-serif text-4xl font-semibold text-[#273d35]">
                                Terima kasih, {name}.
                            </h3>
                            <p className="mt-3 max-w-md text-sm leading-7 text-[#76695c]">
                                Konfirmasi Anda sudah kami terima. Sampai bertemu di hari bahagia kami.
                            </p>
                            <button
                                type="button"
                                onClick={resetForm}
                                className="mt-7 text-sm font-bold text-[#ad7f45] underline decoration-[#ad7f45]/30 underline-offset-4"
                            >
                                Ubah konfirmasi
                            </button>
                        </div>
                    ) : (
                        <>
                            <div>
                                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ad7f45]">
                                    Nama Tamu
                                </p>

                                {personalizedName ? (
                                    <div className="flex min-h-16 items-center gap-4 rounded-2xl border border-[#d8c8ae] bg-[#fbf8f2] px-5 py-4">
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#273d35] text-[#f1d99f]">
                                            <UserRound size={18} />
                                        </span>
                                        <div>
                                            <p className="font-serif text-2xl font-semibold capitalize leading-tight text-[#273d35]">
                                                {personalizedName}
                                            </p>
                                            <p className="mt-1 text-xs text-[#8a7a6b]">Nama otomatis dari tautan undangan</p>
                                        </div>
                                    </div>
                                ) : (
                                    <input
                                        type="text"
                                        value={manualName}
                                        onChange={(event) => setManualName(event.target.value)}
                                        placeholder="Masukkan nama Anda"
                                        className="h-16 w-full rounded-2xl border border-[#d8c8ae] bg-[#fbf8f2] px-5 text-base text-[#273d35] outline-none transition placeholder:text-[#a89b8e] focus:border-[#ad7f45] focus:ring-4 focus:ring-[#ad7f45]/10"
                                    />
                                )}
                            </div>

                            <fieldset className="mt-7">
                                <legend className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#ad7f45]">
                                    Pilih Kehadiran
                                </legend>
                                <div className="grid gap-3 sm:grid-cols-2">
                                    <button
                                        type="button"
                                        aria-pressed={attendance === "attending"}
                                        onClick={() => setAttendance("attending")}
                                        className={`flex min-h-20 items-center gap-4 rounded-2xl border px-5 text-left transition ${attendance === "attending" ? "border-[#273d35] bg-[#273d35] text-white shadow-lg" : "border-[#d8c8ae] bg-[#fbf8f2] text-[#493d32] hover:border-[#ad7f45]"}`}
                                    >
                                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${attendance === "attending" ? "bg-white/10 text-[#f1d99f]" : "bg-[#273d35]/8 text-[#273d35]"}`}>
                                            <Check size={19} />
                                        </span>
                                        <span>
                                            <span className="block font-bold">Ya, saya hadir</span>
                                            <span className={`mt-1 block text-xs ${attendance === "attending" ? "text-white/60" : "text-[#8a7a6b]"}`}>Dengan senang hati</span>
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        aria-pressed={attendance === "not-attending"}
                                        onClick={() => setAttendance("not-attending")}
                                        className={`flex min-h-20 items-center gap-4 rounded-2xl border px-5 text-left transition ${attendance === "not-attending" ? "border-[#765b50] bg-[#765b50] text-white shadow-lg" : "border-[#d8c8ae] bg-[#fbf8f2] text-[#493d32] hover:border-[#ad7f45]"}`}
                                    >
                                        <span className={`flex size-10 shrink-0 items-center justify-center rounded-full ${attendance === "not-attending" ? "bg-white/10 text-white" : "bg-[#765b50]/8 text-[#765b50]"}`}>
                                            <X size={19} />
                                        </span>
                                        <span>
                                            <span className="block font-bold">Maaf, belum bisa</span>
                                            <span className={`mt-1 block text-xs ${attendance === "not-attending" ? "text-white/60" : "text-[#8a7a6b]"}`}>Saya tidak dapat hadir</span>
                                        </span>
                                    </button>
                                </div>
                            </fieldset>

                            <button
                                type="button"
                                disabled={!name || !attendance || loading}
                                onClick={handleSubmit}
                                className="mt-7 flex h-14 w-full items-center justify-center rounded-2xl bg-[#d9b56f] text-sm font-bold text-[#20342d] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#e6c98b] disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0"
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
