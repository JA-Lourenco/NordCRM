import axios from "axios";

const token = localStorage.getItem("authToken") || "";

const host = "http://localhost:8080";

const headers = {
	Authorization: `Bearer ${token}`,
};

export const login = axios.create({
	baseURL: `${host}`,
});

export const api = axios.create({
	baseURL: `${host}/api/v1`,
	headers,
});
