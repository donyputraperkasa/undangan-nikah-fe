import { Clock, MapPin, ExternalLink } from "lucide-react";
import VintageCorner from "../ornaments/VintageCorner";

export default function EventSection() {
    return (
        <section id="event-section" className="relative w-full overflow-hidden bg-[#FAF7F2] px-6 py-20 md:py-32 flex flex-col items-center text-center">
            {/* Ambient Background Ornament */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-[#5B4B8A]/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-[#A67C52]/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header */}
            <div className="relative z-10 mb-14 max-w-2xl">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#A67C52] font-semibold mb-3">
                    Rangkaian Acara
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E335B] leading-tight mb-4">
                    Hari Bahagia Kami
                </h2>

                <p className="text-[#6B5E78] leading-relaxed text-sm md:text-base max-w-lg mx-auto">
                    Dengan penuh rasa syukur, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu pada:
                </p>
            </div>

            {/* Event Cards (2 Columns matching printed invitation: AKAD & RESEPSI) */}
            <div className="relative z-10 w-full max-w-4xl grid md:grid-cols-2 gap-8 md:gap-8">
                {/* AKAD / PEMBERKATAN */}
                <div className="relative overflow-hidden rounded-[2rem] bg-white/90 p-8 sm:p-10 shadow-xl shadow-[#A67C52]/5 border border-[#E6DCCE] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-center flex flex-col justify-between">
                    <VintageCorner position="top-left" color="#A67C52" className="m-2" />
                    <VintageCorner position="bottom-right" color="#A67C52" className="m-2" />

                    <div>
                        <span className="inline-block rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1 text-[11px] font-bold tracking-[0.25em] text-[#A67C52] uppercase mb-4">
                            Pemberkatan
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-serif text-[#2E335B] font-semibold mb-6">
                            AKAD
                        </h3>

                        <div className="space-y-2 mb-6 text-[#463853]">
                            <p className="text-base sm:text-lg font-medium">
                                Jumat, 27 November 2026
                            </p>

                            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#5B4B8A]">
                                <Clock size={16} />
                                <span>Pukul 10.00 WIB</span>
                            </div>
                        </div>

                        <div className="h-px w-16 bg-[#A67C52]/30 mx-auto mb-6" />

                        <div className="space-y-1.5 mb-8">
                            <p className="text-lg font-serif font-semibold text-[#2E335B] flex items-center justify-center gap-2">
                                <MapPin size={18} className="text-[#A67C52] shrink-0" />
                                Gereja St. Paulus Nganjuk
                            </p>
                            <p className="text-xs sm:text-sm text-[#726558]">
                                Kabupaten Nganjuk, Jawa Timur
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://maps.google.com/?q=Gereja+Katolik+St.+Paulus+Nganjuk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FAF4EC] border border-[#E6DCCE] px-5 py-2.5 text-xs font-semibold text-[#2E335B] transition-all hover:bg-[#5B4B8A] hover:text-white"
                    >
                        <ExternalLink size={14} /> Petunjuk Arah
                    </a>
                </div>

                {/* RESEPSI */}
                <div className="relative overflow-hidden rounded-[2rem] bg-white/90 p-8 sm:p-10 shadow-xl shadow-[#A67C52]/5 border border-[#E6DCCE] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl text-center flex flex-col justify-between">
                    <VintageCorner position="top-right" color="#A67C52" className="m-2" />
                    <VintageCorner position="bottom-left" color="#A67C52" className="m-2" />

                    <div>
                        <span className="inline-block rounded-full bg-[#FAF4EB] border border-[#E6DCCE] px-4 py-1 text-[11px] font-bold tracking-[0.25em] text-[#A67C52] uppercase mb-4">
                            Perayaan
                        </span>

                        <h3 className="text-2xl sm:text-3xl font-serif text-[#2E335B] font-semibold mb-6">
                            RESEPSI
                        </h3>

                        <div className="space-y-2 mb-6 text-[#463853]">
                            <p className="text-base sm:text-lg font-medium">
                                Jumat, 27 November 2026
                            </p>

                            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-[#5B4B8A]">
                                <Clock size={16} />
                                <span>17.00 – 18.30 WIB</span>
                            </div>
                        </div>

                        <div className="h-px w-16 bg-[#A67C52]/30 mx-auto mb-6" />

                        <div className="space-y-1.5 mb-8">
                            <p className="text-lg font-serif font-semibold text-[#2E335B] flex items-center justify-center gap-2">
                                <MapPin size={18} className="text-[#A67C52] shrink-0" />
                                Balai Desa Kelurahan Semampir
                            </p>
                            <p className="text-xs sm:text-sm text-[#726558]">
                                Kota Kediri, Jawa Timur
                            </p>
                        </div>
                    </div>

                    <a
                        href="https://maps.app.goo.gl/DT4vURy9rh9EGDi7A"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FAF4EC] border border-[#E6DCCE] px-5 py-2.5 text-xs font-semibold text-[#2E335B] transition-all hover:bg-[#5B4B8A] hover:text-white"
                    >
                        <ExternalLink size={14} /> Petunjuk Arah
                    </a>
                </div>
            </div>
        </section>
    );
}