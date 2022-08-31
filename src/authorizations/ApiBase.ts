import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getToken, getAuthenticate } from "./Auth";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  console.info(`[request] [${JSON.stringify(config)}]`);
  if (getAuthenticate()) {
    const token = getToken();
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const [localhost] = ["http://localhost:5173"];

export const ApiBase = axios.create({
  baseURL: localhost,
});

export const authorization = ApiBase.interceptors.request.use(
  onRequest,
  onRequestError
);
