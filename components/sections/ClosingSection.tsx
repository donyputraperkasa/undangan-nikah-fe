export default function ClosingSection() {
    return (
        <section className="w-full min-h-[80vh] px-6 py-28 md:py-40 flex flex-col items-center justify-center text-center bg-[#3B2F2F] relative overflow-hidden">
            
            {/* Dekorasi halus di background (opsional) */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-64 h-64 rounded-full bg-white blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 rounded-full bg-[#B08B57] blur-[100px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Small Label */}
                <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-[#D8C3A5] mb-8 opacity-90">
                    Thank You
                </p>

                {/* Main Heading - Menggunakan font-serif untuk kesan elegan */}
                <h2 className="text-4xl md:text-7xl font-serif text-white leading-[1.2] mb-10 tracking-tight">
                    See You On <br className="md:hidden" /> Our Special Day
                </h2>

                {/* Divider Line */}
                <div className="h-[1px] w-16 bg-[#D8C3A5]/30 mb-10" />

                {/* Closing Message */}
                <p className="max-w-xl text-base md:text-xl text-[#F5EDE5]/80 leading-relaxed font-light italic">
                    "Merupakan suatu kehormatan dan kebahagiaan bagi kami <br className="hidden md:block" /> 
                    apabila Bapak/Ibu/Saudara/i berkenan hadir <br className="hidden md:block" /> 
                    dan memberikan doa restu bagi kami."
                </p>

                {/* Signature - Nama Mempelai Kecil (Opsional) */}
                <div className="mt-16">
                    <p className="font-serif text-2xl md:text-3xl text-[#D8C3A5] italic">
                        Nugroho & Agata
                    </p>
                </div>
            </div>
        </section>
    );
}