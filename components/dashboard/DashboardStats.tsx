import { Heart, UserCheck, UserX, Users } from "lucide-react";

type DashboardStatsProps = {
    totalWishes: number;
    totalAttending: number;
    totalNotAttending: number;
    totalGuestsAttending: number;
};

export default function DashboardStats({
    totalWishes,
    totalAttending,
    totalNotAttending,
    totalGuestsAttending,
}: DashboardStatsProps) {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                <div className="flex items-center justify-between text-[#A67C52] mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">Total Ucapan</span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-[#FAF4EB]">
                        <Heart size={18} />
                    </div>
                </div>
                <div className="text-3xl font-serif font-bold text-[#2E335B]">{totalWishes}</div>
                <p className="mt-1 text-xs text-[#726558]">Doa &amp; restu masuk</p>
            </div>

            <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                <div className="flex items-center justify-between text-emerald-600 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Akan Hadir</span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-50">
                        <UserCheck size={18} />
                    </div>
                </div>
                <div className="text-3xl font-serif font-bold text-[#2E335B]">{totalAttending}</div>
                <p className="mt-1 text-xs text-[#726558]">Konfirmasi hadir</p>
            </div>

            <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                <div className="flex items-center justify-between text-rose-500 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Berhalangan</span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-rose-50">
                        <UserX size={18} />
                    </div>
                </div>
                <div className="text-3xl font-serif font-bold text-[#2E335B]">{totalNotAttending}</div>
                <p className="mt-1 text-xs text-[#726558]">Tidak bisa hadir</p>
            </div>

            <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                <div className="flex items-center justify-between text-[#5B4B8A] mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#5B4B8A]">Total Pax</span>
                    <div className="flex size-9 items-center justify-center rounded-xl bg-[#5B4B8A]/10">
                        <Users size={18} />
                    </div>
                </div>
                <div className="text-3xl font-serif font-bold text-[#2E335B]">{totalGuestsAttending}</div>
                <p className="mt-1 text-xs text-[#726558]">Estimasi porsi/tamu</p>
            </div>
        </div>
    );
}
