import { Clock, Heart, RefreshCw } from "lucide-react";
import type { WishType } from "@/types/wishes.type";

type WishesListProps = {
    loading: boolean;
    totalCount: number;
    wishes: WishType[];
    searchQuery: string;
    formatDate: (dateStr?: string) => string;
};

export default function WishesList({
    loading,
    totalCount,
    wishes,
    searchQuery,
    formatDate,
}: WishesListProps) {
    if (loading && totalCount === 0) {
        return (
            <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                <RefreshCw size={24} className="mx-auto mb-3 animate-spin text-[#A67C52]" />
                <p className="text-sm font-medium">Sedang memuat daftar ucapan...</p>
            </div>
        );
    }

    if (wishes.length === 0) {
        return (
            <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                <Heart size={32} className="mx-auto mb-3 text-[#A67C52]/40" />
                <p className="text-base font-serif font-semibold text-[#2E335B]">Belum ada ucapan yang cocok</p>
                <p className="mt-1 text-sm text-[#726558]">
                    {searchQuery ? "Coba kata kunci pencarian yang lain." : "Belum ada ucapan yang dikirimkan oleh tamu."}
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-4 md:grid-cols-2">
            {wishes.map((wish, idx) => (
                <div
                    key={wish.id ?? idx}
                    className="group relative flex flex-col justify-between rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-6 shadow-sm backdrop-blur transition hover:border-[#5B4B8A]/40 hover:shadow-md"
                >
                    <div>
                        <div className="flex items-start justify-between gap-3 mb-3">
                            <div className="flex items-center gap-3">
                                <div className="size-11 shrink-0 rounded-full bg-[#5B4B8A]/10 border border-[#5B4B8A]/20 flex items-center justify-center text-[#5B4B8A] font-serif font-bold text-base uppercase">
                                    {(wish.name || wish.guestName || "T").charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-serif text-base font-bold text-[#2E335B] leading-tight">
                                        {wish.name || wish.guestName || "Tamu Undangan"}
                                    </h4>
                                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#A67C52]">
                                        Tamu Undangan
                                    </span>
                                </div>
                            </div>

                            {wish.createdAt && (
                                <div className="flex items-center gap-1 text-[11px] text-[#A89B8E] whitespace-nowrap">
                                    <Clock size={12} />
                                    <span>{formatDate(wish.createdAt)}</span>
                                </div>
                            )}
                        </div>

                        <div className="relative pl-3.5 border-l-2 border-[#5B4B8A]/25 py-0.5 mt-2">
                            <p className="text-sm text-[#463853] leading-relaxed italic">
                                &ldquo;{wish.message}&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
