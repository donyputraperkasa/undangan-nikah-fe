import axios from "axios";

let baseURL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000").trim();

// Pastikan selalu menyertakan protokol (http:// atau https://) agar tidak dianggap URL relatif oleh browser
if (baseURL && !baseURL.startsWith("http://") && !baseURL.startsWith("https://")) {
    baseURL = `https://${baseURL}`;
}

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;

