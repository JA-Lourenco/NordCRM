import axios from "axios";

const token = localStorage.getItem("authToken") || "";

console.log("api axios", token);

const host = "http://localhost:8080";
const headers = {
	Authorization: `Bearer ${token}`,
};

export const login = axios.create({
	baseURL: `${host}`,
});

export const userApi = axios.create({
	baseURL: `${host}/api/v1`,
});

export const api = axios.create({
	baseURL: `${host}/api/v1`,
	headers,
});
