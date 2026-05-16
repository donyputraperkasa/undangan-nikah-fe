import { Heart, Sparkles } from "lucide-react";

export default function EventSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white px-6 py-28 md:py-40 flex flex-col items-center text-center">
            {/* Background Ornament */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-[#F8F5F2] rounded-full blur-[120px] opacity-70 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#F3E8DC] rounded-full blur-[120px] opacity-70 pointer-events-none" />

            {/* Floating Ornament */}
            <Sparkles className="absolute top-24 left-10 w-6 h-6 text-[#D6B88D]/40 animate-pulse hidden md:block" />
            <Heart className="absolute bottom-32 right-10 w-5 h-5 text-[#D6B88D]/40 animate-pulse hidden md:block" />

            {/* Header */}
            <div className="relative z-10 mb-20 animate-[fadeUp_1s_ease-out]">
                <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-[#B08B57] mb-4">
                    Wedding Event
                </p>

                <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F] leading-tight mb-6">
                    Celebrate With Us
                </h2>

                <p className="max-w-2xl text-[#6B5B5B] leading-relaxed text-base md:text-lg px-4">
                    We warmly invite you to join us in celebrating one of the
                    most beautiful moments of our lives.
                </p>
            </div>

            {/* Event Cards */}
            <div className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-8 md:gap-10">
                {/* Wedding Mass */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F8F5F2] p-10 md:p-14 shadow-2xl shadow-[#3B2F2F]/5 border border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-[fadeUp_1s_ease-out]">
                    {/* Decorative Border */}
                    <div className="absolute inset-3 border border-[#B08B57]/10 rounded-[2rem] pointer-events-none" />

                    {/* Ornament */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#EADBC8]/40 blur-3xl" />

                    <p className="relative z-10 text-xs tracking-[0.4em] uppercase text-[#B08B57] mb-4">
                        Holy Matrimony
                    </p>

                    <h3 className="relative z-10 text-3xl md:text-4xl font-serif text-[#3B2F2F] mb-8 leading-tight">
                        Wedding Mass
                    </h3>

                    <div className="space-y-3 mb-10 text-[#6B5B5B]">
                        <p className="text-lg md:text-xl font-medium">
                            Friday, 27 November 2026
                        </p>

                        <p className="text-sm tracking-[0.3em] uppercase">
                            09.00 AM WIB
                        </p>
                    </div>

                    <div className="h-[1px] w-16 bg-[#B08B57]/30 mb-8" />

                    <p className="text-[#3B2F2F] text-lg font-medium leading-relaxed">
                        Catholic Church of Kediri
                    </p>

                    <p className="text-[#6B5B5B] mt-2 leading-relaxed">
                        Kediri, East Java
                    </p>
                </div>

                {/* Reception */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F8F5F2] p-10 md:p-14 shadow-2xl shadow-[#3B2F2F]/5 border border-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-[fadeUp_1.3s_ease-out]">
                    {/* Decorative Border */}
                    <div className="absolute inset-3 border border-[#B08B57]/10 rounded-[2rem] pointer-events-none" />

                    {/* Ornament */}
                    <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#EADBC8]/40 blur-3xl" />

                    <p className="relative z-10 text-xs tracking-[0.4em] uppercase text-[#B08B57] mb-4">
                        Wedding Reception
                    </p>

                    <h3 className="relative z-10 text-3xl md:text-4xl font-serif text-[#3B2F2F] mb-8 leading-tight">
                        Reception Party
                    </h3>

                    <div className="space-y-3 mb-10 text-[#6B5B5B]">
                        <p className="text-lg md:text-xl font-medium">
                            Friday, 27 November 2026
                        </p>

                        <p className="text-sm tracking-[0.3em] uppercase">
                            01.00 PM WIB
                        </p>
                    </div>

                    <div className="h-[1px] w-16 bg-[#B08B57]/30 mb-8" />

                    <p className="text-[#3B2F2F] text-lg font-medium leading-relaxed">
                        Semampir Village Hall
                    </p>

                    <p className="text-[#6B5B5B] mt-2 leading-relaxed">
                        Kediri City, East Java
                    </p>
                </div>
            </div>
        </section>
    );
}