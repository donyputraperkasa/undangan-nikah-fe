import { MapPin, QrCode } from "lucide-react";
import GununganOrnament from "../ornaments/GununganOrnament";
import VintageCorner from "../ornaments/VintageCorner";

export default function MapSection() {
    const semampirMapUrl = "https://www.google.com/maps/place/Kantor+Kelurahan+Semampir/@-7.8009005,112.008606,17z";
    const gerejaMapUrl = "https://maps.google.com/?q=Gereja+Katolik+St.+Paulus+Nganjuk";

    return (
        <section id="map-section" className="w-full bg-[#FAF7F2] px-6 py-20 md:py-28 border-t border-[#EFE8DD]">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                {/* Gunungan Accent at Top matching right panel */}
                <div className="w-12 h-16 mb-4 opacity-80">
                    <GununganOrnament variant="full" color="#A67C52" className="w-full h-full" />
                </div>

                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#A67C52] font-semibold mb-3">
                    Lokasi Acara
                </p>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2E335B] mb-6">
                    Petunjuk Lokasi
                </h2>

                <p className="max-w-xl text-[#6B5E78] leading-relaxed mb-12 text-sm sm:text-base font-serif italic">
                    &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.&rdquo;
                </p>

                {/* QR Code and Location Card matching the printed Right Panel */}
                <div className="grid md:grid-cols-2 gap-8 w-full max-w-3xl items-center mb-12">
                    {/* Scan Lokasi Card */}
                    <div className="relative overflow-hidden rounded-[2rem] border border-[#E6DCCE] bg-white/90 p-8 shadow-xl shadow-[#A67C52]/10 flex flex-col items-center">
                        <VintageCorner position="top-right" color="#A67C52" className="m-2" />
                        <VintageCorner position="bottom-left" color="#A67C52" className="m-2" />

                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#2E335B] mb-5">
                            SCAN LOKASI
                        </p>

                        {/* Styled QR Box matching printed card */}
                        <div className="w-48 sm:w-56 p-4 rounded-2xl bg-[#614B35] text-white flex flex-col items-center shadow-lg">
                            <div className="bg-[#FAF7F2] text-[#614B35] text-[11px] font-bold tracking-[0.2em] px-4 py-1 rounded-md uppercase mb-3">
                                SCAN ME
                            </div>
                            <div className="bg-white p-3 rounded-xl shadow-inner w-full flex items-center justify-center">
                                {/* SVG QR Code representation */}
                                <svg
                                    viewBox="0 0 100 100"
                                    className="w-full h-full max-w-[150px] aspect-square"
                                    fill="#2E2836"
                                >
                                    {/* Corner squares (position markers) */}
                                    <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="#2E2836" strokeWidth="6" />
                                    <rect x="13" y="13" width="12" height="12" rx="2" />

                                    <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="#2E2836" strokeWidth="6" />
                                    <rect x="75" y="13" width="12" height="12" rx="2" />

                                    <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="#2E2836" strokeWidth="6" />
                                    <rect x="13" y="75" width="12" height="12" rx="2" />

                                    {/* Data pattern modules */}
                                    <rect x="42" y="10" width="7" height="7" />
                                    <rect x="52" y="15" width="6" height="6" />
                                    <rect x="42" y="25" width="6" height="8" />
                                    <rect x="10" y="42" width="8" height="7" />
                                    <rect x="24" y="45" width="7" height="6" />
                                    <rect x="36" y="38" width="6" height="6" />
                                    <rect x="48" y="42" width="8" height="8" />
                                    <rect x="60" y="38" width="6" height="6" />
                                    <rect x="72" y="45" width="8" height="6" />
                                    <rect x="85" y="40" width="7" height="8" />
                                    <rect x="40" y="56" width="8" height="8" />
                                    <rect x="55" y="55" width="8" height="6" />
                                    <rect x="68" y="60" width="6" height="8" />
                                    <rect x="42" y="72" width="7" height="7" />
                                    <rect x="54" y="70" width="8" height="8" />
                                    <rect x="42" y="85" width="8" height="6" />
                                    <rect x="55" y="82" width="6" height="8" />
                                    <rect x="68" y="75" width="8" height="6" />
                                    <rect x="80" y="68" width="8" height="8" />
                                    <rect x="75" y="82" width="7" height="8" />
                                    <rect x="86" y="85" width="6" height="6" />
                                </svg>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-[#726558] max-w-xs">
                            Arahkan kamera smartphone Anda ke QR code atau klik tombol di bawah untuk membuka peta.
                        </p>
                    </div>

                    {/* Venue Quick Links */}
                    <div className="space-y-4 text-left">
                        <div className="rounded-2xl border border-[#E6DCCE] bg-white/90 p-6 shadow-md">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#A67C52] shrink-0 mt-1" size={20} />
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A67C52]">Lokasi Resepsi</span>
                                    <h4 className="font-serif text-lg font-semibold text-[#2E335B]">Balai Desa Kelurahan Semampir</h4>
                                    <p className="text-xs text-[#726558] mt-1">Kota Kediri, Jawa Timur</p>
                                    <a
                                        href={semampirMapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#5B4B8A] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#4B3D74]"
                                    >
                                        Buka di Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-[#E6DCCE] bg-white/90 p-6 shadow-md">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[#A67C52] shrink-0 mt-1" size={20} />
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#A67C52]">Lokasi Akad / Pemberkatan</span>
                                    <h4 className="font-serif text-lg font-semibold text-[#2E335B]">Gereja St. Paulus Nganjuk</h4>
                                    <p className="text-xs text-[#726558] mt-1">Kabupaten Nganjuk, Jawa Timur</p>
                                    <a
                                        href={gerejaMapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#FAF4EC] border border-[#E6DCCE] px-4 py-2 text-xs font-semibold text-[#2E335B] transition hover:bg-[#5B4B8A] hover:text-white"
                                    >
                                        Buka di Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map Embedded Iframe for Balai Desa Semampir */}
                <div className="w-full overflow-hidden rounded-[2rem] shadow-xl shadow-[#A67C52]/10 border border-[#E6DCCE]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.993437568165!2d112.00603107476839!3d-7.800900492219199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78572f0857e017%3A0x4e73198610713337!2sKantor%20Kelurahan%20Semampir!5e0!3m2!1sid!2sid!4v1716000000000!5m2!1sid!2sid"
                        width="100%"
                        height="400"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0 w-full"
                        title="Peta Lokasi Pernikahan"
                    />
                </div>
            </div>
        </section>
    );
}