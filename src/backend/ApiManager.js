import axios from "axios";
import { BaseUrll } from "./Config";
axios.defaults.baseURL = BaseUrll;
// console.log("baseeeurl", axios.defaults.baseURL);
axios.interceptors.response.use(
  (response) => {
    // console.log("res====", response);
    return response?.data;
  },
  (error) => {
    return error?.response?.data
      ? error?.response?.data
      : { error: "Something went wrong" };
  }
);

export const ApiManager = {
  get: async (endpoint, params = {}) => {
    return axios.get(endpoint, { params });
  },
  post: async (endpoint, body, params = {}) => {
    // console.log("hhhhhh", endpoint, body);
    return axios.post(endpoint, body, { params });
  },
  put: async (endpoint, body, params = {}) => {
    return axios.put(endpoint, body, { params });
  },
  patch: async (endpoint, body, params = {}) => {
    return axios.patch(endpoint, body, { params });
  },
  delete: async (endpoint, params = {}) => {
    return axios.delete(endpoint, { params });
  },
};
