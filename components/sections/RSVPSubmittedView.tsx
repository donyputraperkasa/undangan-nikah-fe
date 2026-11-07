import { Check } from "lucide-react";
import type { RSVPSubmittedViewProps } from "@/types/rsvp.type";

export default function RSVPSubmittedView({ name, onReset }: RSVPSubmittedViewProps) {
    return (
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
                onClick={onReset}
                className="mt-7 text-sm font-semibold text-[#5B4B8A] underline decoration-[#5B4B8A]/30 underline-offset-4 hover:text-[#4B3D74]"
            >
                Ubah konfirmasi
            </button>
        </div>
    );
}

