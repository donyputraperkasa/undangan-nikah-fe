import type { RSVPType } from "./rsvp.type";
import type { WishType } from "./wishes.type";

export type DashboardTab = "wishes" | "rsvp";

export type RSVPFilterStatus = "all" | "attending" | "not-attending";

export type DashboardStatsProps = {
    totalWishes: number;
    totalAttending: number;
    totalNotAttending: number;
    totalGuestsAttending: number;
};

export type WishesListProps = {
    loading: boolean;
    totalCount: number;
    wishes: WishType[];
    searchQuery: string;
    formatDate: (dateStr?: string) => string;
};

export type RSVPTableProps = {
    loading: boolean;
    totalCount: number;
    rsvps: RSVPType[];
    searchQuery: string;
    formatDate: (dateStr?: string) => string;
};
