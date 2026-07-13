import api from "@/lib/axios";

export type WishPayload = {
    name: string;
    message: string;
};

export async function createWish(payload: WishPayload) {
    const response = await api.post(
        "/wishes",
        payload
    );

    return response.data;
}

export async function getWishes() {
    const response = await api.get(
        "/wishes"
    );

    return response.data;
}