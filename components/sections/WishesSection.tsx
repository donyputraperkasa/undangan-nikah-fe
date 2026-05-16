import Button from "../ui/Button";

export default function WishSection() {
    return (
        <section className="w-full max-w-4xl min-h-screen justify-between px-6 py-32 md:py-44 flex flex-col items-center text-center bg-[#F8F5F2]">
            <div></div>
            {/* Header */}
            <div className="mb-16">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-4">
                    Wedding Wishes
                </p>
                <h2 className="text-4xl md:text-6xl font-serif text-[#3B2F2F] leading-tight">
                    Send Your Wishes
                </h2>
            </div>

            {/* Form Wishes - Dibuat lebih elegan dengan shadow halus */}
            <div className="w-full max-w-lg bg-white p-8 md:p-14 text-center py-12 mb-16 border border-white">
                <div className="flex flex-col gap-8">
                    <div></div>
                    {/* Input Name */}
                    <div className="space-y-3">
                        <input
                            type="text"
                            placeholder="Masukkan nama lengkap"
                            className="w-full max-w-md rounded border border-[#E7DDD4] bg-[#FCFAF8] px-6 py-4 text-base text-[#3B2F2F] placeholder:text-[#B8ACA1] outline-none focus:border-[#B08B57] focus:ring-1 focus:ring-[#B08B57] transition-all"
                        />
                    </div>

                    {/* Input Wishes */}
                    <div className="space-y-3">
                        <textarea
                            placeholder="Tuliskan ucapan terbaik Anda..."
                            rows={5}
                            className="w-full max-w-md rounded border border-[#E7DDD4] bg-[#FCFAF8] px-6 py-5 text-base text-[#3B2F2F] placeholder:text-[#B8ACA1] outline-none resize-none focus:border-[#B08B57] focus:ring-1 focus:ring-[#B08B57] transition-all"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <Button>
                            Kirim Ucapan
                        </Button>
                    </div>

                    <div></div>
                </div>
            </div>

            <div className="mb-16"></div>

{/* List Wishes - Kontainer Utama */}
<div className="w-full max-w-lg flex flex-col gap-6">
    
    {/* Card Ucapan */}
    <div className="group w-full bg-white/70 backdrop-blur-sm p-6 md:p-8 rounded-[2rem] shadow-sm border border-white transition-all hover:bg-white hover:shadow-md">
        
        {/* Header Pesan (Avatar & Nama) */}
        <div className="flex items-center gap-4 mb-5">
            {/* Avatar Initial */}
            <div className="w-12 h-12 shrink-0 rounded-full bg-[#B08B57]/10 flex items-center justify-center text-[#B08B57] font-serif font-bold italic border border-[#B08B57]/5">
                A
            </div>
            
            <div className="flex flex-col">
                <p className="text-base md:text-lg font-serif font-bold text-[#3B2F2F] leading-tight">
                    Adera Perkasa
                </p>
                <p className="text-[10px] md:text-xs text-[#B8ACA1] uppercase tracking-[0.2em] mt-1">
                    2 menit yang lalu
                </p>
            </div>
        </div>

        {/* Isi Pesan - Menggunakan text-left agar lebih mudah dibaca untuk pesan panjang */}
        <div className="relative pl-2 border-l-2 border-[#B08B57]/10">
            <p className="text-sm md:text-base text-[#6B5B5B] leading-relaxed italic">
                "Happy wedding! Semoga menjadi keluarga yang selalu bahagia, penuh berkah, dan senantiasa dalam lindungan-Nya."
            </p>
        </div>
    </div>

</div>

            <div></div>
        </section>
    );
}