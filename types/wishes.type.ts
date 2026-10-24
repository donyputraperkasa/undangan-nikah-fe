export type WishType = {
    id?: string;
    name?: string;
    guestName?: string;
    message: string;
    createdAt?: string;
};

export type CreateWishType = {
    name: string;
    message: string;
};
