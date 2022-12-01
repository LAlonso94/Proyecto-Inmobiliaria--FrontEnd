import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

//Obtiene el token almacenado en el localStorage, setea el header de la peticion http y le pasa el token a nuestro backend
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token && config.headers) {
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default API;
