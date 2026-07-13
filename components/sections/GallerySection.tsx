import Image from "next/image";

const galleryItems = [
    { id: 1, className: "col-span-2 aspect-[16/10] md:col-span-4 md:row-span-2", position: "object-center" },
    { id: 2, className: "aspect-[3/4] md:col-span-2 md:row-span-2", position: "object-left" },
    { id: 3, className: "aspect-[3/4] md:col-span-2", position: "object-right" },
    { id: 4, className: "aspect-[3/4] md:col-span-2", position: "object-[45%_center]" },
];

export default function GallerySection() {
    return (
        <section className="w-full bg-[#20342d] px-5 py-24 text-white md:px-8 md:py-36">
            <div className="mx-auto max-w-6xl">
                <header className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#d9b56f]">Our moments</p>
                        <h2 className="mt-3 font-serif text-5xl leading-none md:text-7xl">Cerita dalam bingkai</h2>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-white/60">Beberapa potongan cerita yang membawa kami sampai pada hari bahagia ini.</p>
                </header>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-5">
                    {galleryItems.map((item) => (
                        <figure key={item.id} className={`group relative min-h-48 overflow-hidden rounded-[1.5rem] bg-white/10 ${item.className}`}>
                            <Image
                                src="/images/dummyfoto.png"
                                alt={`Momen kebersamaan Nugroho dan Agata ${item.id}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 33vw"
                                className={`object-cover transition duration-700 group-hover:scale-105 ${item.position}`}
                            />
                            <div className="absolute inset-0 bg-[#20342d]/10 transition group-hover:bg-transparent" />
                        </figure>
                    ))}
                </div>
                <p className="mt-8 text-center font-serif text-xl italic text-[#e6c98b]">“Every love story is beautiful, but ours is our favorite.”</p>
            </div>
        </section>
    );
}
