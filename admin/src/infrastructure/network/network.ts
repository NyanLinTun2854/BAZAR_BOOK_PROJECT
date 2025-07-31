import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";

// Create axios instance with proper TypeScript typing
const axiosClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8000/v1/api/admin",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

// Request interceptor
axiosClient.interceptors.request.use(
  (config) => {
    // Add authorization token to every request if available
    // const token = localStorage.getItem("token");
    // if (token) {
    //   config.headers = config.headers || {};
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    // Handle successful responses
    if (
      response.data?.status_code === "200" ||
      response.data?.status_code === "201"
    ) {
      return response.data; // Return only the data part
    }

    // Convert non-success status to error
    const errorMessage = response.data?.message || "Request failed";
    return Promise.reject(new Error(errorMessage));
  },
  (error: any) => {
    // Handle error message from response
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      "An unknown error occurred";
    return Promise.reject(new Error(errorMessage));
  }
);

// Typed request methods
export async function getRequest<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axiosClient.get(url, config);
  return response.data;
}

export async function postRequest<T>(
  url: string,
  payload?: any,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axiosClient.post(
    url,
    payload,
    config
  );
  return response.data;
}

export async function putRequest<T>(
  url: string,
  payload?: any,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axiosClient.put(
    url,
    payload,
    config
  );
  return response.data;
}

export async function deleteRequest<T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> {
  const response: AxiosResponse<T> = await axiosClient.delete(url, config);
  return response.data;
}

// Export the configured axios instance and methods
export default {
  instance: axiosClient,
  get: getRequest,
  post: postRequest,
  put: putRequest,
  delete: deleteRequest,
};
