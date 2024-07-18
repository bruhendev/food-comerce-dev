import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_API,
});

export const getBurgers = () => api.get("/burgers");
export const getPizzas = () => api.get("/pizzas");
export const getDrinks = () => api.get("/drinks");
export const getIceCreams = () => api.get("/ice-creams");

export default api;
