import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:1337/api",
});

export const login = async (email, password) => {
    try {
        const response = await api.post("/auth/local", {
            identifier: email,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        throw error;
    }
};

export const getData = async (token, endpoint) => {
    try {
        const response = await api.get(endpoint, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
        throw error;
    }
};
