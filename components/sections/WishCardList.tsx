import type { WishType } from "@/types/wishes.type";

type WishCardListProps = {
    wishes: WishType[];
};

export default function WishCardList({ wishes }: WishCardListProps) {
    if (!Array.isArray(wishes) || wishes.length === 0) {
        return (
            <p className="text-sm text-[#726558] italic py-4">
                Belum ada ucapan. Jadilah yang pertama mengirimkan doa restu!
            </p>
        );
    }

    return (
        <>
            {wishes.map((wish, index) => (
                <div
                    key={wish.id ?? index}
                    className="group w-full bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-[#E6DCCE] text-left transition-all hover:shadow-md"
                >
                    <div className="flex items-center gap-3.5 mb-3">
                        <div className="size-10 shrink-0 rounded-full bg-[#5B4B8A]/10 flex items-center justify-center text-[#5B4B8A] font-serif font-bold italic border border-[#5B4B8A]/20 uppercase">
                            {(wish.name || wish.guestName || "T").charAt(0)}
                        </div>

                        <div className="flex flex-col">
                            <p className="text-base font-serif font-bold text-[#2E335B] leading-tight">
                                {wish.name || wish.guestName}
                            </p>
                            <p className="text-[10px] text-[#A67C52] uppercase tracking-[0.2em] mt-0.5">
                                Tamu Undangan
                            </p>
                        </div>
                    </div>

                    <div className="relative pl-3 border-l-2 border-[#5B4B8A]/30">
                        <p className="text-sm text-[#463853] leading-relaxed italic">
                            &ldquo;{wish.message}&rdquo;
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}
