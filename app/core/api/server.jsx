import axios from "axios";

// Store
import store from "core/store";

// Selectors
import { getToken } from "core/selectors";

const Server = axios.create({
  baseURL: env.API_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});

Server.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    getToken(store.getState())
  }`;
  return config;
});

export default Server;