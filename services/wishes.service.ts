import api from "@/lib/axios";

export type WishPayload = {
    name: string;
    message: string;
};

export async function createWish(
    invitationId: string,
    payload: WishPayload
) {
    const response = await api.post(
        `/wish/${invitationId}`,
        payload
    );

    return response.data;
}

export async function getWishes(invitationId: string) {
    const response = await api.get(
        `/wish/${invitationId}`
    );

    return response.data;
}
