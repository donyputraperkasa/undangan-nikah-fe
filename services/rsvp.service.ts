import api from "@/lib/axios";
import type { CreateRSVPType } from "@/types/rsvp.type";

export type RSVPPayload = CreateRSVPType;

export async function createRSVP(
    payload: CreateRSVPType
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
