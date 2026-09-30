import Countdown from "../shared/Countdown";
import { Calendar } from "lucide-react";

export default function CountdownSection() {
    const calendarUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Nugroho+%26+Agata&dates=20261127T030000Z/20261127T113000Z&details=Pernikahan+Nugroho+%26+Agata.%0AAkad%3A+10.00+WIB+di+Gereja+St.+Paulus+Nganjuk%0AResepsi%3A+17.00+-+18.30+WIB+di+Balai+Desa+Kelurahan+Semampir&location=Balai+Desa+Kelurahan+Semampir";

    return (
        <section className="w-full bg-[#FAF7F2] px-6 py-20 md:py-28 text-center border-t border-[#EFE8DD]">
            <div className="max-w-4xl mx-auto flex flex-col items-center">
                {/* Heading matching printed invitation */}
                <p className="text-xs sm:text-sm tracking-[0.35em] uppercase text-[#A67C52] font-semibold mb-3">
                    Yang akan dilaksanakan pada:
                </p>

                {/* Big Date Number matching printed invitation "27.11.2026" */}
                <h2 className="text-5xl sm:text-6xl md:text-7xl font-serif text-[#2E335B] font-semibold tracking-tight mb-2">
                    27.11.2026
                </h2>

                <p className="text-sm sm:text-base font-serif italic text-[#726558] mb-10">
                    Jumat, 27 November 2026
                </p>

                {/* Countdown Component */}
                <div className="w-full mb-10">
                    <Countdown />
                </div>

                {/* Save The Date Button */}
                <a
                    href={calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#5B4B8A] px-7 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4B3D74] hover:shadow-lg active:translate-y-0"
                >
                    <Calendar size={17} /> Simpan ke Google Calendar
                </a>
            </div>
        </section>
    );
}