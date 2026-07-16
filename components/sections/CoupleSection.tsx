import { AtSign } from "lucide-react";
import Image from "next/image";

const people = [
    {
        role: "Mempelai Pria",
        name: "Ignasius Dwi Cahyo Nugroho",
        nickname: "Nugroho",
        parents: "Putra dari Bapak Antonius & Ibu Maria",
    },
    {
        role: "Mempelai Wanita",
        name: "Agata",
        nickname: "Agata",
        parents: "Putri dari Bapak Yohanes & Ibu Theresia",
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

                <div className="mx-auto max-w-xl">
                    <figure className="relative aspect-[864/1821] w-full overflow-hidden rounded-[12rem_12rem_2rem_2rem] bg-[#d8cbb9] shadow-[0_26px_70px_rgba(58,44,34,.16)]">
                        <Image
                            src="/images/naruto-hinata-prewed.png"
                            alt="Ilustrasi prewedding pasangan"
                            fill
                            sizes="(max-width: 640px) 100vw, 576px"
                            className="object-contain object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1e332b]/55 via-transparent to-transparent" />
                        <p className="absolute inset-x-5 bottom-6 text-center text-xs font-bold uppercase tracking-[0.3em] text-[#f1d99f]">
                            Together is a beautiful place to be
                        </p>
                    </figure>
                </div>

                <div className="relative z-10 mx-auto -mt-2 grid max-w-4xl gap-4 sm:grid-cols-2 md:-mt-14 md:gap-6">
                    {people.map((person) => (
                        <article key={person.role} className="rounded-[1.75rem] border border-[#ded2c0] bg-white/90 p-6 text-center shadow-[0_18px_50px_rgba(58,44,34,.10)] backdrop-blur md:p-8">
                            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ad7f45]">{person.role}</p>
                            <h3 className="mt-3 font-serif text-4xl font-semibold text-[#273d35] md:text-5xl">{person.nickname}</h3>
                            <p className="mt-2 text-sm font-semibold text-[#564b40]">{person.name}</p>
                            <p className="mt-2 text-xs leading-6 text-[#8a7a6b]">{person.parents}</p>
                            <span className="mx-auto mt-5 flex size-9 items-center justify-center rounded-full border border-[#c9b28d] text-[#ad7f45]">
                                <AtSign size={15} />
                            </span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
