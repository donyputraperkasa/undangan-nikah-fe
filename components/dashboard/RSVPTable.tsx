import { RefreshCw, UserCheck, UserX, Users } from "lucide-react";
import type { RSVPTableProps } from "@/types/dashboard.type";

export default function RSVPTable({
    loading,
    totalCount,
    rsvps,
    searchQuery,
    formatDate,
}: RSVPTableProps) {
    if (loading && totalCount === 0) {
        return (
            <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                <RefreshCw size={24} className="mx-auto mb-3 animate-spin text-[#A67C52]" />
                <p className="text-sm font-medium">Sedang memuat data RSVP...</p>
            </div>
        );
    }

    if (rsvps.length === 0) {
        return (
            <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                <Users size={32} className="mx-auto mb-3 text-[#A67C52]/40" />
                <p className="text-base font-serif font-semibold text-[#2E335B]">Belum ada data RSVP</p>
                <p className="mt-1 text-sm text-[#726558]">
                    {searchQuery ? "Tidak ada nama tamu yang sesuai." : "Belum ada tamu yang mengirimkan konfirmasi kehadiran."}
                </p>
            </div>
        );
    }

    return (
        <div className="overflow-hidden rounded-[2rem] border border-[#E6DCCE] bg-white/90 shadow-sm backdrop-blur">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-[#2E335B]">
                    <thead className="bg-[#FAF4EB] text-[11px] font-bold uppercase tracking-wider text-[#A67C52] border-b border-[#E6DCCE]">
                        <tr>
                            <th className="py-4 px-6">Nama Tamu</th>
                            <th className="py-4 px-6">Status Kehadiran</th>
                            <th className="py-4 px-6">Jumlah Tamu</th>
                            <th className="py-4 px-6">Waktu Konfirmasi</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6DCCE]/60">
                        {rsvps.map((rsvp, idx) => {
                            const isAttending = rsvp.attendance === "attending" || rsvp.attendance === "hadir";
                            const displayName = rsvp.name || rsvp.guestName || "Tamu Undangan";
                            return (
                                <tr key={rsvp.id ?? idx} className="hover:bg-[#FAF7F2]/60 transition">
                                    <td className="py-4 px-6 font-medium">
                                        <div className="flex items-center gap-3">
                                            <div className="size-8 rounded-full bg-[#FAF4EB] border border-[#E6DCCE] flex items-center justify-center font-serif text-xs font-bold text-[#A67C52] uppercase">
                                                {displayName.charAt(0)}
                                            </div>
                                            <span className="font-serif font-bold text-[#2E335B]">
                                                {displayName}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6">
                                        {isAttending ? (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
                                                <UserCheck size={13} />
                                                Akan Hadir
                                            </span>
                                        ) : (
                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700 border border-rose-200">
                                                <UserX size={13} />
                                                Berhalangan
                                            </span>
                                        )}
                                    </td>
                                    <td className="py-4 px-6 text-[#6B5E78]">
                                        {rsvp.totalGuest || 1} orang
                                    </td>
                                    <td className="py-4 px-6 text-xs text-[#726558]">
                                        {formatDate(rsvp.createdAt)}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

