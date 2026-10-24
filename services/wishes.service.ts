import api from "@/lib/axios";
import type { CreateWishType } from "@/types/wishes.type";

export type WishPayload = CreateWishType;

export async function createWish(payload: CreateWishType) {
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