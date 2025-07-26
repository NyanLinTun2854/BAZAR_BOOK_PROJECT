import axios, { AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "http://example.com/api/v1",
  httpsAgent: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    // Add authorization token to every request
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error),
  { synchronous: true }
);

axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API call failed:", error);
    // Handle specific error cases
    if (error.response.status === 401) {
      // Unauthorized
    } else if (error.response.status === 404) {
      // Not found
    }
    return Promise.reject(error);
  }
);

export async function getRequest(url: string) {
  return await axiosClient.get(`/${url}`);
}

export async function postRequest(url: string, payload: any) {
  return await axiosClient.post(`/${url}`, payload);
}

export default { getRequest, postRequest };
