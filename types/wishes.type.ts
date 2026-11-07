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

export type WishPayload = CreateWishType;

export type WishSectionProps = {
    guestName?: string;
};

export type WishCardListProps = {
    wishes: WishType[];
};
