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
    pemberkatan: EventType;
    reception: EventType;
    gallery: GalleryType[];
    music: string;
    createdAt: string;
};

export interface InvitationPageProps {
    params: Promise<{
        slug: string;
    }>;
    searchParams: Promise<{
        to?: string | string[];
    }>;
}

export type HeroSectionProps = {
    guestName?: string;
};

export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

export type GoogleMapsButtonProps = {
    link: string;
};

export type CopiedType = "link" | "message" | null;

export type InvitationSharePreviewProps = {
    invitationUrl: string;
    message: string;
    whatsappUrl: string;
    copied: CopiedType;
    onCopy: (value: string, type: "link" | "message") => void;
};
