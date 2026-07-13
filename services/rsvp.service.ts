import api from "@/lib/axios";

export type RSVPPayload = {
    name: string;
    attendance: string;
    totalGuest: number;
};

export async function createRSVP(
    payload: RSVPPayload
) {
    const response = await api.post(
        "/rsvp",
        payload
    );

    return response.data;
}

export async function getRSVPs() {
    const response = await api.get(
        "/rsvp"
    );

    return response.data;
}
