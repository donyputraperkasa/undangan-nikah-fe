export default function GallerySection() {
    // Array dummy untuk mempermudah mapping gambar nantinya
    const galleryItems = [
        { id: 1, bgClass: "bg-[#E7DED7]", colSpan: "col-span-1 h-[200px] md:h-[280px]" },
        { id: 2, bgClass: "bg-[#D8CCC2]", colSpan: "col-span-1 h-[260px] md:h-[360px]" },
        { id: 3, bgClass: "bg-[#DCCFC5]", colSpan: "col-span-1 h-[260px] md:h-[360px] -mt-14 md:-mt-20" },
        { id: 4, bgClass: "bg-[#EAE2DB]", colSpan: "col-span-1 h-[200px] md:h-[280px]" },
    ];

    return (
        // 1. Mengembalikan lebar section ke w-full dan menambah padding vertikal (py-28 md:py-36)
        <section className="w-full justify-between px-6 py-12 md:py-36 flex flex-col items-center text-center bg-[#F8F5F2]">
            {/* Header - Menghapus mt-5 yang tidak perlu karena sudah diatur oleh padding section */}
            <div className="mb-8 md:mb-20">
                <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-[#B08B57] mb-3">
                    Our Moments
                </p>
                <h2 className="text-3xl md:text-5xl font-serif text-[#3B2F2F]">
                    Our Gallery
                </h2>
            </div>

            {/* Gallery Grid - Membatasi lebar grid di sini agar simetris di tengah */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 w-full max-w-md md:max-w-xl auto-rows-min mb-10">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className={`relative overflow-hidden rounded-[2rem] shadow-md shadow-[#3B2F2F]/5 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${item.bgClass} ${item.colSpan}`}
                    >
                        {/* Tempat taruh tag <img> nanti: */}
                        {/* <img src="..." className="w-full h-full object-cover" alt="Gallery" /> */}
                        {/* Overlay halus saat di-hover */}
                        <div className="absolute inset-0 bg-[#3B2F2F]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>

            <div className="h-2" />
        </section>
    );
}