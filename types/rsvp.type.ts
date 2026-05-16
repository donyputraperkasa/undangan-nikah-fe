export type RSVPType = {
    id: string;
    name: string;
    attendance: "Hadir" | "Tidak Hadir" | "Masih Ragu";
    totalGuest: number;
    createdAt: string;
};

export type CreateRSVPType = {
    name: string;
    attendance: string;
    totalGuest: number;
};
