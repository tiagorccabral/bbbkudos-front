import axios from "axios";

const endpointUrl = "http://localhost:3000";

export const apiEndPoint = `${endpointUrl}/v1`;
export const imageEndpoint = `${endpointUrl}`;

export const setAuthToken = (token) => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

const getUserInfo = () => {
    return localStorage.getItem("jwtToken");
};

export const apiRequest = axios.create({
    baseURL: apiEndPoint,
    headers: {
        common: {
            Authorization: `Bearer ${getUserInfo()}`,
        },
    },
});
