import { AtSign } from "lucide-react";
import Image from "next/image";

const people = [
    {
        role: "Mempelai Pria",
        name: "Ignasius Dwi Cahyo Nugroho",
        nickname: "Nugroho",
        parents: "Putra dari Bapak Antonius & Ibu Maria",
        position: "object-[48%_center]",
    },
    {
        role: "Mempelai Wanita",
        name: "Agata",
        nickname: "Agata",
        parents: "Putri dari Bapak Yohanes & Ibu Theresia",
        position: "object-[55%_center]",
    },
];

export default function CoupleSection() {
    return (
        <section id="couple-section" className="relative w-full overflow-hidden bg-[#f7f2e9] px-5 py-24 md:px-8 md:py-36">
            <div className="absolute -left-24 top-24 size-72 rounded-full bg-[#d8be82]/15 blur-3xl" />
            <div className="mx-auto max-w-5xl">
                <header className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
                    <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#ad7f45]">Salam penuh kasih</p>
                    <h2 className="mt-4 font-serif text-5xl leading-none text-[#273d35] md:text-7xl">Dua hati, satu tujuan</h2>
                    <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#76695c] md:text-base">
                        Dengan penuh syukur atas kasih dan penyertaan Tuhan, kami mengundang Anda untuk menjadi bagian dari awal perjalanan baru kami.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                    {people.map((person, index) => (
                        <article key={person.role} className={index === 1 ? "md:mt-20" : ""}>
                            <div className="group relative aspect-[4/5] overflow-hidden rounded-[10rem_10rem_1.75rem_1.75rem] bg-[#d8cbb9] shadow-[0_26px_70px_rgba(58,44,34,.14)]">
                                <Image
                                    src="/images/dummyfoto.png"
                                    alt={person.name}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className={`object-cover transition duration-700 group-hover:scale-105 ${person.position}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1e332b]/85 via-transparent to-transparent" />
                                <p className="absolute bottom-6 left-6 text-xs font-bold uppercase tracking-[0.3em] text-[#f1d99f]">{person.role}</p>
                            </div>
                            <div className="px-3 pt-7 text-center">
                                <p className="font-serif text-4xl font-semibold text-[#273d35] md:text-5xl">{person.nickname}</p>
                                <p className="mt-2 text-sm font-semibold text-[#564b40]">{person.name}</p>
                                <p className="mt-2 text-xs leading-6 text-[#8a7a6b]">{person.parents}</p>
                                <span className="mx-auto mt-5 flex size-9 items-center justify-center rounded-full border border-[#c9b28d] text-[#ad7f45]">
                                    <AtSign size={15} />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
