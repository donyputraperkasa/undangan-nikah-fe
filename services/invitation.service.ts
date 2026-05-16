import api from "@/lib/axios";

export async function getInvitationBySlug(slug: string) {
    const response = await api.get(`/invitation/${slug}`);

    return response.data;
}

export async function getAllInvitations() {
    const response = await api.get("/invitation");

    return response.data;
}
