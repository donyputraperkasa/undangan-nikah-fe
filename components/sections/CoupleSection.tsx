export default function CoupleSection() {
    return (
        <section
            id="couple-section"
            className="relative flex items-center justify-center h-screen w-full overflow-hidden"
        >
            {/* Background Image - Memastikan cover penuh tanpa celah */}
            <div className="absolute inset-0">
                <img
                    src="/images/dummyfoto.png"
                    alt="Wedding Couple"
                    className="w-full h-full object-cover object-center"
                />
                {/* Dark Overlay untuk keterbacaan teks */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-white text-center">
                
                {/* Group Teks Utama - Menggunakan spacing (gap) agar tidak mepet */}
                <div className="flex flex-col gap-2 md:gap-4">
                    <p className="text-xs md:text-sm tracking-[0.3em] uppercase opacity-90">
                        The Wedding Of
                    </p>

                    {/* Ukuran font disesuaikan agar lebih elegan dan tidak "kebesaran" */}
                    <h1 className="text-3xl md:text-5xl font-light tracking-wide">
                        Nugroho & Agata
                    </h1>

                    <p className="text-base md:text-lg tracking-[0.2em] font-medium">
                        27.11.2026
                    </p>
                </div>

                {/* Swipe Up Indicator - Diposisikan absolut di bawah agar tidak mendorong konten tengah */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <p className="text-sm md:text-xs tracking-[0.2em]">
                        Swipe Up
                    </p>
                </div>
            </div>
        </section>
    );
}