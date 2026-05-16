export type CoupleType = {
    fullName: string;
    nickName: string;
    fatherName: string;
    motherName: string;
    image: string;
    instagram?: string;
};

export type EventType = {
    title: string;
    date: string;
    time: string;
    location: string;
    mapsUrl: string;
};

export type GalleryType = {
    id: string;
    image: string;
};

export type InvitationType = {
    id: string;
    slug: string;
    groom: CoupleType;
    bride: CoupleType;
    quote: string;
    bibleVerse: string;
    weddingDate: string;
    akad: EventType;
    reception: EventType;
    gallery: GalleryType[];
    music: string;
    createdAt: string;
};
