import api from "@/lib/axios";

export type RSVPPayload = {
    name: string;
    attendance: string;
    totalGuest: number;
};

export async function createRSVP(
    invitationId: string,
    payload: RSVPPayload
) {
    const response = await api.post(
        `/rsvp/${invitationId}`,
        payload
    );

    return response.data;
}

export async function getRSVPs(invitationId: string) {
    const response = await api.get(
        `/rsvp/${invitationId}`
    );

    return response.data;
}
