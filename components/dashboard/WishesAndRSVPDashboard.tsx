"use client";

import { useEffect, useMemo, useState } from "react";
import { 
    Heart, 
    UserCheck, 
    UserX, 
    Users, 
    Search, 
    RefreshCw, 
    MessageSquare, 
    CalendarCheck,
    Clock,
    AlertCircle,
    ArrowUpDown
} from "lucide-react";
import { getWishes } from "@/services/wishes.service";
import { getRSVPs } from "@/services/rsvp.service";
import type { WishType } from "@/types/wishes.type";
import type { RSVPType } from "@/types/rsvp.type";
import type { DashboardTab, RSVPFilterStatus } from "@/types/dashboard.type";

export default function WishesAndRSVPDashboard() {
    const [activeTab, setActiveTab] = useState<DashboardTab>("wishes");
    const [wishes, setWishes] = useState<WishType[]>([]);
    const [rsvps, setRsvps] = useState<RSVPType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Filter and search
    const [searchQuery, setSearchQuery] = useState("");
    const [rsvpFilter, setRsvpFilter] = useState<RSVPFilterStatus>("all");

    async function fetchData() {
        setLoading(true);
        setError(null);
        try {
            const [wishesRes, rsvpsRes] = await Promise.allSettled([
                getWishes(),
                getRSVPs()
            ]);

            if (wishesRes.status === "fulfilled") {
                const data = wishesRes.value;
                if (Array.isArray(data)) {
                    setWishes(data);
                } else if (Array.isArray(data?.data)) {
                    setWishes(data.data);
                } else {
                    setWishes([]);
                }
            } else {
                console.error("Failed to load wishes:", wishesRes.reason);
            }

            if (rsvpsRes.status === "fulfilled") {
                const data = rsvpsRes.value;
                if (Array.isArray(data)) {
                    setRsvps(data);
                } else if (Array.isArray(data?.data)) {
                    setRsvps(data.data);
                } else {
                    setRsvps([]);
                }
            } else {
                console.error("Failed to load RSVPs:", rsvpsRes.reason);
            }

            if (wishesRes.status === "rejected" && rsvpsRes.status === "rejected") {
                setError("Gagal memuat data dari server backend. Pastikan server backend sedang aktif.");
            }
        } catch (err) {
            console.error("Error fetching dashboard data:", err);
            setError("Terjadi kesalahan saat memuat data.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    // Statistics calculations
    const stats = useMemo(() => {
        const totalWishes = wishes.length;
        const attendingRSVP = rsvps.filter(
            (r) => r.attendance === "attending" || r.attendance === "hadir"
        );
        const notAttendingRSVP = rsvps.filter(
            (r) => r.attendance === "not-attending" || r.attendance === "tidak hadir"
        );
        const totalGuestsAttending = attendingRSVP.reduce(
            (acc, curr) => acc + (Number(curr.totalGuest) || 1),
            0
        );

        return {
            totalWishes,
            totalAttending: attendingRSVP.length,
            totalNotAttending: notAttendingRSVP.length,
            totalGuestsAttending,
        };
    }, [wishes, rsvps]);

    // Filtered Wishes
    const filteredWishes = useMemo(() => {
        if (!searchQuery.trim()) return wishes;
        const query = searchQuery.toLowerCase();
        return wishes.filter((wish) => {
            const name = (wish.name || wish.guestName || "").toLowerCase();
            const msg = (wish.message || "").toLowerCase();
            return name.includes(query) || msg.includes(query);
        });
    }, [wishes, searchQuery]);

    // Filtered RSVPs
    const filteredRSVPs = useMemo(() => {
        return rsvps.filter((rsvp) => {
            const isAttending = rsvp.attendance === "attending" || rsvp.attendance === "hadir";
            if (rsvpFilter === "attending" && !isAttending) return false;
            if (rsvpFilter === "not-attending" && isAttending) return false;

            if (searchQuery.trim()) {
                const name = (rsvp.name || "").toLowerCase();
                return name.includes(searchQuery.toLowerCase());
            }
            return true;
        });
    }, [rsvps, rsvpFilter, searchQuery]);

    function formatDate(dateStr?: string) {
        if (!dateStr) return "-";
        try {
            const d = new Date(dateStr);
            if (isNaN(d.getTime())) return dateStr;
            return new Intl.DateTimeFormat("id-ID", {
                dateStyle: "medium",
                timeStyle: "short",
            }).format(d);
        } catch {
            return dateStr;
        }
    }

    return (
        <div className="space-y-8">
            {/* Top Stat Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                    <div className="flex items-center justify-between text-[#A67C52] mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52]">Total Ucapan</span>
                        <div className="flex size-9 items-center justify-center rounded-xl bg-[#FAF4EB]">
                            <Heart size={18} />
                        </div>
                    </div>
                    <div className="text-3xl font-serif font-bold text-[#2E335B]">{stats.totalWishes}</div>
                    <p className="mt-1 text-xs text-[#726558]">Doa & restu masuk</p>
                </div>

                <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                    <div className="flex items-center justify-between text-emerald-600 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Akan Hadir</span>
                        <div className="flex size-9 items-center justify-center rounded-xl bg-emerald-50">
                            <UserCheck size={18} />
                        </div>
                    </div>
                    <div className="text-3xl font-serif font-bold text-[#2E335B]">{stats.totalAttending}</div>
                    <p className="mt-1 text-xs text-[#726558]">Konfirmasi hadir</p>
                </div>

                <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                    <div className="flex items-center justify-between text-rose-500 mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Berhalangan</span>
                        <div className="flex size-9 items-center justify-center rounded-xl bg-rose-50">
                            <UserX size={18} />
                        </div>
                    </div>
                    <div className="text-3xl font-serif font-bold text-[#2E335B]">{stats.totalNotAttending}</div>
                    <p className="mt-1 text-xs text-[#726558]">Tidak bisa hadir</p>
                </div>

                <div className="rounded-[1.75rem] border border-[#E6DCCE] bg-white/90 p-5 shadow-sm backdrop-blur transition-all hover:shadow-md">
                    <div className="flex items-center justify-between text-[#5B4B8A] mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#5B4B8A]">Total Pax</span>
                        <div className="flex size-9 items-center justify-center rounded-xl bg-[#5B4B8A]/10">
                            <Users size={18} />
                        </div>
                    </div>
                    <div className="text-3xl font-serif font-bold text-[#2E335B]">{stats.totalGuestsAttending}</div>
                    <p className="mt-1 text-xs text-[#726558]">Estimasi porsi/tamu</p>
                </div>
            </div>

            {error && (
                <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50/90 p-4 text-sm text-amber-900">
                    <AlertCircle size={20} className="shrink-0 text-amber-600" />
                    <span>{error}</span>
                </div>
            )}

            {/* Navigation Tabs & Actions */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E6DCCE] pb-4">
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => {
                            setActiveTab("wishes");
                            setSearchQuery("");
                        }}
                        className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${
                            activeTab === "wishes"
                                ? "bg-[#5B4B8A] text-white shadow-md shadow-[#5B4B8A]/20"
                                : "bg-white/80 text-[#6B5E78] hover:bg-white hover:text-[#2E335B]"
                        }`}
                    >
                        <MessageSquare size={17} />
                        <span>Ucapan & Doa ({wishes.length})</span>
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setActiveTab("rsvp");
                            setSearchQuery("");
                        }}
                        className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${
                            activeTab === "rsvp"
                                ? "bg-[#5B4B8A] text-white shadow-md shadow-[#5B4B8A]/20"
                                : "bg-white/80 text-[#6B5E78] hover:bg-white hover:text-[#2E335B]"
                        }`}
                    >
                        <CalendarCheck size={17} />
                        <span>Daftar RSVP ({rsvps.length})</span>
                    </button>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={fetchData}
                        disabled={loading}
                        className="inline-flex items-center gap-2 rounded-2xl border border-[#E6DCCE] bg-white px-4 py-2.5 text-xs font-semibold text-[#6B5E78] transition hover:border-[#5B4B8A] hover:text-[#5B4B8A] disabled:opacity-50"
                        title="Segarkan Data"
                    >
                        <RefreshCw size={14} className={loading ? "animate-spin" : ""} />
                        <span>{loading ? "Memuat..." : "Refresh"}</span>
                    </button>
                </div>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89B8E]" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder={
                            activeTab === "wishes"
                                ? "Cari nama atau isi ucapan..."
                                : "Cari nama tamu RSVP..."
                        }
                        className="h-12 w-full rounded-2xl border border-[#E6DCCE] bg-white/90 pl-11 pr-4 text-sm text-[#2E335B] placeholder:text-[#A89B8E] outline-none transition focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10"
                    />
                </div>

                {activeTab === "rsvp" && (
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] mr-1">Status:</span>
                        {(["all", "attending", "not-attending"] as const).map((filter) => (
                            <button
                                key={filter}
                                type="button"
                                onClick={() => setRsvpFilter(filter)}
                                className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
                                    rsvpFilter === filter
                                        ? "bg-[#2E335B] text-white"
                                        : "bg-white/80 text-[#6B5E78] hover:bg-white"
                                }`}
                            >
                                {filter === "all" ? "Semua" : filter === "attending" ? "Hadir" : "Berhalangan"}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Content Lists */}
            {activeTab === "wishes" ? (
                /* Wishes List */
                <div className="space-y-4">
                    {loading && wishes.length === 0 ? (
                        <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                            <RefreshCw size={24} className="mx-auto mb-3 animate-spin text-[#A67C52]" />
                            <p className="text-sm font-medium">Sedang memuat daftar ucapan...</p>
                        </div>
                    ) : filteredWishes.length > 0 ? (
                        <div className="grid gap-4 md:grid-cols-2">
                            {filteredWishes.map((wish, idx) => (
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
                    ) : (
                        <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                            <Heart size={32} className="mx-auto mb-3 text-[#A67C52]/40" />
                            <p className="text-base font-serif font-semibold text-[#2E335B]">Belum ada ucapan yang cocok</p>
                            <p className="mt-1 text-sm text-[#726558]">
                                {searchQuery ? "Coba kata kunci pencarian yang lain." : "Belum ada ucapan yang dikirimkan oleh tamu."}
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                /* RSVPs List / Table */
                <div className="space-y-4">
                    {loading && rsvps.length === 0 ? (
                        <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                            <RefreshCw size={24} className="mx-auto mb-3 animate-spin text-[#A67C52]" />
                            <p className="text-sm font-medium">Sedang memuat data RSVP...</p>
                        </div>
                    ) : filteredRSVPs.length > 0 ? (
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
                                        {filteredRSVPs.map((rsvp, idx) => {
                                            const isAttending = rsvp.attendance === "attending" || rsvp.attendance === "hadir";
                                            return (
                                                <tr key={rsvp.id ?? idx} className="hover:bg-[#FAF7F2]/60 transition">
                                                    <td className="py-4 px-6 font-medium">
                                                        <div className="flex items-center gap-3">
                                                            <div className="size-8 rounded-full bg-[#FAF4EB] border border-[#E6DCCE] flex items-center justify-center font-serif text-xs font-bold text-[#A67C52]">
                                                                {rsvp.name?.charAt(0) || "T"}
                                                            </div>
                                                            <span className="font-serif font-bold text-[#2E335B]">
                                                                {rsvp.name}
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
                    ) : (
                        <div className="rounded-[2rem] border border-[#E6DCCE] bg-white/80 p-12 text-center text-[#726558]">
                            <Users size={32} className="mx-auto mb-3 text-[#A67C52]/40" />
                            <p className="text-base font-serif font-semibold text-[#2E335B]">Belum ada data RSVP</p>
                            <p className="mt-1 text-sm text-[#726558]">
                                {searchQuery ? "Tidak ada nama tamu yang sesuai." : "Belum ada tamu yang mengirimkan konfirmasi kehadiran."}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
