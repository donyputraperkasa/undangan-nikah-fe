export type DashboardTab = "wishes" | "rsvp";

export type RSVPFilterStatus = "all" | "attending" | "not-attending";

export type DashboardStats = {
    totalWishes: number;
    totalAttending: number;
    totalNotAttending: number;
    totalGuestsAttending: number;
};
