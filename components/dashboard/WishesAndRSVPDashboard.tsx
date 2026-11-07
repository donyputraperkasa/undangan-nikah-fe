"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, RefreshCw, MessageSquare, CalendarCheck, AlertCircle } from "lucide-react";
import { getWishes } from "@/services/wishes.service";
import { getRSVPs } from "@/services/rsvp.service";
import type { WishType } from "@/types/wishes.type";
import type { RSVPType } from "@/types/rsvp.type";
import type { DashboardTab, RSVPFilterStatus } from "@/types/dashboard.type";
import DashboardStats from "./DashboardStats";
import WishesList from "./WishesList";
import RSVPTable from "./RSVPTable";

function formatDashboardDate(dateStr?: string) {
    if (!dateStr) return "-";
    const d = new Date(dateStr);
    return isNaN(d.getTime()) ? dateStr : new Intl.DateTimeFormat("id-ID", { dateStyle: "medium", timeStyle: "short" }).format(d);
}

export default function WishesAndRSVPDashboard() {
    const [activeTab, setActiveTab] = useState<DashboardTab>("wishes");
    const [wishes, setWishes] = useState<WishType[]>([]);
    const [rsvps, setRsvps] = useState<RSVPType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [rsvpFilter, setRsvpFilter] = useState<RSVPFilterStatus>("all");

    async function fetchData() {
        setLoading(true);
        setError(null);
        const [wishesRes, rsvpsRes] = await Promise.allSettled([getWishes(), getRSVPs()]);
        if (wishesRes.status === "fulfilled") {
            const d = wishesRes.value;
            setWishes(Array.isArray(d) ? d : Array.isArray(d?.data) ? d.data : []);
        }
        if (rsvpsRes.status === "fulfilled") {
            const d = rsvpsRes.value;
            setRsvps(Array.isArray(d) ? d : Array.isArray(d?.data) ? d.data : []);
        }
        if (wishesRes.status === "rejected" && rsvpsRes.status === "rejected") {
            setError("Gagal memuat data dari server backend. Pastikan server backend sedang aktif.");
        }
        setLoading(false);
    }

    useEffect(() => { void fetchData(); }, []);

    const stats = useMemo(() => {
        const attending = rsvps.filter((r) => r.attendance === "attending" || r.attendance === "hadir");
        const notAttending = rsvps.filter((r) => r.attendance === "not-attending" || r.attendance === "tidak hadir");
        const totalGuestsAttending = attending.reduce((acc, c) => acc + (Number(c.totalGuest) || 1), 0);
        return { totalWishes: wishes.length, totalAttending: attending.length, totalNotAttending: notAttending.length, totalGuestsAttending };
    }, [wishes, rsvps]);

    const filteredWishes = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        return !q ? wishes : wishes.filter((w) => (w.name || w.guestName || "").toLowerCase().includes(q) || (w.message || "").toLowerCase().includes(q));
    }, [wishes, searchQuery]);

    const filteredRSVPs = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        return rsvps.filter((r) => {
            const isAttending = r.attendance === "attending" || r.attendance === "hadir";
            if ((rsvpFilter === "attending" && !isAttending) || (rsvpFilter === "not-attending" && isAttending)) return false;
            return !q || (r.name || r.guestName || "").toLowerCase().includes(q);
        });
    }, [rsvps, rsvpFilter, searchQuery]);

    return (
        <div className="space-y-8">
            <DashboardStats {...stats} />
            {error && (
                <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50/90 p-4 text-sm text-amber-900">
                    <AlertCircle size={20} className="shrink-0 text-amber-600" /> <span>{error}</span>
                </div>
            )}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#E6DCCE] pb-4">
                <div className="flex gap-2">
                    <button type="button" onClick={() => { setActiveTab("wishes"); setSearchQuery(""); }} className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${activeTab === "wishes" ? "bg-[#5B4B8A] text-white shadow-md shadow-[#5B4B8A]/20" : "bg-white/80 text-[#6B5E78] hover:bg-white hover:text-[#2E335B]"}`}>
                        <MessageSquare size={17} /> <span>Ucapan &amp; Doa ({wishes.length})</span>
                    </button>
                    <button type="button" onClick={() => { setActiveTab("rsvp"); setSearchQuery(""); }} className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${activeTab === "rsvp" ? "bg-[#5B4B8A] text-white shadow-md shadow-[#5B4B8A]/20" : "bg-white/80 text-[#6B5E78] hover:bg-white hover:text-[#2E335B]"}`}>
                        <CalendarCheck size={17} /> <span>Daftar RSVP ({rsvps.length})</span>
                    </button>
                </div>
                <button type="button" onClick={fetchData} disabled={loading} className="inline-flex items-center gap-2 rounded-2xl border border-[#E6DCCE] bg-white px-4 py-2.5 text-xs font-semibold text-[#6B5E78] transition hover:border-[#5B4B8A] hover:text-[#5B4B8A] disabled:opacity-50">
                    <RefreshCw size={14} className={loading ? "animate-spin" : ""} /> <span>{loading ? "Memuat..." : "Refresh"}</span>
                </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1 max-w-md">
                    <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A89B8E]" />
                    <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder={activeTab === "wishes" ? "Cari nama atau isi ucapan..." : "Cari nama tamu RSVP..."} className="h-12 w-full rounded-2xl border border-[#E6DCCE] bg-white/90 pl-11 pr-4 text-sm text-[#2E335B] placeholder:text-[#A89B8E] outline-none transition focus:border-[#5B4B8A] focus:ring-4 focus:ring-[#5B4B8A]/10" />
                </div>
                {activeTab === "rsvp" && (
                    <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#A67C52] mr-1">Status:</span>
                        {(["all", "attending", "not-attending"] as const).map((f) => (
                            <button key={f} type="button" onClick={() => setRsvpFilter(f)} className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${rsvpFilter === f ? "bg-[#2E335B] text-white" : "bg-white/80 text-[#6B5E78] hover:bg-white"}`}>
                                {f === "all" ? "Semua" : f === "attending" ? "Hadir" : "Berhalangan"}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {activeTab === "wishes" ? (
                <WishesList loading={loading} totalCount={wishes.length} wishes={filteredWishes} searchQuery={searchQuery} formatDate={formatDashboardDate} />
            ) : (
                <RSVPTable loading={loading} totalCount={rsvps.length} rsvps={filteredRSVPs} searchQuery={searchQuery} formatDate={formatDashboardDate} />
            )}
        </div>
    );
}
