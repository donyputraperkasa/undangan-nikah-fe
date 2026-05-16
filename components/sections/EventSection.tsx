export default function EventSection() {
    return (
        <section className="w-full min-h-screen justify-between px-6 py-28 md:py-40 flex flex-col items-center text-center bg-white">
            <div className="mb-10"></div>
            {/* Header */}
            <div className="mb-16 md:mb-20">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-3">
                    Wedding Event
                </p>
                <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F]">
                    Wedding Schedule
                </h2>
            </div>

            {/* Event Cards Container - Menggunakan gap-8 agar tidak nempel */}
            <div className="w-full max-w-lg flex flex-col gap-8 md:gap-12">
                
                {/* Akad Nikah Card */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F8F5F2] p-10 md:p-14 shadow-xl shadow-[#3B2F2F]/5 group transition-all duration-500 hover:-translate-y-1">
                    {/* Decorative Border Internal */}
                    <div className="absolute inset-3 border border-[#B08B57]/10 rounded-[2rem] pointer-events-none" />
                    
                    <h3 className="relative z-10 text-2xl md:text-3xl font-serif text-[#3B2F2F] mb-6">
                        Akad Nikah
                    </h3>

                    <div className="space-y-2 mb-8 text-[#6B5B5B]">
                        <p className="text-base md:text-lg font-medium">Sunday, 20 December 2026</p>
                        <p className="text-sm tracking-widest uppercase">08.00 WIB - Finish</p>
                    </div>

                    <div className="h-[1px] w-12 bg-[#B08B57]/30 mx-auto mb-8" />

                    <p className="text-[#3B2F2F] font-medium leading-relaxed tracking-wide">
                        Grand Ballroom <br />
                        <span className="text-[#6B5B5B] font-light">Yogyakarta, Indonesia</span>
                    </p>
                </div>

                {/* Reception Card */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#F8F5F2] p-10 md:p-14 shadow-xl shadow-[#3B2F2F]/5 group transition-all duration-500 hover:-translate-y-1">
                    {/* Decorative Border Internal */}
                    <div className="absolute inset-3 border border-[#B08B57]/10 rounded-[2rem] pointer-events-none" />

                    <h3 className="relative z-10 text-2xl md:text-3xl font-serif text-[#3B2F2F] mb-6">
                        Reception
                    </h3>

                    <div className="space-y-2 mb-8 text-[#6B5B5B]">
                        <p className="text-base md:text-lg font-medium">Sunday, 20 December 2026</p>
                        <p className="text-sm tracking-widest uppercase">11.00 WIB - Finish</p>
                    </div>

                    <div className="h-[1px] w-12 bg-[#B08B57]/30 mx-auto mb-8" />

                    <p className="text-[#3B2F2F] font-medium leading-relaxed tracking-wide">
                        Grand Ballroom <br />
                        <span className="text-[#6B5B5B] font-light">Yogyakarta, Indonesia</span>
                    </p>
                </div>

            </div>

            <div></div>
        </section>
    );
}