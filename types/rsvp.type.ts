export type AttendanceOption = "" | "attending" | "not-attending";

export type AttendanceStatus =
    | "attending"
    | "not-attending"
    | "Hadir"
    | "Tidak Hadir"
    | "Masih Ragu"
    | string;

export type RSVPType = {
    id?: string;
    name?: string;
    guestName?: string;
    attendance: AttendanceStatus;
    totalGuest?: number;
    createdAt?: string;
};

export type CreateRSVPType = {
    name: string;
    attendance: string;
    totalGuest: number;
};
