import axios from "axios";

const host = "http://localhost:8080";

export const login = axios.create({
	baseURL: `${host}`,
});

export const userApi = axios.create({
	baseURL: `${host}/api/v1`,
});

export const api = axios.create({
	baseURL: `${host}/api/v1`,
});
