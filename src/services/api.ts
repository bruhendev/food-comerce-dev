import axios from "axios";

const baseURL = import.meta.env.REACT_APP_API_BASE_URL;

const api = axios.create({ baseURL: baseURL });

export const getBurgers = () => api.get("/burguers");
export const getPizzas = () => api.get("/pizzas");
export const getDrinks = () => api.get("/drinks");
export const getIceCreams = () => api.get("/ice-creams");

export default api;
